import { list_sort_text } from "../../../love/public/src/list_sort_text.mjs";
import { app_shared_button_screen_green_style_assign } from "../../../love/public/src/app_shared_button_screen_green_style_assign.mjs";
import { text_space_nb } from "../../../love/public/src/text_space_nb.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { text_index_of_from_start } from "../../../love/public/src/text_index_of_from_start.mjs";
import { text_take } from "../../../love/public/src/text_take.mjs";
import { js_tokens_to_code } from "../../../love/public/src/js_tokens_to_code.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { lists_equal_pair } from "../../../love/public/src/lists_equal_pair.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_div_code_dark } from "../../../love/public/src/html_div_code_dark.mjs";
import { app_code_lesson_quiz_wrong_set } from "../../../love/public/src/app_code_lesson_quiz_wrong_set.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { list_starts_with_curried_right } from "../../../love/public/src/list_starts_with_curried_right.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_concat_single_right } from "../../../love/public/src/list_concat_single_right.mjs";
import { app_code_lesson_quiz_token_select_variations } from "../../../love/public/src/app_code_lesson_quiz_token_select_variations.mjs";
import { js_tokenizer_normalized } from "../../../love/public/src/js_tokenizer_normalized.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { app_replace_button } from "../../../love/public/src/app_replace_button.mjs";
import { app_code_lesson_quiz_qa_question } from "../../../love/public/src/app_code_lesson_quiz_qa_question.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
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
  ("ensures div is visible from beginning");
  let text = text_space_nb();
  html_text_set(answer_div, text);
  let variations = app_code_lesson_quiz_token_select_variations(code);
  let normalized = js_tokenizer_normalized(code);
  list_sort_text(normalized);
  let buttons = null;
  let chosen = [];
  function lambda(token) {
    let b = app_replace_button(parent, token, on_click);
    html_style_code_dark(b);
    async function on_click() {
      let concated = list_concat_single_right(chosen, token);
      let lambda2 = list_starts_with_curried_right(concated);
      let variations_new = list_filter(variations, lambda2);
      let e = list_empty_is(variations_new);
      if (e) {
        app_code_lesson_quiz_wrong_set(b);
        on_wrong();
        log(app_code_lesson_quiz_token_select.name, {
          concated,
        });
      } else {
        app_shared_button_screen_green_style_assign(b);
        list_add(chosen, token);
        variations = variations_new;
        let variation_first = list_first(variations);
        let code2 = js_tokens_to_code(variation_first);
        function lambda5(index, token) {
          let sum = text_index_of_from_start(code2, token, index);
          return sum;
        }
        let reduced = list_reduce(chosen, lambda5, 0);
        log(app_code_lesson_quiz_token_select.name, {
          reduced,
        });
        let taken = text_take(code2, reduced);
        html_clear(answer_div);
        let span_taken = html_span_text(answer_div, taken);
        each(buttons, html_style_code_dark);
        function lambda4(variation) {
          let equal = lists_equal_pair(variation, chosen);
          return equal;
        }
        let any = list_any(variations, lambda4);
        if (any) {
          await on_success();
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
