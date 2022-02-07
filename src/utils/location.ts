import { GeoPoint } from "src/models/job";

export const parseGeoPoint = (pointStr: string): GeoPoint => {
  const numbersSubstr = pointStr.slice(6, pointStr.length - 1);
  const numberParts = numbersSubstr.split(" ");
  return {
    latitude: parseFloat(numberParts[0]),
    longitude: parseFloat(numberParts[1]),
  };
};

export const buildGeographyString = (point?: string): string | undefined => {
  if (!point) return undefined;
  const parsedPoint = JSON.parse(point);
  return `SRID=4326;POINT(${parsedPoint.latitude} ${parsedPoint.longitude})`;
};
