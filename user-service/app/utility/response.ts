export const formatResponse = (
  statusCode: number,
  message: string,
  data: unknown
) => {
  if (data) {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: message,
        data: data,
      }),
    };
  } else {
    return {
      statusCode: statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message: message,
      }),
    };
  }
};

export const SuccessResponse = (data: object) => {
  return formatResponse(200, "success", data);
};
export const ErrorResponse = (code = 1000, error: unknown) => {
  if (Array.isArray(error)) {
    const errorObject = error[0].constraints;
    const errormessage =
      errorObject[Object.keys(errorObject)[0]] || "Error Occured";
    return formatResponse(code, errormessage, []);
  }
  else{
    return formatResponse(code ,   `error:${error}`,[])
  }
};
