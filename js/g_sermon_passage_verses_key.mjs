import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
export function g_sermon_passage_verses_key(passage) {
  let verse_numbers = property_get(passage, "verse_numbers");
  let key = list_join_comma(verse_numbers);
  return key;
}
