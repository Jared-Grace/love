import { app_bible_screens_base } from "./app_bible_screens_base.mjs";
import { app_ceb_bible_home } from "./app_ceb_bible_home.mjs";
export function app_ceb_bible_screens() {
  let screens = app_bible_screens_base([app_ceb_bible_home]);
  return screens;
}
