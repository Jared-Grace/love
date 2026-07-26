import { text_split_new_line } from "./text_split_new_line.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function text_lines_first_difference(text_got, text_want) {
  "The first line where two pieces of text stop agreeing, so a mismatch can say where it is instead of only that it happened. Answers null when they agree all the way down. A side that ran out of lines reads as an empty line, which is what makes a missing line and a changed line report the same way.";
  let lines_got = text_split_new_line(text_got);
  let lines_want = text_split_new_line(text_want);
  let size_got = list_size(lines_got);
  let size_want = list_size(lines_want);
  let size = size_want;
  let got_longer_is = greater_than(size_got, size_want);
  if (got_longer_is) {
    size = size_got;
  }
  let index = 0;
  while (greater_than(size, index)) {
    let line_got = property_get_or(lines_got, index, "");
    let line_want = property_get_or(lines_want, index, "");
    let same_is = equal(line_got, line_want);
    if (not(same_is)) {
      let line_number = index + 1;
      let difference = {
        line_number,
        got: line_got,
        want: line_want,
      };
      return difference;
    }
    index++;
  }
  return null;
}
