import type { AWS } from "@serverless/typescript";
import { handlerPath } from "@utils/handlerPath";

export const helloFunctions: AWS["functions"] = {
  getHellos: {
    handler: `${handlerPath(__dirname)}/getHellos.handler`,
    events: [
      {
        httpApi: {
          method: "GET",
          path: "/hello",
        },
      },
    ],
  },
  createHello: {
    handler: `${handlerPath(__dirname)}/createHello.handler`,
    events: [
      {
        httpApi: {
          method: "POST",
          path: "/hello",
        },
      },
    ],
  },
};
