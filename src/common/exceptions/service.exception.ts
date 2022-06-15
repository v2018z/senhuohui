/**
 * 程序失败但 HTTP StatusCode 200
 */
export class ServiceException {
  constructor(private message?: any, private code?: number) {}
}
