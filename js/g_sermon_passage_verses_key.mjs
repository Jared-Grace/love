import { property_list_join_comma } from "./property_list_join_comma.mjs";
export function g_sermon_passage_verses_key(passage) {
  let key = property_list_join_comma(passage, "verse_numbers");
  return key;
}
