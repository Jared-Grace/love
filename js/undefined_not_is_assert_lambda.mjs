import { error_json_lamba } from "./error_json_lamba.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function undefined_not_is_assert_lambda(value, lambda) {
  if (undefined_is(value)) {
    error_json_lamba(lambda);
  }
}
