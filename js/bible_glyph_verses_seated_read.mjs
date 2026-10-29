import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
export async function bible_glyph_verses_seated_read(verse_codes_comma) {
  "$plain verse_codes_comma";
  "the verse codes are chapter codes with a verse number after a colon, such as 1KI02:4, joined by commas. They name verses to read and nothing that runs.";
  "Shows each named verse twice over, so a reader can judge which mark belongs on which word: the page as drawn, with every mark spelled out, and the original words in their own order, each with its word-for-word English and the picture the table seats under it.";
  "THE TWO ARE IN DIFFERENT ORDERS AND THAT IS THE POINT. The page follows the English sentence and the words follow the Hebrew or Greek one, and nothing on the page records which English word a mark replaced. So matching them is a reading, and this only puts both in front of the reader.";
  arguments_assert(arguments, 1);
  let codes = text_split_comma(verse_codes_comma);
  let out = [];
  for (let code of codes) {
    let [chapter_code, verse_text] = code.split(":");
    let verse_number = Number(verse_text);
    let parsed = bible_glyph_chapter(chapter_code);
    function lambda(v) {
      let eq = equal(v.verse_number, verse_number);
      return eq;
    }
    let verse = parsed.verses.find(lambda);
    let b = not_equal(verse, undefined);
    assert_json(b, {
      code,
      hint: "the page has no verse by that number",
    });
    function lambda3(word) {
      function lambda2(part) {
        let r2 = equal(typeof part, "string") ? part : "$" + part.join("+");
        return r2;
      }
      let r3 = equal(typeof word, "string") ? word : word.map(lambda2).join("");
      return r3;
    }
    let page = verse.words.map(lambda3).join(" ");
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    function lambda4(r) {
      let eq2 = equal(r.verse_number, verse_number);
      return eq2;
    }
    let row = both.rows.find(lambda4);
    let words = equal(row, undefined) ? [] : row.words;
    function lambda5(w) {
      let r4 = equal(w.glyph, "") ? w.gloss : w.gloss + "=" + w.glyph;
      return r4;
    }
    let glossed = words.map(lambda5).join(" | ");
    out.push({
      code,
      page,
      words: glossed,
    });
  }
  return out;
}
