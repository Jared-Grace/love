import { app_bible_mode_get } from "./app_bible_mode_get.mjs";
import { app_bible_mode_set } from "./app_bible_mode_set.mjs";
import { app_bible_mode_verse } from "./app_bible_mode_verse.mjs";
import { app_bible_mode_chapter } from "./app_bible_mode_chapter.mjs";
import { equal } from "./equal.mjs";
export function app_bible_mode_toggle() {
  let mode = app_bible_mode_get();
  let chapter = equal(mode, app_bible_mode_chapter());
  let next = app_bible_mode_chapter();
  if (chapter) {
    next = app_bible_mode_verse();
  }
  app_bible_mode_set(next);
  return next;
}
