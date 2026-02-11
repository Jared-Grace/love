import { list_size } from "../../../love/public/src/list_size.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { error_json } from "./error_json.mjs";
export function list_size_assert_message(list, message, size) {
  let a = list_size(list) === 1;
  if (not(a)) {
    error_json({
      message,
      list,
    });
  }
}
