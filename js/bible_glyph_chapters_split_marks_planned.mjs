import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_roots_split_families } from "./bible_glyph_roots_split_families.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { equal } from "./equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { bible_glyph_gloss_english_absent_is } from "./bible_glyph_gloss_english_absent_is.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
export async function bible_glyph_chapters_split_marks_planned() {
  arguments_assert(arguments, 0);
  ("Every verse that still draws a picture two roots used to share more often than the table now seats it, and which mark each of those drawn pictures should become - or why it cannot be said.");
  ("THE TABLES WERE SPLIT AND THE PAGES WERE NOT. Between the fifth and the thirteenth of October every picture two roots shared was given to one of them and the other root was moved onto a picture of its own, but the chapters already drawn kept the old mark. The collision walk cannot see those marks any more, because it asks the table which pictures are shared and the table now says none. So this asks the history instead: which pictures were once shared, and by which two roots.");
  ("THE CANDIDATES ARE THE OLD PICTURE AND EVERY PICTURE EITHER OF ITS TWO ROOTS NOW HAS THAT THE VERSE HAS NOT FULLY DRAWN YET. That is the seat split reading next door with one difference: there the new picture always began with the old one, and here the moved root may have gone anywhere - the Hebrew word for a word went from the speech bubble to the voice.");
  ("THE ORDER RULE IS THE SEAT SPLIT READING'S OWN, ASKED IN THE SAME ORDER. If every candidate is the same mark and the verse seats that mark at least once more than it draws it for every old mark, every old mark becomes it. If the candidates number exactly the marks drawn, they pair off by position in the original's order. If not, the words English gives nothing are set aside and both questions are asked again. Anything left is handed back as undecided rather than guessed, and a verse with no moved candidate at all is left to the overdrawn gate, because a mark drawn where the moved root does not stand is not a split's leftover.");
  ("THE ROOM IS ASKED BECAUSE A PAGE MAY DRAW THE OLD MARK FOR A WORD THE TABLE SEATS UNDER ANOTHER PICTURE. The Hebrew mouth, peh, is seated as the face with an open mouth and not as the mouth, so where the mouth of the Lord has spoken, a page drawing the mouth twice has one mark for speak and one for the mouth itself. Asked only whether every candidate was the voice, both marks became the voice and the mouth was drawn as speaking.");
  let families = bible_glyph_roots_split_families();
  let decided = [];
  let undecided = [];
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
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
        if (equal(word.glyph, "")) {
          continue;
        }
        seated[word.glyph] = (seated[word.glyph] ?? 0) + 1;
      }
      for (let glyph of object_property_names(families)) {
        let drew = drawn[glyph] ?? 0;
        if (less_than_equal(drew, seated[glyph] ?? 0)) {
          continue;
        }
        let family = families[glyph];
        function candidate_is(word) {
          if (equal(word.glyph, glyph)) {
            return true;
          }
          let b = family.includes(word.glyph);
          if (not(b)) {
            return false;
          }
          let short = less_than(drawn[word.glyph] ?? 0, seated[word.glyph]);
          return short;
        }
        function glyph_of(word) {
          let r2 = word.glyph;
          return r2;
        }
        function spoken_is(word) {
          let absent = bible_glyph_gloss_english_absent_is(word.gloss);
          let n = not(absent);
          return n;
        }
        function moved_is(name) {
          let neq = not_equal(name, glyph);
          return neq;
        }
        let all = words.filter(candidate_is).map(glyph_of);
        let spoken = words.filter(candidate_is).filter(spoken_is).map(glyph_of);
        let moved = all.filter(moved_is);
        if (equal(moved.length, 0)) {
          continue;
        }
        let order = null;
        for (let candidates of [all, spoken]) {
          let distinct = [...new Set(candidates)];
          let room = subtract(
            seated[distinct[0]] ?? 0,
            drawn[distinct[0]] ?? 0,
          );
          if (
            equal(distinct.length, 1) &&
            not_equal(distinct[0], glyph) &&
            less_than_equal(drew, room)
          ) {
            order = [];
            for (let i = 0; less_than(i, drew); i++) {
              order.push(distinct[0]);
            }
            break;
          }
          if (
            equal(candidates.length, drew) &&
            greater_than(distinct.length, 1)
          ) {
            order = candidates;
            break;
          }
        }
        if (equal(order, null)) {
          undecided.push({
            chapter_code,
            verse_number,
            glyph,
            drew,
            family: all,
          });
          continue;
        }
        decided.push({
          chapter_code,
          verse_number,
          glyph,
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
