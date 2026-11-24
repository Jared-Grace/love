import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_screen_asking_set } from "./app_shared_screen_asking_set.mjs";
import { app_shared_screen_later } from "./app_shared_screen_later.mjs";
import { app_shared_confirm_choices } from "./app_shared_confirm_choices.mjs";
export function app_shared_confirm_generic({
  parent,
  context,
  screen_back,
  question,
  text_confirm,
  on_confirm,
  button_confirm,
}) {
  "the whole of a screen that asks before doing something a learner cannot take back: the question, the button that does it, and the way back to where the asking started";
  "It is a screen of its own rather than a question opening under the button that was pressed. Asked in place, the question is one more thing among the options around it and everything below it is pushed down the page as it appears; asked on its own screen, there is nothing else to read and nothing moves.";
  "Every app asks in this one shape, so the day this is better as something drawn over the screen instead, it changes here and changes for all of them at once.";
  arguments_assert(arguments, 1);
  app_shared_screen_asking_set(context);
  let on_back = app_shared_screen_later(context, screen_back);
  app_shared_confirm_choices(
    parent,
    question,
    button_confirm,
    text_confirm,
    on_confirm,
    on_back,
  );
}
