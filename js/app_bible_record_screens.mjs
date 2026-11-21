import { app_shared_bible_screens_base } from "./app_shared_bible_screens_base.mjs";
import { app_bible_record_home } from "./app_bible_record_home.mjs";
export function app_bible_record_screens() {
  let screens = app_shared_bible_screens_base([app_bible_record_home]);
  return screens;
}
