import middy from "@middy/core";

export const exampleMiddleware: middy.MiddlewareFn = ({ event }) => {
  const name = event.body?.name || process.env.DEFAULT_NAME;
  event.profileName = name;
};
