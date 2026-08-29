import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function bible_glyph_artwork_name_by_glyph() {
  arguments_assert(arguments, 0);
  ("what the artwork set calls each picture, looked up by the picture's own name.");
  ("The artwork decisions are kept as a list, which is the right shape for reading them in order and the wrong shape for asking about one picture. Every reading that walks the vocabulary and wants the drawing beside each mark was turning that list round for itself first, so the turning is done once here.");
  ("A picture the set has no name for is simply absent, and the callers ask in a way that answers null rather than throwing - a picture with no artwork decision is a drawing somebody owes, not a picture that does not exist.");
  let artwork = {};
  for (let entry of bible_glyph_artwork_names()) {
    let glyph_name = property_get(entry, "glyph");
    let set_name = property_get(entry, "asset");
    property_set(artwork, glyph_name, set_name);
  }
  return artwork;
}
