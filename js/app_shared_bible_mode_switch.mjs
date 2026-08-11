import { app_shared_home_name } from "./app_shared_home_name.mjs";
import { app_shared_screen_stored_set } from "./app_shared_screen_stored_set.mjs";
import { app_shared_bible_mode_set } from "./app_shared_bible_mode_set.mjs";
import { html_loading_immediate } from "./html_loading_immediate.mjs";
export async function app_shared_bible_mode_switch(context, mode, app_fn) {
  "switch reader in place: persist the mode, then re-render instead of reloading the page; the hash keeps chapter and verse. use the immediate-hide overlay: the shared chapter data is usually already in memory, so a cached re-render finishes in one burst and the overlay is removed before it ever paints (no flash), while an uncached re-render still shows the spinner over the old view the whole time it waits (never a blank white page)";
  "app_fn is the entry point of the app you are actually in, handed down rather than imported: the four apps sharing this reader each re-render themselves. imported, it could only ever name one of them, and the other three switched modes by turning into that one";
  app_shared_bible_mode_set(mode);
  ("land on the reader itself, not on whichever screen this tab was last left on: the verse reader remembers its screen per tab, so a verse button pressed in the whole-chapter reader would otherwise arrive at the chapter or verse picker somebody opened earlier rather than at the verse it names. the whole-chapter reader keeps no screens, so writing this when switching the other way costs it nothing");
  let screen_name = app_shared_home_name(app_fn);
  app_shared_screen_stored_set(app_fn, screen_name);
  async function rerender() {
    await app_fn(context);
  }
  await html_loading_immediate(rerender);
}
