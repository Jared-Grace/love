import { undefined_is } from "../../../love/public/src/undefined_is.mjs";
export function undefined_is_if_null(result) {
  if (undefined_is(result)) {
    result = null;
  }
  return result;
}
