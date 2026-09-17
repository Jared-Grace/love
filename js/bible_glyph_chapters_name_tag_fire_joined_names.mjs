import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_name_tag_fire_joined_names_walked } from "./bible_glyph_chapters_name_tag_fire_joined_names_walked.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_chapters_name_tag_fire_joined_names() {
  "Each verse that writes the name tag and the fire with nothing between them, as one word a record can hold: the chapter code, the verse number, how many times.";
  "The record wants names and nothing else. How many verses were opened is read off next door and left there, because it would go stale in a file the moment a chapter was added.";
  arguments_assert(arguments, 0);
  let told = bible_glyph_chapters_name_tag_fire_joined_names_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
