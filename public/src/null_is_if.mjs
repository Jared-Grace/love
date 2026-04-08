import { null_is } from "../../../love/public/src/null_is.mjs";
export function null_is_if(code, ast) {
  if (null_is(code)) {
    code = ast;
  }
  return code;
}
