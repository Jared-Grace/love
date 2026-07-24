import { app_bible_mode_set } from "./app_bible_mode_set.mjs";
import { app_bible } from "./app_bible.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
export async function app_bible_mode_switch(context, mode) {
  "switch reader in place: persist the mode, then re-render instead of reloading the page; the hash keeps chapter and verse, and the shared chapter data is already cached in memory, so the re-render finishes within microtasks and the browser never paints a blank frame; suppress the loading overlay so the switch is instant rather than flashing 'one moment' for the ~300ms the overlay lingers on hide";
  app_bible_mode_set(mode);
  async function rerender() {
    await app_bible(context);
  }
  await html_loading_suppressed(rerender);
}
