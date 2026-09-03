import { app_shared_button_back_to } from "./app_shared_button_back_to.mjs";
import { app_shared_screen_set_lambda } from "./app_shared_screen_set_lambda.mjs";
export function app_shared_screen_set_button_back_to(
  container,
  context,
  screen_fn,
  destination,
) {
  "A way out of a sub-screen that names the screen it leads back to, so a reader can see where pressing it will put them before they press it";
  "The pickers a bible app stacks up are what this is for: a chapter list can say it leads back to the books, and a verse list can say it leads back to the book it belongs to";
  let l = app_shared_screen_set_lambda(context, screen_fn);
  let button = app_shared_button_back_to(container, destination, l);
  return button;
}
