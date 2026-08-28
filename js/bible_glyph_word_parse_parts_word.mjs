import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_word_parse_plain } from "./bible_glyph_word_parse_plain.mjs";
export function bible_glyph_word_parse_parts_word(parts) {
  "The word a verse actually stores, from the pieces one typed word was read apart into.";
  "A WORD THAT TURNED OUT TO BE ORDINARY ENGLISH IS HANDED BACK AS ITSELF rather than as a list holding one string. Most words of most verses carry no picture at all, so the list would be the common case and every reader downstream would have to unwrap it before doing anything - and a reader that forgot would compare a list against a word and quietly find them unequal.";
  "A word carrying anything else - a picture, or text on both sides of one - stays a list, because there is no single thing to hand back in its place.";
  arguments_assert(arguments, 1);
  let plain = bible_glyph_word_parse_plain(parts);
  if (plain) {
    let r = parts[0];
    return r;
  }
  return parts;
}
