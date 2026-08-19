import { app_shared_bible_screens_base } from "./app_shared_bible_screens_base.mjs";
import { app_en_learn_bible_home } from "./app_en_learn_bible_home.mjs";
export function app_en_learn_bible_screens() {
  "Every screen this app can show - its own reading screen, and the screens every Bible app here shares.";
  let screens = app_shared_bible_screens_base([app_en_learn_bible_home]);
  return screens;
}
