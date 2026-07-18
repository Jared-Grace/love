import { app_shared_bible_read } from "../../love/js/app_shared_bible_read.mjs";
import { app_bible_home_generic } from "../../love/js/app_bible_home_generic.mjs";
import { app_bible_mode_get } from "../../love/js/app_bible_mode_get.mjs";
import { app_bible_mode_verse } from "../../love/js/app_bible_mode_verse.mjs";
import { app_bible_mode_button } from "../../love/js/app_bible_mode_button.mjs";
import { noop } from "../../love/js/noop.mjs";
import { equal } from "../../love/js/equal.mjs";
export async function app_bible(context) {
  let mode = app_bible_mode_get();
  let verse = equal(mode, app_bible_mode_verse());
  if (verse) {
    await app_bible_home_generic(context, noop, app_bible_mode_button);
    return;
  }
  await app_shared_bible_read(context, app_bible_mode_button);
}
