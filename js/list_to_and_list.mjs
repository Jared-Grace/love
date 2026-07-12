import { list_to_and_list_word } from "./list_to_and_list_word.mjs";
import { list_to_or_list_generic } from "./list_to_or_list_generic.mjs";
export function list_to_and_list(list) {
  let word_relationship = list_to_and_list_word();
  let combined = list_to_or_list_generic(list, word_relationship);
  return combined;
}
