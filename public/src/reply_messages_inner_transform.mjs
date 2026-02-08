import { text_includes_curry_right_get } from "../../../love/public/src/text_includes_curry_right_get.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { string_letters_is } from "../../../love/public/src/string_letters_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { digits_string } from "../../../love/public/src/digits_string.mjs";
export function reply_messages_inner_transform(message) {
  let lower = string_lower_to(message);
  let tokens = string_split_empty(lower);
  let string_includes_curry_right = text_includes_curry_right_get(
    "'" + digits_string(),
  );
  const choices = [string_letters_is, string_includes_curry_right];
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
