import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { less_than } from "./less_than.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lessons_exercises_each(rounds, on_exercise) {
  "Hands over every exercise the whole course can put in front of a learner, one at a time, together with the lesson that asks it and the batch line it was built from.";
  "Which lessons there are is read off the course itself rather than from a list written anywhere, so a lesson added is walked without anybody remembering to add it. A lesson varies what it asks each time it is asked, so it is asked several rounds' worth, and how many is left to the caller: a sweep looking for a rare shape wants more rounds than one looking at every question equally.";
  "Nothing is filtered and nothing is remembered here. What counts as worth reporting, and whether the same lesson may be reported twice, belong to whoever is doing the looking.";
  let fns = app_code_lessons_fns();
  for (let fn of fns) {
    let lesson = fn();
    let batch_get = property_get(lesson, "batch");
    for (let round = 0; less_than(round, rounds); round++) {
      let batch = batch_get();
      for (let qa of batch) {
        let exercises = property_get(qa, "exercises");
        for (let exercise of exercises) {
          let exercise_visit = {
            lesson: fn.name,
            qa,
            exercise,
          };
          on_exercise(exercise_visit);
        }
      }
    }
  }
}
