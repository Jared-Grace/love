import { app_shared_button_red } from "./app_shared_button_red.mjs";
import { app_shared_confirm_generic } from "./app_shared_confirm_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_confirm_red(
  parent,
  context,
  screen_back,
  question,
  text_confirm,
  on_confirm,
) {
  "the same asking with the yes painted red: for a yes that takes away work the learner has already done rather than adding to it";
  arguments_assert(arguments, 6);
  app_shared_confirm_generic(
    parent,
    context,
    screen_back,
    question,
    text_confirm,
    on_confirm,
    app_shared_button_red,
  );
}
