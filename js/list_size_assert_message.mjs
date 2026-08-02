import { list_size_equal } from "./list_size_equal.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
export function list_size_assert_message(list, size, message) {
  let a = list_size_equal(list, size);
  if (not(a)) {
    error_json({
      message,
      list,
      size,
    });
  }
}
