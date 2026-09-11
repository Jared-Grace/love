import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_same_which(fn_reading, fn_repeated) {
  arguments_assert(arguments, 2);
  ("names the lesson a screen is repeating, worked out from where the two lessons actually sit rather than typed: the previous lesson when it truly is one place back, and the lesson's own number when anything has been put between them");
  ("It exists because the typed wording went stale and nothing said so. Eight docstrings and one sentence a learner reads were pointing at the lesson before, after a lesson had been slid in between - the all-at-once twin of a pressing lesson, most of the time. A phrase typed by hand records where two lessons sat on the day it was written, and the list it describes is edited by adding to the middle of it.");
  ("The number is the one the learner is looking at. Home rows are drawn by ",
    fn_name("app_shared_button_numbered"),
    ", which numbers them 1-based down the same list, so lesson 7 here is the row reading 7. on the home screen and nothing has to be explained.");
  ("Asked of the whole list rather than of the run this reader was handed, because the two only ever differ at the end: the cut is a slice off the tail, and a lesson being repeated is always earlier than the lesson repeating it. Asking the whole list gives the same number and cannot throw on a lesson that has been cut away.");
  ("A lesson that is not in the list at all is a mistake worth stopping on, and ",
    fn_name("list_index_of"),
    " stops on it already, so there is nothing to check here.");
  let fns = app_code_lessons_fns();
  let here = list_index_of(fns, fn_reading);
  let there = list_index_of(fns, fn_repeated);
  let gap = subtract(here, there);
  let previous_is = equal(gap, 1);
  if (previous_is) {
    let r = "the previous lesson";
    return r;
  }
  let number = add_1(there);
  let t = text_to(number);
  let named = text_combine_multiple(["lesson ", t]);
  return named;
}
