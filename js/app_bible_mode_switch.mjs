import { app_shared_bible_mode_set } from "./app_shared_bible_mode_set.mjs";
import { html_loading_immediate } from "./html_loading_immediate.mjs";
export async function app_bible_mode_switch(context, mode, app_fn) {
  "switch reader in place: persist the mode, then re-render instead of reloading the page; the hash keeps chapter and verse. use the immediate-hide overlay: the shared chapter data is usually already in memory, so a cached re-render finishes in one burst and the overlay is removed before it ever paints (no flash), while an uncached re-render still shows the spinner over the old view the whole time it waits (never a blank white page)";
  "app_fn is the entry point of the app you are actually in, handed down rather than imported: the four apps sharing this reader each re-render themselves. imported, it could only ever name one of them, and the other three switched modes by turning into that one";
  app_shared_bible_mode_set(mode);
  async function rerender() {
    await app_fn(context);
  }
  await html_loading_immediate(rerender);
}
