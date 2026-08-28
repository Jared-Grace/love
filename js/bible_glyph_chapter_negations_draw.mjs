import { property_get } from "./property_get.mjs";
import { bible_glyph_chapter_negations_draw_verse } from "./bible_glyph_chapter_negations_draw_verse.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { file_read } from "./file_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function bible_glyph_chapter_negations_draw(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter of the picture Bible. It names a stretch of text to draw on and nothing that runs.";
  "Every English negation left in plain letters in one already-authored chapter, drawn as the picture the negation roots are seated on - but only in the verses where the count of plain negations and the count of negation words in the original agree exactly.";
  "THE AGREEMENT IS THE WHOLE SAFETY. A verse where the two counts match can have its negations paired off one for one, so replacing each plain word with the picture leaves the verse saying exactly what it said. A verse where they disagree cannot be paired without guessing which English word came from which original word, and guessing there writes scripture nobody checked - so those verses are named and left alone for a person.";
  "IT SWEEPS RATHER THAN TAKING A LIST because the set of undrawn negations is not a choice anybody made. Seating a negation root draws it everywhere at once in principle and nowhere in fact until the chapters already written are gone back over, and that going-back-over was being done by hand, one word at a time, which leaves nothing behind and cannot be run again after the next root is seated.";
  "The word already drawing the picture is counted rather than skipped, because a verse half drawn by hand earlier is exactly the verse where the agreement matters most.";
  "BOTH FORMS OF THE CHAPTER ARE READ AND THEY ARE NOT INTERCHANGEABLE. The marks already drawn can only be counted on the parsed form, where a picture is a list rather than a run of letters; the words to change can only be read off the shorthand, which is what the written file actually holds and what a person typed. The two are one for one in the same order, so walking them together is what lets a count taken on one decide an edit made to the other.";
  arguments_assert(arguments, 1);
  let r3 = await bible_glyph_chapter_negations_draw_verse(chapter_code);
  let left = property_get(r3, "left");
  let planned = property_get(r3, "planned");
  let nothing = list_empty_is(planned);
  if (nothing) {
    let r2 = {
      chapter_code,
      drawn: 0,
      verses: [],
      left,
      f_path: null,
    };
    return r2;
  }
  let lowered = text_lower_to(chapter_code);
  let f_path = list_join_empty(["js/bible_glyph_chapter_", lowered, ".mjs"]);
  let text = await file_read(f_path);
  let lines = text_split_newline(text);
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
  let after = list_join_newline(lines);
  await file_overwrite(f_path, after);
  let r = {
    chapter_code,
    f_path,
    drawn: drawn_count,
    verses: touched,
    left,
  };
  return r;
}
