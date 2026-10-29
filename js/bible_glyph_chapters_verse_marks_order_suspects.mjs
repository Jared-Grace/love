import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { bible_glyph_chapter_rows_filed } from "./bible_glyph_chapter_rows_filed.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
export async function bible_glyph_chapters_verse_marks_order_suspects(
  glyphs_comma,
) {
  "$plain glyphs_comma";
  "the glyphs are mark names joined by commas, such as voice,voice+doing,speech. They name which marks to compare and nothing that runs.";
  "A reading list, never a verdict: verses where the named marks may sit on each other's words. Counts cannot see this, because a swap inside one verse leaves every count even.";
  "IT GUESSES WHICH WORD EACH MARK REPLACED, and the guess is all it has. Each seat's English gloss keeps the small words around the one the mark replaced - the words, had spoken - and those small words stay on the page just before the mark. A verse is listed when handing the drawn marks to the seats some other way matches those words better than the way they are drawn. A reader still opens each one.";
  arguments_assert(arguments, 1);
  let family = text_split_comma(glyphs_comma);
  let tokens_of = function lambda2(text) {
    function lambda(t) {
      let neq = not_equal(t, "");
      return neq;
    }
    let r2 = text
      .toLowerCase()
      .replace(/[^a-z' ]/g, " ")
      .split(" ")
      .filter(lambda);
    return r2;
  };
  let suspects = [];
  let compared = 0;
  let skipped = 0;
  for (let chapter of bible_glyph_chapters()) {
    let chapter_code = chapter.chapter_code;
    let both = await bible_glyph_chapter_rows_filed(chapter_code);
    let parsed = bible_glyph_chapter(chapter_code);
    for (let verse of parsed.verses) {
      let verse_number = verse.verse_number;
      function lambda3(r) {
        let eq = equal(r.verse_number, verse_number);
        return eq;
      }
      let row = both.rows.find(lambda3);
      if (equal(row, undefined)) {
        continue;
      }
      function lambda4(w) {
        let r3 = family.includes(w.glyph);
        return r3;
      }
      let seats = row.words.filter(lambda4);
      let marks = [];
      let before = [];
      for (let word of verse.words) {
        if (equal(typeof word, "string")) {
          before.push(...tokens_of(word));
          continue;
        }
        for (let part of word) {
          if (equal(typeof part, "string")) {
            before.push(...tokens_of(part));
            continue;
          }
          let glyph = part.join("+");
          if (family.includes(glyph)) {
            marks.push({
              glyph,
              context: before.slice(-3).reverse(),
            });
          }
          before = [];
        }
      }
      function lambda5(m) {
        let r4 = m.glyph;
        return r4;
      }
      let v = marks.map(lambda5);
      let distinct = new Set(v).size;
      if (
        less_than(marks.length, 2) ||
        less_than(distinct, 2) ||
        not_equal(seats.length, marks.length)
      ) {
        continue;
      }
      if (greater_than(marks.length, 7)) {
        skipped++;
        continue;
      }
      compared++;
      let score = function lambda7(mark, seat) {
        let gloss = tokens_of(seat.gloss);
        let s = 0;
        function lambda6(t, i) {
          if (gloss.includes(t)) {
            s += subtract(3, i);
          }
        }
        mark.context.forEach(lambda6);
        return s;
      };
      let best = -1;
      let best_glyphs = null;
      let drawn_best = -1;
      let walk = function lambda10(i, used, total, glyphs) {
        if (equal(i, marks.length)) {
          if (greater_than(total, best)) {
            best = total;
            best_glyphs = glyphs.slice();
          }
          function lambda8(g, k) {
            let eq2 = equal(g, marks[k].glyph);
            return eq2;
          }
          let same = glyphs.every(lambda8);
          if (same && greater_than(total, drawn_best)) {
            drawn_best = total;
          }
          return;
        }
        function lambda9(seat, j) {
          if (used.has(j)) {
            return;
          }
          used.add(j);
          glyphs.push(seat.glyph);
          walk(i + 1, used, total + score(marks[i], seat), glyphs);
          glyphs.pop();
          used.delete(j);
        }
        seats.forEach(lambda9);
      };
      walk(0, new Set(), 0, []);
      let counts_even = greater_than_equal(drawn_best, 0);
      if (counts_even && less_than(drawn_best, best)) {
        function lambda11(m) {
          let r5 = m.glyph;
          return r5;
        }
        suspects.push({
          code: chapter_code + ":" + verse_number,
          drawn: marks.map(lambda11),
          guess: best_glyphs,
          margin: subtract(best, drawn_best),
        });
      }
    }
  }
  function lambda12(a, b) {
    let difference = subtract(b.margin, a.margin);
    return difference;
  }
  suspects.sort(lambda12);
  let r6 = {
    compared,
    skipped,
    suspects,
  };
  return r6;
}
