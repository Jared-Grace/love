import { file_read_json } from "./file_read_json.mjs";
import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
import { property_get } from "./property_get.mjs";
// Given a readable verse reference (e.g. "1 John 3:4"), return its ordered
// interlinear words, each { original, translit, parsing, parsing_long, gloss, strong }.
// The readable "VerseId" is only stamped on the FIRST word of a verse; the rest share
// the numeric "Verse" id — so find the id from the first word, then gather all words.
const ORIGINAL_KEY = "WLC / Nestle Base TR RP WH NE NA SBL";
const GLOSS_KEY = " BSB version ";
export async function bible_interlinear_verse(reference) {
  let words = await file_read_json(bible_interlinear_json_path());
  let first = words.find((x) => property_get(x, "VerseId") === reference);
  if (!first) {
    return [];
  }
  let verse_id = property_get(first, "Verse");
  let sort_key = property_get(first, "Language") === "Hebrew" ? "Heb Sort" : "Greek Sort";
  let verse_words = words.filter((x) => property_get(x, "Verse") === verse_id);
  verse_words = verse_words.slice().sort(function by_sort(a, b) {
    return property_get(a, sort_key) - property_get(b, sort_key);
  });
  return verse_words
    .map(function to_word(x) {
      return {
        original: (property_get(x, ORIGINAL_KEY) || "").trim(),
        translit: (property_get(x, "Translit") || "").trim(),
        parsing: (property_get(x, "Parsing") || "").trim(),
        parsing_long: (property_get(x, "Parsing_1") || "").trim(),
        gloss: (property_get(x, GLOSS_KEY) || "").trim(),
        strong: property_get(x, "Str Grk") || property_get(x, "Str Heb") || "",
      };
    })
    .filter(function non_empty(w) {
      return w.original !== "";
    });
}
