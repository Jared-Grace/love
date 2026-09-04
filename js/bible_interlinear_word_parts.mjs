import { bible_interlinear_gloss_key } from "./bible_interlinear_gloss_key.mjs";
import { bible_interlinear_gloss_sort_key } from "./bible_interlinear_gloss_sort_key.mjs";
import { equal } from "./equal.mjs";
import { text_trim } from "./text_trim.mjs";
import { bible_interlinear_word_base_text } from "./bible_interlinear_word_base_text.mjs";
export function bible_interlinear_word_parts(row, marked_key) {
  let gloss_key = bible_interlinear_gloss_key();
  let gloss_sort_key = bible_interlinear_gloss_sort_key();
  function field(key) {
    let value = row[key];
    let text =
      equal(value, undefined) || equal(value, null) ? "" : String(value);
    let trimmed = text_trim(text);
    return trimmed;
  }
  let marked = field(marked_key);
  let original = bible_interlinear_word_base_text(marked);
  let r = {
    original,
    translit: field("Translit"),
    parsing: field("Parsing"),
    parsing_long: field("Parsing_1"),
    gloss: field(gloss_key),
    gloss_sort: row[gloss_sort_key] || 0,
    strong: row["Str Grk"] || row["Str Heb"] || "",
  };
  return r;
}
