import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_characters_twins_names_walked } from "./bible_glyph_characters_twins_names_walked.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_characters_twins_names() {
  arguments_assert(arguments, 0);
  ("Each character held by more than one name, as the words this ratchet's record holds. The count of characters compared is left behind, because it would go stale in a file the moment a name was added.");
  let told = bible_glyph_characters_twins_names_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
