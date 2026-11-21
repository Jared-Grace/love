import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_set } from "./property_set.mjs";
import { html_history_state_get } from "./html_history_state_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_screen_stored_set_context } from "./app_shared_screen_stored_set_context.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_refresh } from "./app_shared_refresh.mjs";
import { html_on_pop_state } from "./html_on_pop_state.mjs";
import { window_reload } from "./window_reload.mjs";
import { html_on_hash_change } from "./html_on_hash_change.mjs";
export function app_shared_history_listen(context) {
  arguments_assert(arguments, 1);
  ("draw again the screen filed on whichever step the back or forward button lands on. Listened for once per page: an app drawn again into the same context - a bible reader swapped over in place - is the same page, and a second listener would draw every step twice");
  ("being listened for is also what lets a screen change add a step at all, since a step nothing draws again would leave the back button changing the address and nothing else");
  let listening = property_exists(context, "history_listening");
  if (listening) {
    return;
  }
  property_set(context, "history_listening", true);
  async function on_pop() {
    "a step with no screen filed on it is not one of ours - a photo opened full screen adds one, and its closing is its own business";
    "and a step naming the screen and the address already drawn needs nothing: that is the photo closing onto the page under it, which is still there";
    "The address is compared as well as the screen, because a reminder link goes from one lesson's examples to another's - the same screen - and coming back from it has to draw the lesson the reader left.";
    let state = html_history_state_get();
    if (null_is(state)) {
      return;
    }
    let screen = property_get_or_null(state, "screen");
    if (null_is(screen)) {
      return;
    }
    let current = app_shared_screen_stored_get(context);
    let address = property_get_or_null(state, "address");
    let drawn = property_get_or_null(context, "history_address_drawn");
    let screen_same = equal(current, screen);
    let address_same = equal(address, drawn);
    if (screen_same && address_same) {
      return;
    }
    app_shared_screen_stored_set_context(context, screen);
    ("an app that reads more than the screen out of its address - which rule set, which lesson - reads it again here, since the step brought its old address back with it");
    let hash_restore = property_get_or_null(context, "hash_restore");
    if (null_not_is(hash_restore)) {
      hash_restore(context);
    }
    await app_shared_refresh(context);
  }
  html_on_pop_state(on_pop);
  function on_hash() {
    "A CHANGED ADDRESS OPENS WHAT IT NAMES, found by the human 2026-11-21 in learn_js: editing the lesson after the # in the bar left the page on the old lesson, because the browser does not load a page again for a change after the # and an app reads its address only as it opens. So such a change loads the page again, and the page reads the new address.";
    "Only a step with nothing filed on it does. Every step this page makes is filed by the drawing of it, and moving back or forward onto one changes the address too - that is drawn again above, in place, and loading the page again there would throw away where the reader was for nothing. A step with nothing filed was made by the browser: an address typed into the bar, or a link to this same page.";
    let state = html_history_state_get();
    if (null_is(state)) {
      window_reload();
    }
  }
  html_on_hash_change(on_hash);
}
