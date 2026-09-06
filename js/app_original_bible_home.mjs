import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_generate_download } from "./app_original_bible_gloss_generate_download.mjs";
import { app_shared_gloss_bible_home_generic } from "./app_shared_gloss_bible_home_generic.mjs";
import { app_original_bible } from "./app_original_bible.mjs";
export async function app_original_bible_home(context) {
  "No recordings are handed in, so no speaker is drawn beside a word. The words here are Hebrew and Greek, and a recording of one would be a different job from recording an English word - a reading rather than a pronunciation.";
  "No slower readings either, and that one is further off still: slowing is done to a recording, so there has to be a recording first.";
  arguments_assert(arguments, 1);
  let download = app_original_bible_gloss_generate_download;
  let sound_url_get = null;
  let slow_url_get = null;
  await app_shared_gloss_bible_home_generic(
    context,
    download,
    false,
    app_original_bible,
    sound_url_get,
    slow_url_get,
  );
}
