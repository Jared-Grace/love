import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
export function list_size_assert_message(list, size, message) {
  let a = list_size(list) === size;
  if (not(a)) {
    error_json({
      message,
      list,
      size,
    });
  }
}
