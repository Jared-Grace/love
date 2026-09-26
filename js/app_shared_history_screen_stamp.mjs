import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { html_url } from "./html_url.mjs";
import { property_set } from "./property_set.mjs";
import { html_history_state_merge } from "./html_history_state_merge.mjs";
export function app_shared_history_screen_stamp(context) {
  arguments_assert(arguments, 1);
  ("file the screen just drawn on the step of the back button it was drawn on, so coming back to that step can draw it again. It is filed on the step rather than written into the address because not every app's address has room for it - a bible reader's address is its chapter and nothing else - and the step carries it whatever the address looks like");
  let screen = app_shared_screen_stored_get(context);
  ("The address is filed beside the screen, and kept on the page as the one last drawn, because two steps can stand on the same screen - one lesson's examples and another's - and only the address tells them apart. Coming back to a step then redraws when either differs from what is showing.");
  let address = html_url();
  property_set(context, "history_address_drawn", address);
  html_history_state_merge({
    screen,
    address,
  });
}
