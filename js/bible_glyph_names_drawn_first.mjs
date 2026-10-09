import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
export function bible_glyph_names_drawn_first() {
  arguments_assert(arguments, 0);
  ("Each picture name in the vocabulary, mapped to the first name in the vocabulary that draws the very same character.");
  ("TWO NAMES CAN DRAW ONE PICTURE, and a reader sees the picture, never the name. bow and bow_and_arrow both draw the same bow, so a root seated under one and a root seated under the other come out identical on the page while their names differ. Any check of whether two roots look alike has to fold such twins together first, and this is the fold.");
  ("THE FIRST NAME WINS SO THE ANSWER DOES NOT MOVE. Which twin is first is the vocabulary's own order, which only changes when the vocabulary is edited, so a record keyed by the result stays put while the tables around it grow.");
  let characters = bible_glyph_characters();
  let first_by_character = {};
  let drawn_first = {};
  for (let entry of characters) {
    let seen = property_exists(first_by_character, entry.character);
    if (not(seen)) {
      property_set(first_by_character, entry.character, entry.name);
    }
    let first = property_get(first_by_character, entry.character);
    property_set(drawn_first, entry.name, first);
  }
  return drawn_first;
}
