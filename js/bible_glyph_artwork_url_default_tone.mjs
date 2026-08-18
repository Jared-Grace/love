import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_artwork_source } from "./bible_glyph_artwork_source.mjs";
import { property_get } from "./property_get.mjs";
import { text_replace_space_underscore_lower } from "./text_replace_space_underscore_lower.mjs";
import { text_url_encode } from "./text_url_encode.mjs";
export function bible_glyph_artwork_url_default_tone(asset_name) {
  "The address of one glyph's drawn file for the emoji that are drawn once per skin tone, taking the default tone.";
  "$plain asset_name";
  "the name is the artwork set's own folder name for one emoji, such as Raised hand. It names a file to fetch and nothing that runs.";
  "AN EMOJI THAT CARRIES A TONE IS KEPT ONE FOLDER DEEPER than one that does not: the tone's name comes between the emoji and the style, and it is added to the end of the file's name as well. So the raised hand is the emoji, then Default, then the style, then the same three joined by underscores.";
  "DEFAULT IS THE YELLOW DRAWING, the one a font shows when no tone has been asked for. Taking it is what keeps a page of glyphs from having quietly cast every person on it in a particular skin, which is a claim this Bible has no business making about the people in it.";
  arguments_assert(arguments, 1);
  let source = bible_glyph_artwork_source();
  let assets = property_get(source, "assets_url");
  let style = property_get(source, "style");
  let tone = "Default";
  let stem = text_replace_space_underscore_lower(asset_name);
  let style_stem = text_replace_space_underscore_lower(style);
  let tone_stem = text_replace_space_underscore_lower(tone);
  let folder = text_url_encode(asset_name);
  let url =
    assets +
    "/" +
    folder +
    "/" +
    tone +
    "/" +
    style +
    "/" +
    stem +
    "_" +
    style_stem +
    "_" +
    tone_stem +
    ".svg";
  return url;
}
