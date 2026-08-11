import { fn_name } from "./fn_name.mjs";
export function list_to_or_list_word() {
  ("the word joining the last two items of an or-list - the sibling of ",
    fn_name("list_to_and_list_word"),
    ", so a caller picking between the two never spells either word itself");
  let w = "or";
  return w;
}
