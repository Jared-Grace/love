import { list_get } from "./list_get.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { each_index } from "./each_index.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_token_select_chosen } from "./app_code_lesson_quiz_token_select_chosen.mjs";
import { app_code_lesson_quiz_token_select_variation_buildable } from "./app_code_lesson_quiz_token_select_variation_buildable.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { app_code_quiz_string_tokens_merge } from "./app_code_quiz_string_tokens_merge.mjs";
import { sleep_seconds } from "./sleep_seconds.mjs";
import { html_remove } from "./html_remove.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_index_of_from_start } from "./text_index_of_from_start.mjs";
import { text_take } from "./text_take.mjs";
import { js_tokens_to_code } from "./js_tokens_to_code.mjs";
import { list_first } from "./list_first.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { list_any } from "./list_any.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_starts_with_curried_right } from "./list_starts_with_curried_right.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
import { log } from "./log.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
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
  "A quiz where the student builds one line of code by tapping its pieces in order, out of a row of buttons holding every piece the line needs and no others.";
  "More than one order can be right, so what is kept is the whole set of orders still possible rather than one expected answer. A tap that no surviving order begins with is wrong and the button says so; a tap that some order begins with keeps those orders and drops the rest. The question is answered when one of the survivors has been spelled out exactly.";
  "That set is also what the row of buttons is trimmed from. After each tap, a piece that no surviving order still needs is taken away - so the buttons left standing are always the pieces that could come next, and the student is never left staring at a piece there is no longer any way to use.";
  "What is shown back is the code itself rather than the pieces tapped. The first surviving order is written out as a line and cut off where the student has got to, so the spacing and the punctuation are the ones the finished line will have, and what appears is a line of code growing rather than a list of words.";
  let answer_div = html_div_code_dark(parent);
  let r = app_code_lesson_quiz_token_select_variation_buildable(
    info,
    qa,
    answer_div,
  );
  let r2 = app_code_lesson_quiz_token_select_chosen(r);
  let chosen = property_get(r2, "chosen");
  let tokens_unique = property_get(r2, "tokens_unique");
  let variations = property_get(r2, "variations");
  let buttons = property_get(r2, "buttons");
  function lambda(token) {
    let b = app_shared_button(parent, token, on_click);
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
        marks_set();
        let variation_first = list_first(variations);
        let merged = app_code_quiz_string_tokens_merge(variation_first);
        let code = js_tokens_to_code(merged);
        function lambda5(index, token_each) {
          let sum = text_index_of_from_start(code, token_each, index);
          return sum;
        }
        let reduced = list_reduce(chosen, lambda5, 0);
        let taken = text_take(code, reduced);
        html_clear(answer_div);
        html_span_text(answer_div, taken);
        function lambda4(variation) {
          let same = lists_equal_pair(variation, chosen);
          return same;
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
        let combined = list_map_concat_multiple(variations, lambda3);
        let unique = list_unique(combined);
        let n = list_includes_not(unique, token);
        if (n) {
          html_remove(b);
        }
      }
    }
    return b;
  }
  function marks_set() {
    "say which pieces may be tapped NEXT, so a walk of the whole course can build this line without a second answer key";
    "Which pieces those are is already worked out here, by the one rule this quiz answers a tap with: a piece may go next when some order still standing begins with what has been tapped plus it. Asking that same question of every piece is the whole of the marking, so the marks cannot say one thing while the tap says another.";
    "Said again after every tap, because what may go next is a different set once something has gone. A mark left standing from the tap before is a piece that WAS right, pointing a walk at an answer the quiz has since stopped accepting.";
    "The pieces and their buttons stand in the same order, because the buttons were made from the pieces one for one.";
    function each_button(b2, index) {
      let token_each = list_get(tokens_unique, index);
      let concated = list_concat_single_right(chosen, token_each);
      let lambda6 = list_starts_with_curried_right(concated);
      let may = list_any(variations, lambda6);
      if (may) {
        html_data_set_test_happy(b2);
        return;
      }
      html_data_set_test_happy_remove(b2);
    }
    each_index(buttons, each_button);
  }
  buttons = list_map(tokens_unique, lambda);
  marks_set();
  log(app_code_lesson_quiz_token_select.name, {
    variations,
  });
}
