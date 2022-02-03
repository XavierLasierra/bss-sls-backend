import middy from "@middy/core";
import CustomError from "src/utils/CustomError";

export const exampleMiddleware: middy.MiddlewareFn = ({ event }) => {
  const name = event.body?.name || process.env.DEFAULT_NAME;
  event.profileName = name;
};

export const authMiddleware: middy.MiddlewareFn = ({ event }) => {
  if (!event.userId) {
    throw new CustomError("Not Authorized", 401);
  }
};
