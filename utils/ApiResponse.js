const ApiResponse = (
 statusCode = 200,
 data = {},
 message = "Success",
 success = true
) => {
 return {
  statusCode: statusCode,
  data: data,
  message: message,
  success: success,
 };
};

export default ApiResponse;
