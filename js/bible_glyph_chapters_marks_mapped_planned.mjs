import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_testament_table } from "./bible_glyph_roots_testament_table.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function bible_glyph_chapters_marks_mapped_planned(
  froms_comma,
  tos_comma,
  testament_name,
) {
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it, like New Testament. It names which chapters to walk and nothing that runs.";
  "$plain froms_comma";
  "the froms are the pictures an older root table seated, joined by commas, spelled as the character table spells them. They name pictures to look for and nothing that runs.";
  "$plain tos_comma";
  "the tos are the pictures the table seats now for the words that wore each of the froms, in the same order, joined by commas. They name pictures and nothing that runs.";
  "Every verse that a page drew under an older table, found by moving each of its old pictures onto the picture its words wear now and seeing the verse then agree with the table exactly.";
  "A CHANGE OF TABLE CAN MOVE SEVERAL PICTURES AT ONCE, AND THEN NO ONE OF THEM CAN BE REDRAWN ALONE. On 2026-10-03 phone, a voice, moved from the voice to the loudspeaker, and laleo, to speak, moved from the mouth onto the voice it left. A Revelation page drawn before that still shows the voice for phone and the mouth for laleo, so its voice is drawn as often as the table seats it and only its mouth looks wrong. Redrawing the mouth as the voice alone would leave two voices for one; moving both together puts each word on its own picture.";
  "A VERSE IS DECIDED ONLY WHEN THE MOVE MAKES IT AGREE WITH THE TABLE ON EVERY PICTURE THE MOVE TOUCHES, AND IT DID NOT AGREE BEFORE. Each old picture goes to one new picture, so which mark is which never arises: a page drawn under the old table drew every word of an old picture with it, and every one of those words now wears the same new picture. A verse the move does not make agree was not drawn under that table alone, so it is handed back rather than half fixed.";
  "IT WALKS ONE TESTAMENT, BECAUSE EACH TABLE HAS ITS OWN HISTORY. In Greek laleo went from the mouth to the voice; in Hebrew dabar the verb went from the mouth to the voice with a doing-mark, and the voice with no mark is dabar the word. Asked of both at once, the Greek move decided four Hebrew verses wrongly and agreed by count: First Samuel 24:16 draws the mouth for saying and the doing-voice for the things said, so the move would hand saying the word's picture and leave the word on the verb's, both wrong and every count right. A count cannot see two marks swapped, so the move must be told only where it is true.";
  arguments_assert(arguments, 3);
  bible_glyph_roots_testament_table(testament_name);
  let froms = text_split_comma(froms_comma);
  let tos = text_split_comma(tos_comma);
  let b = equal(froms.length, tos.length);
  assert_json(b, {
    froms,
    tos,
    hint: "each old picture needs exactly one new picture",
  });
  let touched = [...new Set([...froms, ...tos])];
  let decided = [];
  let undecided = [];
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let left = bible_chapter_testament_name(chapter_code);
    if (not_equal(left, testament_name)) {
      continue;
    }
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let rows_by_verse = {};
    for (let row of both.rows) {
      rows_by_verse[row.verse_number] = row;
    }
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let verse_number = verse.verse_number;
      let drawn = bible_glyph_verse_glyph_counts(verse);
      let row = rows_by_verse[verse_number];
      let words = equal(row, undefined) ? [] : row.words;
      let seated = {};
      for (let word of words) {
        seated[word.glyph] = (seated[word.glyph] ?? 0) + 1;
      }
      let moved = {};
      for (let glyph of touched) {
        moved[glyph] = drawn[glyph] ?? 0;
      }
      for (let i = 0; less_than(i, froms.length); i++) {
        moved[froms[i]] -= drawn[froms[i]] ?? 0;
      }
      for (let i = 0; less_than(i, froms.length); i++) {
        moved[tos[i]] += drawn[froms[i]] ?? 0;
      }
      let agreed_before = true;
      let agreed_after = true;
      for (let glyph of touched) {
        if (not_equal(drawn[glyph] ?? 0, seated[glyph] ?? 0)) {
          agreed_before = false;
        }
        if (not_equal(moved[glyph], seated[glyph] ?? 0)) {
          agreed_after = false;
        }
      }
      if (agreed_before) {
        continue;
      }
      let drew_any = false;
      for (let from of froms) {
        if (greater_than(drawn[from] ?? 0, 0)) {
          drew_any = true;
        }
      }
      if (not(drew_any)) {
        continue;
      }
      if (not(agreed_after)) {
        undecided.push({
          chapter_code,
          verse_number,
        });
        continue;
      }
      for (let i = 0; less_than(i, froms.length); i++) {
        let drew = drawn[froms[i]] ?? 0;
        if (equal(drew, 0)) {
          continue;
        }
        let order = [];
        for (let j = 0; less_than(j, drew); j++) {
          order.push(tos[i]);
        }
        decided.push({
          chapter_code,
          verse_number,
          glyph: froms[i],
          drew,
          order,
        });
      }
    }
  }
  let r = {
    decided,
    undecided,
  };
  return r;
}
