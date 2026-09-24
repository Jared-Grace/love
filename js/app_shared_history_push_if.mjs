import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { equal } from "./equal.mjs";
import { html_history_push } from "./html_history_push.mjs";
export function app_shared_history_push_if(context, screen_name) {
  arguments_assert(arguments, 2);
  ("moving to another screen is a page the reader can go back from, so it adds a step to the back button. Only an app that can read its screen back out of the address gets one - a step it could not draw again would leave the back button changing the address and nothing else");
  ("drawing the screen already showing again is not moving anywhere, and a step for it would make the back button seem to do nothing");
  let joined = property_exists(context, "hash_restore");
  if (not(joined)) {
    return;
  }
  let current = app_shared_screen_stored_get(context);
  let same = equal(current, screen_name);
  if (same) {
    return;
  }
  html_history_push();
}
