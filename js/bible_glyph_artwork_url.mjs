import { text_url_encode } from "./text_url_encode.mjs";
import { bible_glyph_artwork_source } from "./bible_glyph_artwork_source.mjs";
import { property_get } from "./property_get.mjs";
import { text_replace_space_underscore_lower } from "./text_replace_space_underscore_lower.mjs";
export function bible_glyph_artwork_url(asset_name) {
  "The address of one glyph's drawn file, worked out from the name the artwork set gives that emoji.";
  "$plain asset_name";
  "the name is the artwork set's own folder name for one emoji, such as Red heart. It names a file to fetch and nothing that runs.";
  "THE ADDRESS IS DERIVED FROM THE NAME rather than stored beside it, because the set names its files by a rule and a stored list would be that rule written down a second time. The folder is the name as given, and the file inside is the same name lowercased with its spaces turned to underscores, with the style and the extension added - so Red heart becomes red underscore heart underscore flat dot svg.";
  "The rule was checked against the set rather than assumed, on two entries whose shapes differ: Fire, which is one word, and Red heart, which is two and so is the one that would expose a wrong separator.";
  "WHAT THIS CANNOT DO is turn one of this Bible's glyph names into an artwork name. This repo calls a glyph heart_red, describing the picture; the artwork set calls it Red heart, which is that emoji's common name in the Unicode data. Neither name is computable from the other - they are two vocabularies that happen to describe the same pictures - so the artwork name has to be recorded per glyph by someone who looks at both. That recording is a table of its own and not a rule, which is why it lives beside this rather than inside it.";
  "THE NAME IS SPELLED THE WAY AN ADDRESS CAN CARRY IT, because most of these names are two words with a space between them and a space cannot travel in an address as itself. Left as it is, the request goes out malformed and every two-word name fails while every one-word name works - a shape of failure that looks like a table full of wrong guesses rather than one missing step.";
  let source = bible_glyph_artwork_source();
  let assets = property_get(source, "assets_url");
  let style = property_get(source, "style");
  let stem = text_replace_space_underscore_lower(asset_name);
  let style_stem = text_replace_space_underscore_lower(style);
  let folder = text_url_encode(asset_name);
  let url =
    assets +
    "/" +
    folder +
    "/" +
    style +
    "/" +
    stem +
    "_" +
    style_stem +
    ".svg";
  return url;
}
