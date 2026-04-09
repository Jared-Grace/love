import { app_bible_screens_base } from "../../../love/public/src/app_bible_screens_base.mjs";
import { app_ceb_bible_home } from "../../../love/public/src/app_ceb_bible_home.mjs";
export function app_ceb_bible_screens() {
  let screens = app_bible_screens_base([app_ceb_bible_home]);
  return screens;
}
