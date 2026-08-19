import { app_shared_bible_screens_base } from "./app_shared_bible_screens_base.mjs";
import { app_g_bible_home } from "./app_g_bible_home.mjs";
export function app_g_bible_screens() {
  let screens = app_shared_bible_screens_base([app_g_bible_home]);
  return screens;
}
