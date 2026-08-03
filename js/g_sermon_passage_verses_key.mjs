import { property_list_join_comma } from "./property_list_join_comma.mjs";
export function g_sermon_passage_verses_key(passage) {
  "One word standing for which verses a passage covers, so two passages over the same verses answer to the same key.";
  let key = property_list_join_comma(passage, "verse_numbers");
  return key;
}
