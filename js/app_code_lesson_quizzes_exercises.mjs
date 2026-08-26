import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_quizzes_exercises(
  infos,
  batch_get,
  question,
  answer,
) {
  arguments_assert(arguments, 4);
  ("one quiz and one exercise for every kind of question a lesson wants asked about the same pair, all of them reading the one question, the one answer and the one batch");
  ("What a lesson actually chooses is the list of kinds - which way round to ask, what to label each side, what to draw the answers with. Turning that list into the two lists a lesson hands back is the same work every time, and it was written out by hand in four lessons and once more inside the generic that most of the others go through. Five copies of a wiring nobody reads is five places for one of them to be quietly a little different.");
  ("Every quiz is handed the whole list of quizzes, its own included. That is not an accident of the writing - a quiz that has been answered moves the learner to the next kind, so it has to know what the kinds are, and the list is therefore read after it is filled rather than while.");
  let qa = {
    question,
    answer,
  };
  function each_info(info) {
    function quiz(context, parent, container, refresh, next_get) {
      app_code_lesson_quiz(
        container,
        qa,
        parent,
        context,
        refresh,
        info,
        batch_get,
        quizzes,
        next_get,
      );
    }
    return quiz;
  }
  let quizzes = list_map(infos, each_info);
  function each_exercise(info) {
    let exercise = {
      info,
      question,
      answer,
      batch_get,
    };
    return exercise;
  }
  let exercises = list_map(infos, each_exercise);
  let quizzes_exercises = {
    quizzes,
    exercises,
  };
  return quizzes_exercises;
}
