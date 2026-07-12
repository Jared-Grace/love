import { undefined_is } from "./undefined_is.mjs";
export function undefined_is_if_null(result) {
  if (undefined_is(result)) {
    result = null;
  }
  return result;
}
