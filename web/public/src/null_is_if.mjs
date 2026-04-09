import { null_is } from "../../../love/public/src/null_is.mjs";
export function null_is_if(value, ast) {
  if (null_is(value)) {
    value = ast;
  }
  return value;
}
