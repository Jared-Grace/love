import { arguments_assert } from "./arguments_assert.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { equal } from "./equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { bible_glyph_gloss_english_absent_is } from "./bible_glyph_gloss_english_absent_is.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export async function bible_glyph_chapters_seat_split_planned(glyphs) {
  "$plain glyphs";
  "the glyphs are the bare pictures whose words were just moved onto groups, spelled as the character table spells them. They name pictures to look for and nothing that runs.";
  "Every verse that still draws a bare picture after the word under it was moved onto a group starting with that picture, and which mark each of those drawn pictures should become - or why it cannot be said.";
  "ONE ROOT, ONE PICTURE, AND THEN ONE WORD, ONE MARK. The root table now gives a loved and a beloved the same first picture and a second picture of their own, so a word that shared its root's picture is moved onto a group whose first half is that same picture. The table is one line; the pages are the work, because a mark already drawn records the picture and never which of the root's words it was drawn for. This reading asks the table, after the move, what stands in each verse, and answers from that.";
  "A VERSE IS IN QUESTION EXACTLY WHEN IT DRAWS A NAMED BARE PICTURE MORE OFTEN THAN THE TABLE NOW SEATS THAT BARE PICTURE THERE.";
  "IT IS TOLD WHICH PICTURES WERE SPLIT RATHER THAN FINDING THEM, AND THAT WAS MEASURED (2026-10-04). Asked of every picture, the same question finds five hundred and sixty nine verses to redraw and almost seven thousand it cannot settle, all on fourteen pictures drawn unevenly long before any split - the proper name, fire, eye, mouth, ear and voice among them. Those are older shapes with their own gates and reasons, and a command that sets out to split a seat must not quietly rewrite them, so only the named pictures are asked about.";
  "THE CANDIDATES ARE THE BARE PICTURE AND EVERY GROUP STARTING WITH IT THAT THE VERSE HAS NOT FULLY DRAWN YET. A group the verse already draws as often as it is seated was drawn as a group by its author and is no candidate for a bare mark; a group drawn less often than seated is the one a bare mark can have been, because before the move it was the bare picture.";
  "THREE ANSWERS, ASKED IN ORDER. If every candidate is the same mark, every bare mark becomes it and order never arises. If the candidates number exactly the bare marks drawn, they pair off by position, assuming the author drew in the original's order - the same assumption the collision walk makes and defends. If not, the words English gives nothing are set aside and the two questions are asked again. Anything left is handed back as undecided rather than guessed.";
  "A VERSE WITH NO CANDIDATE AT ALL IS LEFT ALONE, AND THAT WAS MEASURED TOO (2026-10-05). A split moves words onto groups starting with the bare picture, so every verse a split touched still has candidates. A verse drawing the picture where the table seats no word of that family at all drew it before any split - the prophet's mark in the first verse of First John four, the outward tray in John seventeen and Exodus ten - and that is the overdrawn gate's old business, not this one's. Calling those undecided refused a whole pass over three lines it had no say in.";
  arguments_assert(arguments, 1);
  list_is_assert(glyphs);
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
      for (let glyph of object_property_names(drawn)) {
        if (list_includes_not(glyphs, glyph)) {
          continue;
        }
        let drew = drawn[glyph];
        if (less_than_equal(drew, seated[glyph] ?? 0)) {
          continue;
        }
        let prefix = glyph + "+";
        function candidate_is(word) {
          if (equal(word.glyph, glyph)) {
            return true;
          }
          let b = word.glyph.startsWith(prefix);
          if (not(b)) {
            return false;
          }
          let l = less_than(drawn[word.glyph] ?? 0, seated[word.glyph]);
          return l;
        }
        function lambda(word) {
          let r2 = word.glyph;
          return r2;
        }
        let all = words.filter(candidate_is).map(lambda);
        function lambda2(word) {
          let b2 = bible_glyph_gloss_english_absent_is(word.gloss);
          let n = not(b2);
          return n;
        }
        function lambda3(word) {
          let r3 = word.glyph;
          return r3;
        }
        let spoken = words.filter(candidate_is).filter(lambda2).map(lambda3);
        if (all.length === 0) {
          continue;
        }
        let order = null;
        for (let family of [all, spoken]) {
          let distinct = [...new Set(family)];
          if (equal(distinct.length, 1) && not_equal(distinct[0], glyph)) {
            order = [];
            for (let i = 0; less_than(i, drew); i++) {
              order.push(distinct[0]);
            }
            break;
          }
          if (equal(family.length, drew) && greater_than(distinct.length, 1)) {
            order = family;
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
