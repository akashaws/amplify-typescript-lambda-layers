import Logger from "../../amplifytypescriptlamcommons/opt/Logger";

exports.handler = async (event) => {
  Logger.log("test logging");
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
