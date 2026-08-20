import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_quiz_lesson_lenient_names } from "./app_code_quiz_lesson_lenient_names.mjs";
import { app_code_quiz_leniency_readings } from "./app_code_quiz_leniency_readings.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { number_range } from "./number_range.mjs";
export function app_code_quiz_lenient_names() {
  arguments_assert(arguments, 0);
  (
    "every lesson and way round in the whole course that can be passed by reading the right answer off the code, named as the lesson and the way joined by a space"
  );
  (
    "Each lesson is read many times over and a name is kept only where every reading agrees. A lesson draws new numbers and new words every time it is asked, so one reading answers about the draw it happened to get - and this list is measured against a written record, which fails on a name it does not hold as well as on a name it holds for nothing. A name that came and went between runs would fail it in both directions by turns."
  );
  (
    "Many readings rather than a few, because agreeing every time is the thing being asked. A screen passable by how it is built is passable in every draw and survives any number of readings; one passable six times in ten survives three readings a fifth of the time and ten readings once in two hundred. The readings cost a second each, and a gate that goes red for nothing costs an afternoon."
  );
  let fns = app_code_lessons_fns();
  let readings = app_code_quiz_leniency_readings();
  let counts = number_range(readings);
  let names = [];
  for (let fn of fns) {
    let lesson = fn();
    let kept = app_code_quiz_lesson_lenient_names(lesson);
    for (let count of counts) {
      function held(name) {
        "true when this reading found the same way round passable too";
        let again = app_code_quiz_lesson_lenient_names(lesson);
        let has = list_includes(again, name);
        return has;
      }
      kept = list_filter(kept, held);
    }
    list_add_multiple(names, kept);
  }
  let sorted = list_sort_text(names);
  return sorted;
}
