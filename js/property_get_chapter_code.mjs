import { property_get } from "./property_get.mjs";
export function property_get_chapter_code(item) {
  "$plain item";
  "The chapter code a record carries, for handing to a mapping without writing a lambda for it";
  "Chapter records are gathered, counted and differenced all over the Bible side of this repo, and every one of those had its own inline reach for the same word. Named once, a mapping can be handed the getter itself.";
  let chapter_code = property_get(item, "chapter_code");
  return chapter_code;
}
