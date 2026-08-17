import { bible_glyph_characters } from "./bible_glyph_characters.mjs";
import { property_set } from "./property_set.mjs";
export function bible_glyph_characters_lookup(traditions) {
  "$plain traditions";
  "the traditions are lists of glyph redrawings, each shaped like the base vocabulary. They are data to read and nothing that runs.";
  "The glyph vocabulary as a lookup from name to the character to draw, with any number of traditions laid over it in the order given.";
  "A tradition is a DIFFERENCES-ONLY list, and laying it over the base here is what keeps a verse free of it. A verse names glyphs, never characters, so the same verse renders as a Latin cross for one reader and an Orthodox cross for another with nothing about the verse changing. Had a verse named the character, every verse would have had to choose a tradition before it could be written, and adding a tradition later would have meant rewriting the whole Bible.";
  "Later traditions win, which is what makes them stackable. Nothing today stacks two, and the ordering rule costs nothing to state now and would be a guess to invent later.";
  let characters = bible_glyph_characters();
  let lookup = {};
  for (let character of characters) {
    property_set(lookup, character.name, character.character);
  }
  for (let tradition of traditions) {
    for (let character of tradition) {
      property_set(lookup, character.name, character.character);
    }
  }
  return lookup;
}
