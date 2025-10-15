import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
export function reply_messages_inner_transform(message) {
  let lower = string_lower_to(message);
  let tokens = string_split_empty(input);
  return lower;
}
