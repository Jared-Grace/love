import { list_to_lookup_text_first } from "../../../love/public/src/list_to_lookup_text_first.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
export function list_to_lookup_text_first_unique(mapped) {
  let unique = list_unique(mapped);
  let result = list_to_lookup_text_first(unique);
  return result;
}
