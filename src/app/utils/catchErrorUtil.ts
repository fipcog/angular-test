import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

export function CatchErrorUtil(err: HttpErrorResponse) {
  return throwError(() => new Error(err.message))
}