import { string_includes_curry_right_get } from "../../../love/public/src/string_includes_curry_right_get.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { string_letters_is } from "../../../love/public/src/string_letters_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
export function reply_messages_inner_transform(message) {
  let lower = string_lower_to(message);
  let tokens = string_split_empty(lower);
  let string_includes_curry_right = string_includes_curry_right_get("'");
  const choices = [string_letters_is];
  function lambda(item) {
    function lambda2(fn) {
      let v = fn(item);
      return v;
    }
    let any = list_any(choices, lambda2);
    return any;
  }
  let filtered = list_filter(tokens, lambda);
  return filtered;
}
