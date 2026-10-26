import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_code_lesson_steps_braces_is } from "./app_code_lesson_steps_braces_is.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { add_1 } from "./add_1.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_max } from "./list_max.mjs";
export function app_code_milestones() {
  arguments_assert(arguments, 0);
  ("the milestones: like a review, a mix of questions from many lessons, but chosen by what the lessons hold rather than by being the last ones before it - asked for by the human 2026-10-22, so a learner can practise one kind of program until it is easy");
  ("The first gathers the lessons that run programs of two or more pairs of braces a line at a time, and the second the lesson straight after each, which asks only what the same kind of program logs - the same programs, all at once.");
  ("The lesson after rather than one named, because each of these step lessons is put straight before the lesson that asks for the output of its shape, measured 2026-10-22 for all 12. Not picked: only the question asking what the program logs, which is the closest to all at once but would pick a quiz out of the four by its place.");
  let lessons = app_code_lessons();
  let steps = list_filter(lessons, app_code_lesson_steps_braces_is);
  function after(lesson) {
    let index = list_index_of(lessons, lesson);
    let next_index = add_1(index);
    let next = list_get(lessons, next_index);
    return next;
  }
  let at_once = list_map(steps, after);
  ("Each stands after the last lesson either one draws from, so both are reached only once every lesson in them has been met. The labels are drafts, not yet read by the human.");
  function number_of(lesson) {
    let index = list_index_of(lessons, lesson);
    let number_inner = add_1(index);
    return number_inner;
  }
  let numbers = list_map(at_once, number_of);
  let number = list_max(numbers);
  let r = [
    {
      id: "milestone_braces_steps",
      label: "braces, step by step",
      number,
      lessons: steps,
    },
    {
      id: "milestone_braces_at_once",
      label: "braces, all at once",
      number,
      lessons: at_once,
    },
  ];
  return r;
}
