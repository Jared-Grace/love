import { app_bible_mode_set } from "./app_bible_mode_set.mjs";
import { app_bible } from "./app_bible.mjs";
import { html_loading } from "./html_loading.mjs";
export async function app_bible_mode_switch(context, mode) {
  ("switch reader in place: persist the mode, then re-render behind one loading overlay instead of reloading the page; the hash keeps chapter and verse, and the shared chapter data stays cached in memory so the switch is instant");
  app_bible_mode_set(mode);
  async function rerender() {
    await app_bible(context);
  }
  await html_loading(rerender);
}
