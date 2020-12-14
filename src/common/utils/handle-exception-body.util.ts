export const createHttpExceptionBody = (
  message = '请求失败 ',
  statusCode = -200,
) => ({
  code: statusCode,
  message,
});
