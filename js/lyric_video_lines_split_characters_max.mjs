import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_words_characters_max } from "./text_split_words_characters_max.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
export function lyric_video_lines_split_characters_max(lines, characters_max) {
  "$plain lines";
  "$plain characters_max";
  "The same timed lines, with any line too long to stand on one screen divided into parts that fit, each part holding the screen for its share of the line's own span.";
  "★ WITHOUT THIS A LONG VERSE SIMPLY RUNS OFF THE SCREEN AND IS NEVER READ. Measured over the recorded chapters, a hundred and twenty four pieces are longer than four hundred letters and the longest is over thirteen hundred - several screens' worth of words asked to stand in the space of eight lines. The psalms are short enough to have hidden this entirely; the histories and the law are not.";
  "★ WHERE THE WORDS DIVIDE INSIDE A LINE IS THE ONE TIME HERE THAT IS REASONED RATHER THAN HEARD, and it is reasoned from the length of the words, because a reader takes about as long over a hundred letters wherever in the sentence they fall. The line's own beginning and end stay exactly as they were measured, so the guess is spent entirely inside a line and never leaks into the one after it.";
  "★ THE SHARES ARE COUNTED OUT OF WHAT THE PARTS HOLD RATHER THAN OUT OF THE LINE THEY CAME FROM. A division at a space drops that space, so the parts are a few letters shorter than the whole between them; counted against the whole, the last part would end a moment early and leave the screen blank until the next line arrived.";
  arguments_assert(arguments, 2);
  function line_each(line) {
    let text = property_get(line, "text");
    let start = property_get(line, "start");
    let end = property_get(line, "end");
    let parts = text_split_words_characters_max(text, characters_max);
    let span = subtract(end, start);
    let total = 0;
    function part_length_each(part) {
      total = add(total, part.length);
    }
    each(parts, part_length_each);
    let marks = [start];
    let taken = 0;
    function part_each(part) {
      taken = add(taken, part.length);
      let share = divide(taken, total);
      let right = multiply(span, share);
      let at = add(start, right);
      let hundredths = multiply_round(at, 100);
      let mark = divide(hundredths, 100);
      list_add(marks, mark);
    }
    each(parts, part_each);
    function part_timed(part, index) {
      let timed = {
        start: marks[index],
        end: marks[index + 1],
        text: part,
      };
      return timed;
    }
    let timed = parts.map(part_timed);
    return timed;
  }
  let grouped = list_map(lines, line_each);
  let split = list_flat(grouped);
  return split;
}
