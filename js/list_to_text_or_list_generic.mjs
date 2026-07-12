import { list_to_or_list_generic } from "./list_to_or_list_generic.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function list_to_text_or_list_generic(list, word_relationship) {
  let concated = list_to_or_list_generic(list, word_relationship);
  let joined = list_join_empty(concated);
  return joined;
}
