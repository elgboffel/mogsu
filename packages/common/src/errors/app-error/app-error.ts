import { AppErrorType, ErrorMessage } from "../types";

export class AppError implements AppErrorType {
  constructor(error: any) {
    if (error instanceof Error) {
      this.serializeError(error);
      return;
    }

    if (this.isAppErrorType(error)) {
      this.serializeAppErrorType(error);
      return;
    }

    this.invalidError(error);
  }

  serializeError(error: Error) {
    this.isSuccess = false;
    this.raw = error?.stack ?? null;
    this.url = null;
    this.message = error?.message ? { code: null, value: error?.message } : null;
    this.statusCode = 500;
  }

  serializeAppErrorType(error: AppErrorType) {
    this.isSuccess = error?.isSuccess ?? null;
    this.raw = error?.raw ?? null;
    this.url = error?.url ?? null;
    this.statusCode = error?.statusCode ?? null;
    this.message = error.message ?? null;
  }

  private invalidError(error: any) {
    throw new Error(`AppError: Error type not supported`, error);
  }

  private isAppErrorType(obj: any) {
    return "error" in obj && "isSuccess" in obj && "raw" in obj && "url" in obj && "message" in obj && "code" in obj;
  }

  isSuccess: boolean | null = null;
  raw: string | null = null;
  url: string | null = null;
  statusCode: number | null = null;
  message: ErrorMessage | null = null;
}
