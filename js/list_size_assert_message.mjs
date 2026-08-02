import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { error_json } from "./error_json.mjs";
export function list_size_assert_message(list, size, message) {
  let left = list_size(list);
  let a = equal(left, size);
  if (not(a)) {
    error_json({
      message,
      list,
      size,
    });
  }
}
