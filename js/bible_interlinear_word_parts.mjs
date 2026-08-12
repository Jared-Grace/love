import { bible_interlinear_original_key } from "./bible_interlinear_original_key.mjs";
import { bible_interlinear_gloss_key } from "./bible_interlinear_gloss_key.mjs";
"One row of the Berean interlinear tables, reduced to the fields a gloss author needs.";
"Plain bracket access on purpose: these external rows omit fields freely, and an asserting";
"read would throw on the many rows that carry no VerseId, no Strong's number, or no gloss.";
"Deliberately does NOT carry the heading, cross-reference, or apparatus-sigla columns —";
"those are Bible Hub's editorial selection rather than facts about the word.";
export function bible_interlinear_word_parts(row) {
  let original_key = bible_interlinear_original_key();
  let gloss_key = bible_interlinear_gloss_key();
  let r = {
    original: (row[original_key] || "").trim(),
    translit: (row["Translit"] || "").trim(),
    parsing: (row["Parsing"] || "").trim(),
    parsing_long: (row["Parsing_1"] || "").trim(),
    gloss: (row[gloss_key] || "").trim(),
    strong: row["Str Grk"] || row["Str Heb"] || "",
  };
  return r;
}
