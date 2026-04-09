import { null_is } from "../../../love/public/src/null_is.mjs";
export function null_is_if(value, value_if_null) {
  if (null_is(value)) {
    value = value_if_null;
  }
  return value;
}
