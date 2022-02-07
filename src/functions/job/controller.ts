import { FormattedQueryParameters } from "@libs/api-gateway";
import { models } from "src/db";
import { IJobEntity } from "src/db/models/job";
import { JobDTO, SWJobListResponse } from "src/models/job";
import { parseGeoPoint } from "src/utils/location";

export const listAsync = async (
  query: FormattedQueryParameters
): Promise<SWJobListResponse> => {
  const { JobModel, UserModel } = await models();

  const { location, ...rest } = query.where;
  const newQuery = {
    ...query,
    where: rest,
  };

  const parsedLocation = location && JSON.parse(location);

  const { count, rows } = await JobModel.findAndCountAll({
    ...newQuery,
    include: [
      {
        model: UserModel,
        as: "posterDetails",
        attributes: [
          ["id", "userId"],
          "firstName",
          "lastName",
          "profileImageUrl",
          "isPremium",
        ],
      },
    ],
    attributes: {
      exclude: ["location", "fakeLocation"],
      include: [
        ["ST_AsText(sw_job.fake_location)", "location"],
        parsedLocation && [
          `ST_Distance(ST_MakePoint(${parsedLocation?.latitude},${parsedLocation?.longitude}), "fake_location")`,
          "distance",
        ],
      ],
    },
    raw: true,
    nest: true,
  });

  // DEBT continue controller

  const data: JobDTO[] = rows.map((currentJob: IJobEntity) => ({
    ...currentJob,
    location: currentJob.location ? parseGeoPoint(currentJob.location) : null,
  }));

  return {
    data,
    pagination: {
      page: query.offset / query.limit || 1,
      total: count,
      size: query.limit,
    },
  };
};
