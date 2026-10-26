import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_all_equal } from "./list_all_equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_copy_reverse } from "./list_copy_reverse.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_lines_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output for a program that writes out several lines: the lines the other way round are answered with the order they run in, and one line standing on every line is answered with each line's own value. Parts take turns between words and code. null for any other wrong pick, so nothing beside the point is said");
  ("The question is not looked at, the same as the decoys these answer: both mistakes are properties of the answer and the pick alone, so the reminder holds for every lesson that offers them, whichever decoy function built them. Not picked: a reminder per lesson, which would say the same two things many times over; naming the first line that differs, which says where the pick is wrong but not why");
  let right = text_to(answer);
  let picked = text_to(choice);
  let lines = text_split_newline(right);
  let size = list_size(lines);
  let single = less_than(size, 2);
  if (single) {
    return null;
  }
  let same = list_all_equal(lines);
  if (same) {
    return null;
  }
  if (list_includes(lines, "")) {
    return null;
  }
  let list = list_copy_reverse(lines);
  let reversed = list_join_newline(list);
  if (equal(picked, reversed)) {
    let first = list_first(lines);
    let r = [
      "Remember: lines run from top to bottom, so ",
      first,
      " is written out first",
    ];
    return r;
  }
  let picked_lines = text_split_newline(picked);
  let left = list_size(picked_lines);
  let size_same = equal(left, size);
  if (not(size_same)) {
    return null;
  }
  let picked_same = list_all_equal(picked_lines);
  if (not(picked_same)) {
    return null;
  }
  let repeated = list_first(picked_lines);
  let parts = [
    "Remember: each line is worked out at the moment it runs, so it is not ",
    repeated,
    " every time, but ",
  ];
  function line_add(line, index) {
    let b = equal(index, 0);
    if (not(b)) {
      list_add(parts, " then ");
    }
    list_add(parts, line);
  }
  each_index(lines, line_add);
  return parts;
}
