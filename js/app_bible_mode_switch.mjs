import { app_bible_mode_set } from "./app_bible_mode_set.mjs";
import { app_bible } from "./app_bible.mjs";
import { html_loading_immediate } from "./html_loading_immediate.mjs";
export async function app_bible_mode_switch(context, mode) {
  "switch reader in place: persist the mode, then re-render instead of reloading the page; the hash keeps chapter and verse. use the immediate-hide overlay: the shared chapter data is usually already in memory, so a cached re-render finishes in one burst and the overlay is removed before it ever paints (no flash), while an uncached re-render still shows the spinner over the old view the whole time it waits (never a blank white page)";
  app_bible_mode_set(mode);
  async function rerender() {
    await app_bible(context);
  }
  await html_loading_immediate(rerender);
}
