import { app_bible_mode_set } from "./app_bible_mode_set.mjs";
import { app_bible } from "./app_bible.mjs";
import { html_loading } from "./html_loading.mjs";
export async function app_bible_mode_switch(context, mode) {
  "switch reader in place: persist the mode, then re-render behind the loading overlay instead of reloading the page; the hash keeps chapter and verse. keep the spinner (not a suppressed re-render): the re-render clears the page and can await work that is not already in memory, so without the overlay the reader would stare at a prolonged blank white; a spinner over the old view is better than that";
  app_bible_mode_set(mode);
  async function rerender() {
    await app_bible(context);
  }
  await html_loading(rerender);
}
