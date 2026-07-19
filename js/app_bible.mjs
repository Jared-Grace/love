import { app_shared_bible_read } from "./app_shared_bible_read.mjs";
import { app_bible_shared_initialize } from "./app_bible_shared_initialize.mjs";
import { app_bible_screens } from "./app_bible_screens.mjs";
import { app_bible_home } from "./app_bible_home.mjs";
import { app_bible_mode_get } from "./app_bible_mode_get.mjs";
import { app_bible_mode_set } from "./app_bible_mode_set.mjs";
import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
import { app_bible_verse_switch_button } from "./app_bible_verse_switch_button.mjs";
import { equal } from "./equal.mjs";
export async function app_bible(context) {
  let mode = app_bible_mode_get();
  ("write the mode back so the url always names the reader you are in, even on a first visit that arrived without it");
  app_bible_mode_set(mode);
  let verse = equal(mode, app_shared_bible_mode_verse());
  if (verse) {
    await app_bible_shared_initialize(
      context,
      app_bible,
      app_bible_screens(),
      app_bible_home,
    );
    return;
  }
  ("the two readers switch via a contextual button on each verse, not a top-bar toggle");
  await app_shared_bible_read(context, app_bible_verse_switch_button);
}
