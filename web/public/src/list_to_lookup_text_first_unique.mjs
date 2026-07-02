import { list_to_lookup_letter_first } from "../../../love/public/src/list_to_lookup_letter_first.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function list_to_lookup_text_first_unique(mapped) {
  let unique = list_unique(mapped);
  let result = list_to_lookup_letter_first(unique);
  return result;
}
