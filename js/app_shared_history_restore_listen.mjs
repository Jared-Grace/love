import { arguments_assert } from "./arguments_assert.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
import { app_shared_home_name_context } from "./app_shared_home_name_context.mjs";
import { app_shared_screen_stored_set_context } from "./app_shared_screen_stored_set_context.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { html_on_pop_state } from "./html_on_pop_state.mjs";
export function app_shared_history_restore_listen(context, hash_restore) {
  arguments_assert(arguments, 2);
  ("read where the reader is out of the address now, before the first draw, and again every time the back or forward button puts another address in the bar. Handing over the reader is what joins an app to the back button: a screen change in an app that has one adds a step, because it can be drawn again from the address that step holds");
  ("each app keeps its own reader, since only it knows which words its address holds and which screens cannot be drawn without them");
  object_merge_replace(context, {
    hash_restore,
  });
  hash_restore(context);
  async function on_pop() {
    "home first, so an address naming no screen, or one the app refuses to draw from what the address holds, lands home rather than staying on the page the reader just left";
    let home = app_shared_home_name_context(context);
    app_shared_screen_stored_set_context(context, home);
    hash_restore(context);
    await app_shared_refresh(context);
  }
  html_on_pop_state(on_pop);
}
