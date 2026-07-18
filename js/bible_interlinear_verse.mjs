import { file_read_json } from "./file_read_json.mjs";
import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
// Given a readable verse reference (e.g. "1 John 3:4"), return its ordered
// interlinear words, each { original, translit, parsing, parsing_long, gloss, strong }.
// The readable "VerseId" is only stamped on the FIRST word of a verse; the rest share
// the numeric "Verse" id — so find the id from the first word, then gather all words.
// Uses plain bracket access because these external rows have optional fields (an
// asserting property_get would throw on the many rows that omit "VerseId").
const ORIGINAL_KEY = "WLC / Nestle Base TR RP WH NE NA SBL";
const GLOSS_KEY = " BSB version ";
export async function bible_interlinear_verse(reference) {
  let words = await file_read_json(bible_interlinear_json_path());
  let first = words.find((x) => x["VerseId"] === reference);
  if (!first) {
    return [];
  }
  let verse_id = first["Verse"];
  let sort_key = first["Language"] === "Hebrew" ? "Heb Sort" : "Greek Sort";
  let verse_words = words.filter((x) => x["Verse"] === verse_id);
  verse_words = verse_words.slice().sort((a, b) => a[sort_key] - b[sort_key]);
  return verse_words
    .map((x) => ({
      original: (x[ORIGINAL_KEY] || "").trim(),
      translit: (x["Translit"] || "").trim(),
      parsing: (x["Parsing"] || "").trim(),
      parsing_long: (x["Parsing_1"] || "").trim(),
      gloss: (x[GLOSS_KEY] || "").trim(),
      strong: x["Str Grk"] || x["Str Heb"] || "",
    }))
    .filter((w) => w.original !== "");
}
