import { string_letters_is } from "../../../love/public/src/string_letters_is.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
export function reply_messages_inner_transform(message) {
  let lower = string_lower_to(message);
  let li = string_letters_is(str);
  return lower;
}
