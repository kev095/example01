export class ResponseError {
  public name: string;

  public message: string;

  public stackTrace: string = '';

  constructor(name: string, message: string, stackTrace: string | undefined) {
    this.name = name;
    this.message = message;

    if (stackTrace) {
      this.stackTrace = stackTrace;
    }
  }

  public static from(error: Error): ResponseError {
    return new ResponseError(error.name, error.message, error.stack?.toString());
  }

  public toJSON(): string {
    return JSON.stringify(this);
  }
}
