import { list_to_text_or_list_generic } from "./list_to_text_or_list_generic.mjs";
export function list_to_text_or_list(list) {
  let word_relationship = "or";
  let combined = list_to_text_or_list_generic(list, word_relationship);
  return combined;
}
