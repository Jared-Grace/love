import { app_replace_why_part_draw } from "./app_replace_why_part_draw.mjs";
import { each } from "./each.mjs";
import { text_quoted_short_parts } from "./text_quoted_short_parts.mjs";
export function app_replace_why_words_draw(parent, words) {
  "A lesson's explanation drawn from a plain sentence, with every short piece in single quotes drawn as the tile it names rather than as a letter between quote marks.";
  "The quotes were already there to say which letters are symbols, so the sentence needs no rewriting to gain the tiles - and a lesson that wants more than a sentence can say is written as a drawing program instead.";
  let parts = text_quoted_short_parts(words);
  function each_part(part) {
    app_replace_why_part_draw(parent, part);
  }
  each(parts, each_part);
}
