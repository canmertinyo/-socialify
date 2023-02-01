export class HttpException extends Error {
  constructor(public readonly payload: object | string, public readonly statusCode: number) {
    super()
  }

  public static createPayload(
    payload?: object | string,
    description?: string,
    statusCode?: number
  ): object {
    if (typeof payload === 'object') {
      return payload
    }
    return { statusCode, message: payload, error: description }
  }
}
