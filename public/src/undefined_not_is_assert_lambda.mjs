import { error_json } from "../../../love/public/src/error_json.mjs";
import { undefined_is } from "../../../love/public/src/undefined_is.mjs";
export function undefined_not_is_assert_lambda(value, lambda) {
  if (undefined_is(value)) {
    const message_object = lambda();
    error_json(message);
  }
}
