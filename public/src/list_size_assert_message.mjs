import { not } from "../../../love/public/src/not.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { error_json } from "./error_json.mjs";
export function list_size_assert_message(list, message) {
  let a = list_size_1(list);
  if (not(a)) {
    error_json({
      message,
      list,
    });
  }
}
