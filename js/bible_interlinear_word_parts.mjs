import { bible_interlinear_original_key } from "./bible_interlinear_original_key.mjs";
import { bible_interlinear_gloss_key } from "./bible_interlinear_gloss_key.mjs";
import { text_trim } from "./text_trim.mjs";
"One row of the Berean interlinear tables, reduced to the fields a gloss author needs.";
"Plain bracket access on purpose: these external rows omit fields freely, and an asserting";
"read would throw on the many rows that carry no VerseId, no Strong's number, or no gloss.";
"Deliberately does NOT carry the heading, cross-reference, or apparatus-sigla columns —";
"those are Bible Hub's editorial selection rather than facts about the word.";
"Every field is forced to text before trimming. The tables came out of a spreadsheet, so a";
"cell that happens to read as a number arrives as one - a verse whose English rendering is";
"a bare numeral used to throw here, and the whole 31,000-verse walk died on that one row.";
export function bible_interlinear_word_parts(row) {
  let original_key = bible_interlinear_original_key();
  let gloss_key = bible_interlinear_gloss_key();
  function field(key) {
    let value = row[key];
    let text = value === undefined || value === null ? "" : String(value);
    let trimmed = text_trim(text);
    return trimmed;
  }
  let r = {
    original: field(original_key),
    translit: field("Translit"),
    parsing: field("Parsing"),
    parsing_long: field("Parsing_1"),
    gloss: field(gloss_key),
    strong: row["Str Grk"] || row["Str Heb"] || "",
  };
  return r;
}
