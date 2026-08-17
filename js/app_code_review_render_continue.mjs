import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_code_review_render_continue(continue_parent, go_next) {
  arguments_assert(arguments, 2);
  ("the continue-to-the-next-lesson button");
  let arrow = emoji_arrow_right();
  let continue_text = text_combine_middle_space_nb(
    arrow,
    "Continue to the next lesson",
  );
  app_shared_button_wide(continue_parent, continue_text, go_next);
}
