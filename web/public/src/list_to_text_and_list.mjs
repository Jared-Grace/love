import { list_to_text_or_list_generic } from "../../../love/public/src/list_to_text_or_list_generic.mjs";
export function list_to_text_and_list(list) {
  const word_relationship = "or";
  let combined = list_to_text_or_list_generic(list, word_relationship);
  return combined;
}
