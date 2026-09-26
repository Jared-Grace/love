import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { equal } from "./equal.mjs";
import { html_history_push } from "./html_history_push.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
export async function app_shared_screen_go_tab_step(
  context,
  key,
  value,
  screen,
) {
  arguments_assert(arguments, 4);
  ("the same as going to a screen with a pick, and it also adds a step to the back button when the screen stays the same - a link from one lesson to another lesson's examples - so the back button returns to where the reader was");
  ("Moving to a different screen already adds a step on its own, so a step is added here only for the same screen; adding it both times would make the back button need two presses.");
  let listening = property_exists(context, "history_listening");
  let name = property_get(screen, "name");
  let current = app_shared_screen_stored_get(context);
  let same = equal(current, name);
  if (listening && same) {
    html_history_push();
  }
  await app_shared_screen_go_tab(context, key, value, screen);
}
