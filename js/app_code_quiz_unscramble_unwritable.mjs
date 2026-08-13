import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_quiz_string_tokens_merge } from "./app_code_quiz_string_tokens_merge.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { equal } from "./equal.mjs";
import { js_tokens_to_code } from "./js_tokens_to_code.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_quiz_unscramble_unwritable() {
  "names every code lesson whose unscramble can ask a question the screen cannot then SHOW - one whose tokens do not come back unchanged when they are written out as code again.";
  "The unscramble hands the learner one button per token and, after each press, shows how much of the answer is built by finding the pressed tokens inside the written-out code. So a token that goes missing on the way out is not a cosmetic fault: the search for it throws, in front of the learner, on the press that was CORRECT. That is what a redundant bracket did to four lessons - the writing-out was a parse and an unparse, and a tree does not keep a bracket it does not need.";
  "Which lessons ask an unscramble is read off the lessons themselves - the exercise whose answer is handled by the token select - rather than from a list written here. A list would have to be kept in step with the lessons by hand, and a lesson added with a new shape of answer is exactly what this is for.";
  "The questions are generated rather than listed for the same reason, and each lesson is asked several screens' worth, because a lesson varies what it asks and only some of what it can ask may be at fault.";
  let fns = app_code_lessons_fns();
  let rounds = 20;
  let names = [];
  let found = [];
  for (let fn of fns) {
    let lesson = fn();
    let batch_get = property_get(lesson, "batch");
    for (let i = 0; less_than(i, rounds); i++) {
      let batch = batch_get();
      for (let qa of batch) {
        let exercises = property_get(qa, "exercises");
        for (let exercise of exercises) {
          let info = property_get(exercise, "info");
          let on_answer = property_get_or(info, "on_answer", null);
          let unscramble = equal(on_answer, app_code_lesson_quiz_token_select);
          if (not(unscramble)) {
            continue;
          }
          let already = list_includes(names, fn.name);
          if (already) {
            continue;
          }
          let answer_property = property_get(info, "answer_property");
          let code = property_get(exercise, answer_property);
          let tokens2 = app_code_quiz_tokens(code);
          let tokens = app_code_quiz_string_tokens_merge(tokens2);
          let written = js_tokens_to_code(tokens);
          let tokens3 = app_code_quiz_tokens(written);
          let back = app_code_quiz_string_tokens_merge(tokens3);
          let same = lists_equal_pair(back, tokens);
          if (not(same)) {
            list_add(names, fn.name);
            list_add(found, {
              lesson: fn.name,
              code,
              written,
            });
          }
        }
      }
    }
  }
  return found;
}
