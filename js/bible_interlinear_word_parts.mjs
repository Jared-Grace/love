import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { bible_interlinear_gloss_key } from "./bible_interlinear_gloss_key.mjs";
import { bible_interlinear_word_base_text } from "./bible_interlinear_word_base_text.mjs";
import { text_trim } from "./text_trim.mjs";
("One row of the Berean interlinear tables, reduced to the fields a gloss author needs.");
("The original-language word is read from the SIGLA-MARKED column and stripped, never from");
("its already-stripped twin. The twin looks like the tidier of the two and is not: it has");
("merged the public-domain base text with the words that come only from modern copyrighted");
("editions, and once merged nothing downstream can tell which word came from where.");
("Reading the marked column keeps that distinction available; the caller drops the");
("edition-specific words with ",
  fn_name("bible_interlinear_words_base"),
  " before the rows arrive here.");
("Plain bracket access on purpose: these external rows omit fields freely, and an asserting");
("read would throw on the many rows that carry no VerseId, no Strong's number, or no gloss.");
("Deliberately does NOT carry the heading, cross-reference, or apparatus-sigla columns -");
("those are Bible Hub's editorial selection rather than facts about the word.");
("Every field is forced to text before trimming. The tables came out of a spreadsheet, so a");
("cell that happens to read as a number arrives as one - a verse whose English rendering is");
("a bare numeral used to throw here, and the whole 31,000-verse walk died on that one row.");
export function bible_interlinear_word_parts(row, marked_key) {
  let gloss_key = bible_interlinear_gloss_key();
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
    strong: row["Str Grk"] || row["Str Heb"] || "",
  };
  return r;
}
