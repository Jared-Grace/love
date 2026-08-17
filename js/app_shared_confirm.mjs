import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_shared_confirm_generic } from "./app_shared_confirm_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_confirm(
  parent,
  context,
  screen_back,
  question,
  text_confirm,
  on_confirm,
) {
  "the ordinary asking, where saying yes carries the learner forward, so the yes is the green of every other go ahead here";
  arguments_assert(arguments, 6);
  app_shared_confirm_generic(
    parent,
    context,
    screen_back,
    question,
    text_confirm,
    on_confirm,
    app_shared_button_green,
  );
}
