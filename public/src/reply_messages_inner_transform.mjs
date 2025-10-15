import { list_any } from "../../../love/public/src/list_any.mjs";
import { string_letters_is } from "../../../love/public/src/string_letters_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
export function reply_messages_inner_transform(message) {
  let lower = string_lower_to(message);
  let tokens = string_split_empty(lower);
  function lambda(item) {
    let li = string_letters_is(item);
    function lambda2(item2) {}
    let any = list_any(list, lambda2);
  }
  let filtered = list_filter(tokens, lambda);
  return filtered;
}
