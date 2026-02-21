import { error } from "../../../love/public/src/error.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { undefined_is } from "../../../love/public/src/undefined_is.mjs";
export function undefined_not_is_assert_lambda(value, lambda) {
  if (undefined_is(value)) {
    const object = lambda();
    let message = json_to(object);
    error(message);
  }
}
