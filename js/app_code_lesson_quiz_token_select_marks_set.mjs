import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
import { list_starts_with_curried_right } from "./list_starts_with_curried_right.mjs";
import { list_any } from "./list_any.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_lesson_quiz_token_select_marks_set(
  tokens_unique,
  chosen,
  variations,
  buttons,
) {
  arguments_assert(arguments, 4);
  ("say which pieces may be tapped NEXT, so a walk of the whole course can build this line without a second answer key");
  ("Which pieces those are is already worked out here, by the one rule this quiz answers a tap with: a piece may go next when some order still standing begins with what has been tapped plus it. Asking that same question of every piece is the whole of the marking, so the marks cannot say one thing while the tap says another.");
  ("Said again after every tap, because what may go next is a different set once something has gone. A mark left standing from the tap before is a piece that WAS right, pointing a walk at an answer the quiz has since stopped accepting.");
  ("The pieces and their buttons stand in the same order, because the buttons were made from the pieces one for one.");
  function each_button(b, index) {
    let token_each = list_get(tokens_unique, index);
    let concated = list_concat_single_right(chosen, token_each);
    let lambda = list_starts_with_curried_right(concated);
    let may = list_any(variations, lambda);
    if (may) {
      html_data_set_test_happy(b);
      return;
    }
    html_data_set_test_happy_remove(b);
  }
  each_index(buttons, each_button);
}
