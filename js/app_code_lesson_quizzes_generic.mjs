import { value_or_if_null } from "./value_or_if_null.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { object_assign } from "./object_assign.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
export function app_code_lesson_quizzes_generic(params) {
  let forwards_record = property_get(params, "forwards");
  let backwards_record = property_get(params, "backwards");
  let backwards_code = property_get(params, "backwards_code");
  let batch_get = property_get(params, "batch_get");
  let forwards_code = property_get(params, "forwards_code");
  let unscramble_label_override = property_get_or(
    params,
    "unscramble_label",
    null,
  );
  let unscramble_label = value_or_if_null(
    unscramble_label_override,
    "Please unscramble the code: ",
  );
  let mc = app_code_lesson_quiz_multiple_choice;
  let backwards = object_copy_assign(backwards_record, {
    answer_property: "question",
    on_answer: mc,
  });
  let forwards = object_copy_assign(forwards_record, {
    answer_property: "answer",
    on_answer: mc,
  });
  ("a lesson may drop the backwards direction entirely. Most lessons run both ways because the pair is one fact read from either end - this code has that value, that value comes from this code. It only holds while the answer names its question uniquely, and some lessons answer with a PART of the question: asked which part of 1 + 2 * 4 is solved first, the answer 2 * 4 belongs to every line that happens to contain it, so a backwards question built from it could have two right buttons and mark one of them wrong");
  ("the backwards unscramble goes with it rather than being switched off separately, because it is the same direction wearing different clothes - offered on its own it would ask the learner to build a question the lesson has just said it will not ask");
  let backwards_include = property_get_or(params, "backwards_include", true);
  let infos = [forwards];
  let codes = [
    {
      include: forwards_code,
      base: forwards,
    },
  ];
  if (backwards_include) {
    list_add(infos, backwards);
    list_add(codes, {
      include: backwards_code,
      base: backwards,
    });
  }
  function lambda2(c) {
    let include = property_get(c, "include");
    let base = property_get(c, "base");
    if (include) {
      let token_select = object_copy(base);
      object_assign(token_select, {
        on_answer: app_code_lesson_quiz_token_select,
        answer_label: unscramble_label,
      });
      list_add(infos, token_select);
    }
  }
  each(codes, lambda2);
  let quizzes_get = function lambda(question, answer) {
    function each_info(qa) {
      let r = function quiz(context, parent, container, refresh, next_get) {
        app_code_lesson_quiz(
          container,
          {
            question,
            answer,
          },
          parent,
          context,
          refresh,
          qa,
          batch_get,
          quizzes,
          next_get,
        );
      };
      return r;
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
  };
  return quizzes_get;
}
