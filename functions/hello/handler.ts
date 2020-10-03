import { APIGatewayProxyHandlerV2 } from "aws-lambda";

const handler: APIGatewayProxyHandlerV2 = async () => {
  return {
    statusCode: 200,
    body: "Works"
  };
};

module.exports.handler = handler;
