import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_quiz_exercise_lenient_is } from "./app_code_quiz_exercise_lenient_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_all } from "./list_all.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_quiz_lesson_lenient_names(lesson) {
  arguments_assert(arguments, 1);
  (
    "one lesson read once over: the ways round it whose every question can be answered by reading the right answer off the code"
  );
  (
    "A lesson is asked about each way round on its own, because the two are different screens. Reading forwards the answer is what the code writes out and the code is in front of the learner; reading backwards the answer is the code and what it writes out is in front of them. A lesson can be passable one way and not the other, and a reading that mixed them would say neither."
  );
  (
    "Every question, not some. One question out of forty-nine whose answer happens to be a number standing in its own sum is a coincidence of the numbers drawn that time and no way to pass anything; a way round where every question is like that is how the screen is built."
  );
  let id = property_get(lesson, "id");
  let items = lesson.batch();
  let forwards = [];
  let backwards = [];
  for (let item of items) {
    let exercises = property_get(item, "exercises");
    for (let exercise of exercises) {
      let info = property_get(exercise, "info");
      let on_answer = property_get_or(info, "on_answer", null);
      let multiple_choice = equal(on_answer, app_code_lesson_quiz_multiple_choice);
      if (multiple_choice) {
        let answer_property = property_get(info, "answer_property");
        let asks_the_answer = equal(answer_property, "answer");
        let group = backwards;
        if (asks_the_answer) {
          group = forwards;
        }
        list_add(group, exercise);
      }
    }
  }
  let names = [];
  function way_add(group, way) {
    "note this way round as passable by reading, if it has questions and every one of them is";
    let asked = list_empty_not_is(group);
    if (asked) {
      let every = list_all(group, app_code_quiz_exercise_lenient_is);
      if (every) {
        let words = [id, way];
        let name = list_join_space(words);
        list_add(names, name);
      }
    }
  }
  way_add(forwards, "forwards");
  way_add(backwards, "backwards");
  return names;
}
