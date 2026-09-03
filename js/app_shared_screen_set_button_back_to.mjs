import { app_shared_button_back_to } from "./app_shared_button_back_to.mjs";
import { app_shared_screen_set_lambda } from "./app_shared_screen_set_lambda.mjs";
export function app_shared_screen_set_button_back_to(
  container,
  context,
  screen_fn,
  destination,
) {
  let l = app_shared_screen_set_lambda(context, screen_fn);
  let button = app_shared_button_back_to(
    container,
    destination,
    function lambda2() {},
  );
}
