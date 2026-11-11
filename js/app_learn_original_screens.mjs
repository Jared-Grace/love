import { app_shared_bible_screens_base } from "./app_shared_bible_screens_base.mjs";
import { app_learn_original_home } from "./app_learn_original_home.mjs";
export function app_learn_original_screens() {
  "the screens this app can open: its own home, then the ones every bible app shares - so a screen added to the shared list reaches this app too";
  "It was a list of its own, written before the settings screen existed, and it never gained one: the gear on the reading bar asked for a screen this app had not registered, and the tap did nothing at all - 2026-11-11.";
  let screens = app_shared_bible_screens_base([app_learn_original_home]);
  return screens;
}
