import { sleep_seconds } from "./sleep_seconds.mjs";
import { html_remove } from "./html_remove.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_index_of_from_start } from "./text_index_of_from_start.mjs";
import { text_take } from "./text_take.mjs";
import { js_tokens_to_code } from "./js_tokens_to_code.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_first } from "./list_first.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { equal } from "./equal.mjs";
import { list_any } from "./list_any.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_starts_with_curried_right } from "./list_starts_with_curried_right.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { js_tokenizer_normalized } from "./js_tokenizer_normalized.mjs";
import { log } from "./log.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_reduce } from "./list_reduce.mjs";
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
  let tokens_unique = list_unique(normalized);
  list_sort_text(tokens_unique);
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
      } else {
        each(buttons, html_style_code_dark);
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
        let taken = text_take(code2, reduced);
        html_clear(answer_div);
        let span_taken = html_span_text(answer_div, taken);
        function lambda4(variation) {
          let equal = lists_equal_pair(variation, chosen);
          return equal;
        }
        let any = list_any(variations, lambda4);
        if (any) {
          log(app_code_lesson_quiz_token_select.name, {
            variations,
            chosen,
          });
          await on_success();
        }
        await sleep_seconds(0.1);
        html_style_code_dark(b);
        let size = list_size(chosen);
        function lambda3(variation) {
          let skipped = list_skip(variation, size);
          return skipped;
        }
        let mapped = list_map(variations, lambda3);
        let combined = list_concat_multiple(mapped);
        let unique = list_unique(combined);
        let n = list_includes_not(unique, token);
        if (n) {
          html_remove(b);
        }
      }
    }
    return b;
  }
  buttons = list_map(tokens_unique, lambda);
  log(app_code_lesson_quiz_token_select.name, {
    variations,
  });
}
