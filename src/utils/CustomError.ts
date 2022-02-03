export interface ICustomError extends Error {
  code?: number;
}

export default class CustomError extends Error implements ICustomError {
  code;
  constructor(message: string, code?: number) {
    super(message);
    this.code = code;
  }
}
