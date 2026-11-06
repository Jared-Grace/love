import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { app_code_lesson_ids_short } from "./app_code_lesson_ids_short.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_batch_braces_two_is } from "./app_code_batch_braces_two_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { add_1 } from "./add_1.mjs";
import { list_max } from "./list_max.mjs";
import { app_code_batch_kind_has } from "./app_code_batch_kind_has.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { app_code_review_kind_run_is } from "./app_code_review_kind_run_is.mjs";
import { app_code_review_kind_step_is } from "./app_code_review_kind_step_is.mjs";
import { app_code_review_kind_line_missing_is } from "./app_code_review_kind_line_missing_is.mjs";
import { app_code_review_kind_all_at_once_is } from "./app_code_review_kind_all_at_once_is.mjs";
export function app_code_milestones() {
  arguments_assert(arguments, 0);
  ("the milestones: like a review, a mix of questions from many lessons, but chosen by what the lessons hold rather than by being the last ones before it - asked for by the human 2026-10-22, so a learner can practise one kind of program until it is easy");
  ("2026-11-02, at the human's asking: three milestones over programs of two or more pairs of braces, each asking one way of reading them and no other. First whether each section runs, then a program a line at a time, then everything else about a whole program. Which quizzes each asks is decided per quiz, not per lesson, because a step lesson holds a step quiz and four others.");
  ("All at once draws from the lessons holding the which-line-is-missing quiz, measured 2026-11-02 as 19: the 12 step lessons and the 7 that run programs without stepping. That quiz is the test because only lessons that run a whole program hold it. Not picked: every lesson with two pairs of braces, which would add 10 that only ask about the braces themselves and run nothing. Not picked: the 12 step lessons alone, which would leave those 7 programs out of every milestone. Not picked: the lesson before each step lesson, used until 2026-11-02, which is a does-this-section-run lesson and so asked the wrong quiz here.");
  let lessons = app_code_lessons();
  ("2026-11-02: only lessons before the first while, so both stand in Nested branches, at the human's asking. A step lesson with an if inside a while had joined them and pulled them to the end of Looping, and the lesson after the last if lesson is While itself. Stopping at the lesson the Looping group names, rather than testing each program for the word while, so for and any later loop stay out too.");
  let ids = app_code_lesson_ids_short();
  let loop_id = property_get(ids, fn_name("app_code_lesson_while"));
  let lesson_ids = list_map_property(lessons, "id");
  ("2026-11-06: the public site is handed only the released lessons, and While is not one of them, so asking where While stands threw there and every learner opening the page got an error instead of the home list. With no While in this run, every lesson in it is before the first while, so the run goes to its end. Measured the same day: the walk reads latest, which holds While, so it could not see this.");
  let loop_shown = list_includes(lesson_ids, loop_id);
  let branches_count = list_size(lesson_ids);
  if (loop_shown) {
    branches_count = list_index_of(lesson_ids, loop_id);
  }
  ("Starting at the first lesson that runs a program of two pairs of braces, and drawing each lesson's batch once, because this is asked several times for each page: measured 2026-11-02, reading every one of the 302 lessons before While took 650 ms on a computer for each ask. A lesson put before this one would not join a milestone.");
  let first_id = property_get(ids, fn_name("app_code_lesson_braces_run"));
  let first_index = list_index_of(lesson_ids, first_id);
  let branches = list_slice(lessons, first_index, branches_count);
  function with_items(lesson) {
    let batch = property_get(lesson, "batch");
    let items = batch();
    let entry = {
      lesson,
      items,
    };
    return entry;
  }
  let entries = list_map(branches, with_items);
  function entry_braces_two_is(entry) {
    let items = property_get(entry, "items");
    let two = app_code_batch_braces_two_is(items);
    return two;
  }
  let braces = list_filter(entries, entry_braces_two_is);
  function number_of(lesson) {
    let index = list_index_of(lessons, lesson);
    let number_inner = add_1(index);
    return number_inner;
  }
  ("All three stand together after the last of these lessons, so every lesson in any of them has been met first. 2026-11-02, at the human's asking: each used to stand after the last lesson it drew from itself, which put the does-this-section-run milestone between a does-this-section-run lesson and the lesson it is paired with.");
  let braces_lessons = list_map_property(braces, "lesson");
  let braces_numbers = list_map(braces_lessons, number_of);
  let number = list_max(braces_numbers);
  function milestone(id, label, lesson_kind_is, kind_is) {
    function entry_kept(entry) {
      let items = property_get(entry, "items");
      let kept = app_code_batch_kind_has(items, lesson_kind_is);
      return kept;
    }
    let drawn = list_filter_map_property(braces, entry_kept, "lesson");
    let m = {
      id,
      label,
      number,
      lessons: drawn,
      kind_is,
    };
    return m;
  }
  let v = milestone(
    "milestone_braces_run",
    "does this section run?",
    app_code_review_kind_run_is,
    app_code_review_kind_run_is,
  );
  let v2 = milestone(
    "milestone_braces_steps",
    "step by step",
    app_code_review_kind_step_is,
    app_code_review_kind_step_is,
  );
  let v3 = milestone(
    "milestone_braces_at_once",
    "all at once",
    app_code_review_kind_line_missing_is,
    app_code_review_kind_all_at_once_is,
  );
  let r = [v, v2, v3];
  return r;
}
