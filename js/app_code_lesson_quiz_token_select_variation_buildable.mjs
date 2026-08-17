import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_code_quiz_variation_buildable_is } from "./app_code_quiz_variation_buildable_is.mjs";
export function app_code_lesson_quiz_token_select_variation_buildable(
  info,
  qa,
  answer_div,
) {
  arguments_assert(arguments, 3);
  let answer_property = property_get(info, "answer_property");
  app_code_lesson_quiz_qa_question(qa, answer_property);
  let code = property_get(qa, answer_property);
  ("ensures div is visible from beginning");
  let text = text_space_nb();
  html_text_set(answer_div, text);
  let variations = app_code_lesson_quiz_token_select_variations(code);
  let normalized = app_code_quiz_tokens(code);
  let tokens_unique = list_unique(normalized);
  function variation_buildable(variation) {
    "keep only variations whose every token is an available button; a commutative swap across a non-commutative neighbour introduces parentheses (e.g. 9 - 4 + 4 gives 4 + (9 - 4)) that the answer never had, so there is no ( or ) button - that would be an unbuildable trap that accepts the first token then dead-ends";
    let a = app_code_quiz_variation_buildable_is(variation, tokens_unique);
    return a;
  }
  let r = {
    variations,
    tokens_unique,
    variation_buildable,
  };
  return r;
}
