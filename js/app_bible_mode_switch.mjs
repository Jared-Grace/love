import { app_bible_mode_set } from "./app_bible_mode_set.mjs";
import { window_reload } from "./window_reload.mjs";
export function app_bible_mode_switch(mode) {
  ("switch reader by persisting the mode then reloading; the hash keeps chapter and verse so you stay on the same spot");
  app_bible_mode_set(mode);
  window_reload();
}
