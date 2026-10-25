import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { app_code_review_next_word } from "./app_code_review_next_word.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
export function app_code_review_render_continue(
  continue_parent,
  go_next,
  context,
) {
  arguments_assert(arguments, 3);
  ("the continue-to-the-next-lesson button, or to the next milestone where one stands under the same lesson, as the way on does");
  let arrow = emoji_arrow_right();
  let next_word = app_code_review_next_word(context);
  let right = text_combine("Continue to the next ", next_word);
  let continue_text = text_combine_middle_space_nb(arrow, right);
  let button = app_shared_button_wide(continue_parent, continue_text, go_next);
  ("this is the way on out of a review, so it is marked as one: a review that is done has exactly one control that carries a person further, and the rest of what is on the screen goes back somewhere they have already been");
  html_data_set_test_happy(button);
}
