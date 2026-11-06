import { app_shared_bible_screens_base } from "./app_shared_bible_screens_base.mjs";
import { app_learn_ceb_home } from "./app_learn_ceb_home.mjs";
export function app_ceb_bible_screens() {
  let screens = app_shared_bible_screens_base([app_learn_ceb_home]);
  return screens;
}
