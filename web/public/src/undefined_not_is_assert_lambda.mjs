import { error_json_lamba } from "../../../love/public/src/error_json_lamba.mjs";
import { undefined_is } from "../../../love/public/src/undefined_is.mjs";
export function undefined_not_is_assert_lambda(value, lambda) {
  if (undefined_is(value)) {
    error_json_lamba(lambda);
  }
}
