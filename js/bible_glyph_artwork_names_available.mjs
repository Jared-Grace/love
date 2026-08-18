import { bible_glyph_artwork_assets_tree } from "./bible_glyph_artwork_assets_tree.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function bible_glyph_artwork_names_available() {
  "Every name the artwork set itself holds a picture under, read from the set rather than remembered.";
  "IT EXISTS SO THAT A NAME STOPS BEING A GUESS. The bridge table between this repo's glyph names and the set's own names is written by a person from knowing the emoji, and a few come out spelled the set's way instead - which shows up only as a picture quietly missing. Asking the set what it actually calls things turns each of those from a puzzle into a lookup.";
  "IT ANSWERS ONLY THE NAMES, deliberately, because that is the whole of the question it is for: does the set have a picture for this word. The listing it reads carries more than the names, and whoever needs the rest asks for the listing itself.";
  let entries = await bible_glyph_artwork_assets_tree();
  let names = list_map_property(entries, "path");
  return names;
}
