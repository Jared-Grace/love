import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_read } from "./function_read.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_comma_trimmed } from "./text_split_comma_trimmed.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { list_size } from "./list_size.mjs";
import { range_1 } from "./range_1.mjs";
import { list_map } from "./list_map.mjs";
import { text_number_ordinal_spelled_underscore } from "./text_number_ordinal_spelled_underscore.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
export async function bible_glyph_chapters_numbered_names() {
  arguments_assert(arguments, 0);
  ("The names the picture Bible list gives its chapters one by one, the names it then puts in the list itself, and the names both of those ought to be, side by side.");
  ("A CHAPTER CAN BE WRITTEN, IMPORTED, NAMED AND STILL NOT BE IN THE BIBLE. The list binds each chapter to a numbered name and then puts those names in an array, and it is the array that is the Bible: a chapter bound and left out of it is a file every gate agrees is fine and no reader will ever reach. Nothing catches that today, because everything else counting chapters counts the array, so the array agrees with itself.");
  ("THE NUMBERS ARE THE PART THAT ROTS QUIETLY. They are written by a hand, they mean nothing at run time, and a chapter added as the thirty fifth when the thirty fourth was never written reads perfectly well. What they are for is the build log - which chapter was written when - and a log that skips a number is no longer one.");
  ("IT READS THE SOURCE AND NOT THE RUNNING LIST, for the same reason the sentence about the count is read from the source: a local name is not a value anything can ask for, and the array a reader is trying to check is the one thing every other reading already trusts.");
  ("THE THREE LISTS ARE ANSWERED AS LINES OF WORDS rather than as lists, because whoever repairs this has to see where two of them part company, and two lines one under the other show that where two lists of thirty three names do not.");
  ("AN ARRAY THAT CANNOT BE FOUND AT ALL IS ANSWERED AS NOTHING rather than as a disagreement. One is a line to correct and the other is somebody having reworded the list past recognising, and no name can be put back until it is written again.");
  let f_name = fn_name("bible_glyph_chapters");
  let code = await function_read(f_name);
  let lines = text_split_newline(code);
  let bound_regex = new RegExp(
    "^  let ([a-z_]+) = bible_glyph_chapter_[a-z0-9_]+\\(\\);$",
  );
  let bound = [];
  for (let line of lines) {
    let matched = text_regex_match(line, bound_regex);
    if (matched) {
      list_add(bound, matched[1]);
    }
  }
  let listed_regex = new RegExp("let chapters = \\[([^\\]]*)\\]");
  let listed_matched = text_regex_match(code, listed_regex);
  let listed_line = null;
  if (listed_matched) {
    let split = text_split_comma_trimmed(listed_matched[1]);
    let listed = list_filter_text_empty_not_is(split);
    listed_line = list_join_space(listed);
  }
  let chapters = bible_glyph_chapters();
  let count = list_size(chapters);
  let numbers = range_1(count);
  let expected = list_map(numbers, text_number_ordinal_spelled_underscore);
  let expected_line = list_join_space(expected);
  let bound_line = list_join_space(bound);
  let listed_found_is = not_equal(listed_line, null);
  let bound_agree_is = equal(expected_line, bound_line);
  let listed_agree_is = equal(expected_line, listed_line);
  let r = {
    count,
    expected_line,
    bound_line,
    listed_line,
    listed_found_is,
    bound_agree_is,
    listed_agree_is,
  };
  return r;
}
