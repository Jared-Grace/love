import { app_code_exercise_solving_is } from "./app_code_exercise_solving_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_range } from "./each_range.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_is } from "./text_is.mjs";
export function app_code_lesson_lines_solved(lesson, rounds) {
  arguments_assert(arguments, 2);
  ("Every different piece of code one lesson asks a learner to work out, each one listed once however often it comes up.");
  ("An exercise that only matches one written form with another is passed over, lines and all. Nothing on it is ever valued - the signs are there to be recognised, not counted - so pricing those lines by the signs on them charges a lesson for working out it never asks for.");
  ("A lesson makes up what it asks afresh each time it is asked, so it is asked several rounds' worth and how many is left to the caller. One round shows what a learner would meet on one visit; a reading about the lesson itself wants the whole of what it can reach for.");
  ("Both what is asked and what is answered are taken, because half the questions in the course run backwards - the learner is shown a value and picks the code that produces it, so there the code is the answer.");
  let batch_get = property_get(lesson, "batch");
  let lines = [];
  function keep(text) {
    "this piece of the exercise, if it is written text and is not already down";
    let written = text_is(text);
    if (not(written)) {
      return;
    }
    let already = list_includes(lines, text);
    if (already) {
      return;
    }
    list_add(lines, text);
  }
  function round_take() {
    "one asking of the lesson, with everything it put up taken down";
    let batch = batch_get();
    for (let qa of batch) {
      let exercises = property_get(qa, "exercises");
      for (let exercise of exercises) {
        let solving_is = app_code_exercise_solving_is(exercise);
        if (not(solving_is)) {
          continue;
        }
        let question = property_get(exercise, "question");
        keep(question);
        let answer = property_get(exercise, "answer");
        keep(answer);
      }
    }
  }
  each_range(rounds, round_take);
  return lines;
}
