import { httpErrorHandler } from "@middlewares/httpErrorHandler";
import { CustomAPIGatewayProxyRequest } from "@models/api";
import { formatJSONResponse } from "@utils/formatJSONResponse";
import { HttpError } from "@utils/HttpError";

describe("httpErrorHandler", () => {
  it("should return the correct response", () => {
    const error = new HttpError("Unauthorized", 401);
    const response = httpErrorHandler({
      error,
    } as CustomAPIGatewayProxyRequest);

    const expected = formatJSONResponse(
      {
        message: "Unauthorized",
        status: 401,
      },
      401
    );
    expect(response).toEqual(expected);
  });
});
