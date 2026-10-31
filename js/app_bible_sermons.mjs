import { app_bible_sermons_screens } from "./app_bible_sermons_screens.mjs";
import { app_bible_sermons_home } from "./app_bible_sermons_home.mjs";
import { app_bible_sermons_chapters } from "./app_bible_sermons_chapters.mjs";
import { app_shared_bible_chapters_offered_key } from "./app_shared_bible_chapters_offered_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_bible_sermons_start } from "./app_bible_sermons_start.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
export async function app_bible_sermons(context) {
  "The sermons the gospel game uses, for anyone to read: only the approved ones, read-only, and with no signing in.";
  "Only the approved chapters are offered, because a draft nobody has read over is not something to hand a reader as teaching.";
  let app_fn = app_bible_sermons;
  let screens = app_bible_sermons_screens();
  let screen_home = app_bible_sermons_home;
  let chapters_ask = app_bible_sermons_chapters;
  let key_chapters = app_shared_bible_chapters_offered_key();
  property_set(context, key_chapters, chapters_ask);
  await app_bible_sermons_start();
  await app_shared_bible_initialize(context, app_fn, screens, screen_home);
}
