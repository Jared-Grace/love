import { list_starts_with_curried_right } from "../../../love/public/src/list_starts_with_curried_right.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_concat_single_right } from "../../../love/public/src/list_concat_single_right.mjs";
import { app_code_lesson_quiz_token_select_variations } from "../../../love/public/src/app_code_lesson_quiz_token_select_variations.mjs";
import { js_tokenizer_normalized } from "../../../love/public/src/js_tokenizer_normalized.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_code_lesson_quiz_qa_question } from "../../../love/public/src/app_code_lesson_quiz_qa_question.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_code_lesson_quiz_token_select(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  let answer_property = property_get(info, "answer_property");
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let code = property_get(qa, answer_property);
  let variations = app_code_lesson_quiz_token_select_variations(code);
  let normalized = js_tokenizer_normalized(code);
  list_shuffle(normalized);
  let chosen = [];
  function lambda(token) {
    function lambda3() {
      let concated = list_concat_single_right(chosen, token);
      let lambda2 = list_starts_with_curried_right(concated);
      let filtered = list_filter(variations, lambda2);
    }
    let b = app_replace_button(parent, token, lambda3);
    html_style_code_dark(b);
  }
  each(normalized, lambda);
  log(app_code_lesson_quiz_token_select.name, {
    variations,
  });
}
