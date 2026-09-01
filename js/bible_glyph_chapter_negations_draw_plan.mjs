import { arguments_assert } from "./arguments_assert.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
export function bible_glyph_chapter_negations_draw_plan(planned, lines, left) {
  "Writes the planned negation marks into the lines of a chapter's own source file, and says what it touched. Each verse is found by its header line and each word by its place among the quoted lines beneath it, so nothing is matched on the word itself and a repeated word cannot draw the mark onto the wrong one. A verse whose header or whose word lines cannot be found is added to the list of ones left alone rather than skipped quietly.";
  arguments_assert(arguments, 3);
  let drawn_count = 0;
  let touched = [];
  for (let plan of planned) {
    let header = list_join_empty([
      "        verse_number: ",
      plan.verse_number,
      ",",
    ]);
    let at = lines.indexOf(header);
    let missing = equal(at, -1);
    if (missing) {
      list_add(left, {
        verse_number: plan.verse_number,
        unfound: header,
      });
      continue;
    }
    let word_lines = [];
    let walk = at;
    let ended = false;
    while (not(ended)) {
      walk = add(walk, 1);
      let line = lines[walk];
      let gone = equal(line, undefined);
      if (gone) {
        ended = true;
        continue;
      }
      let trimmed = text_trim(line);
      let closed = equal(trimmed, "],");
      if (closed) {
        ended = true;
        continue;
      }
      let quoted = text_starts_with(trimmed, '"');
      if (quoted) {
        list_add(word_lines, walk);
      }
    }
    let counted = list_size_equal(word_lines, 0);
    if (counted) {
      list_add(left, {
        verse_number: plan.verse_number,
        no_word_lines: true,
      });
      continue;
    }
    let places = [];
    for (let change of plan.changes) {
      let line_at = word_lines[change.place];
      let absent = equal(line_at, undefined);
      if (absent) {
        continue;
      }
      let line = lines[line_at];
      let first = line.indexOf('"');
      let last = line.lastIndexOf('"');
      let sum = add(first, 1);
      let head = line.slice(0, sum);
      let tail = line.slice(last);
      lines[line_at] = list_join_empty([head, change.drawn, tail]);
      drawn_count = add(drawn_count, 1);
      list_add(places, {
        was: change.word,
        now: change.drawn,
      });
    }
    list_add(touched, {
      verse_number: plan.verse_number,
      places,
    });
  }
  let r = {
    drawn_count,
    touched,
  };
  return r;
}
