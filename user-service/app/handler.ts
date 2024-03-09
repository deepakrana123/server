import { APIGatewayProxyEvent } from "aws-lambda";
export const Signup = async (event:APIGatewayProxyEvent) => {
    console.log(event,"event")
  return {
    statusCode: 200,
    headers:{
        "Access-Control-Allow-Origin":"*",
    },
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        data: {},
      },
      null,
      2
    ),
  };
};
