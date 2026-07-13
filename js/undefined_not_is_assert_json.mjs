import { error_json } from "./error_json.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function undefined_not_is_assert_json(value, json) {
  if (undefined_is(value)) {
    error_json(json);
  }
}
