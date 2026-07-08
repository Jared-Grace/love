import { lists_equal_pair } from "../../../love/public/src/lists_equal_pair.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_div_code_dark } from "../../../love/public/src/html_div_code_dark.mjs";
import { app_code_lesson_quiz_wrong_set } from "../../../love/public/src/app_code_lesson_quiz_wrong_set.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_starts_with_curried_right } from "../../../love/public/src/list_starts_with_curried_right.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_concat_single_right } from "../../../love/public/src/list_concat_single_right.mjs";
import { app_code_lesson_quiz_token_select_variations } from "../../../love/public/src/app_code_lesson_quiz_token_select_variations.mjs";
import { js_tokenizer_normalized } from "../../../love/public/src/js_tokenizer_normalized.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { app_code_lesson_quiz_qa_question } from "../../../love/public/src/app_code_lesson_quiz_qa_question.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function app_code_lesson_quiz_token_select(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
) {
  let answer_div = html_div_code_dark(parent);
  let answer_property = property_get(info, "answer_property");
  let quiz_question = app_code_lesson_quiz_qa_question(qa, answer_property);
  let code = property_get(qa, answer_property);
  let variations = app_code_lesson_quiz_token_select_variations(code);
  let normalized = js_tokenizer_normalized(code);
  list_shuffle(normalized);
  let buttons = null;
  let chosen = [];
  function lambda(token) {
    let b = app_replace_button(parent, token, lambda3);
    html_style_code_dark(b);
    function lambda3() {
      let concated = list_concat_single_right(chosen, token);
      let lambda2 = list_starts_with_curried_right(concated);
      variations = list_filter(variations, lambda2);
      let e = list_empty_is(filtered);
      if (e) {
        app_code_lesson_quiz_wrong_set(b);
      } else {
        function lambda4(variation) {
          let equal = lists_equal_pair(variation, chosen);
          return equal;
        }
        let any = list_any(variations, lambda4);
        if (any) {
        } else {
          each(buttons, html_style_code_dark);
          list_add(chosen, token);
          let span = html_span_text(answer_div, token);
        }
      }
    }
    return b;
  }
  buttons = list_map(normalized, lambda);
  log(app_code_lesson_quiz_token_select.name, {
    variations,
  });
}
