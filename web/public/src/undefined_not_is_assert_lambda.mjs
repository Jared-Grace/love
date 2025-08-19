import { error } from "./error.mjs";
import { json_to } from "./json_to.mjs";
import { undefined_is } from "./undefined_is.mjs";
export function undefined_not_is_assert_lambda(value, lambda) {
  if (undefined_is(value)) {
    const object = lambda();
    let message = json_to(object);
    error(message);
  }
}
