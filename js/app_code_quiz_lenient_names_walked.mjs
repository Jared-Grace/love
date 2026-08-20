import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_quiz_lesson_lenient_names } from "./app_code_quiz_lesson_lenient_names.mjs";
import { app_code_quiz_leniency_readings } from "./app_code_quiz_leniency_readings.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_range } from "./each_range.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function app_code_quiz_lenient_names_walked() {
  arguments_assert(arguments, 0);
  ("every lesson and way round in the whole course that can be passed by reading the right answer off the code, named as the lesson and the way joined by a space, and how many lessons were drawn to say so");
  ("Each lesson is read many times over and a name is kept only where every reading agrees. A lesson draws new numbers and new words every time it is asked, so one reading answers about the draw it happened to get - and this list is measured against a written record, which fails on a name it does not hold as well as on a name it holds for nothing. A name that came and went between runs would fail that record in both directions by turns.");
  ("Many readings rather than a few, because agreeing every time is the thing being asked. A screen passable by how it is built is passable in every draw and survives any number of readings; one passable six draws in ten survives three readings a fifth of the time and twenty readings once in thirty thousand. The readings are cheap and a gate that goes red for nothing costs an afternoon.");
  ("The count is what the gate above reports about itself. That gate holds a record that only shrinks, so on a good day it says nothing was newly passable and nothing had stopped being - word for word what it would say on the day the course came back with no lessons in it at all. How many lessons were actually drawn is the one number that falls on the second, so it travels out beside the names.");
  ("Lessons are counted rather than readings. A lesson drawn and then read twenty times is one lesson looked at, and the readings are a way of being sure about that one - counting them would make the number grow when the course was read harder rather than when more of it was read.");
  let fns = app_code_lessons_fns();
  let readings = app_code_quiz_leniency_readings();
  let names = [];
  let walked = 0;
  for (let fn of fns) {
    let lesson = fn();
    walked = walked + 1;
    let kept = app_code_quiz_lesson_lenient_names(lesson);
    function held(name) {
      "true when this reading of the lesson found the same way round passable too";
      let again = app_code_quiz_lesson_lenient_names(lesson);
      let has = list_includes(again, name);
      return has;
    }
    function reading_keep() {
      "narrow what is still held to what this one further reading agrees with";
      kept = list_filter(kept, held);
    }
    each_range(readings, reading_keep);
    list_add_multiple(names, kept);
  }
  let sorted = list_sort_text(names);
  let r = {
    walked,
    offenders: sorted,
  };
  return r;
}
