import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate_download } from "./app_ceb_bible_gloss_generate_download.mjs";
import { app_shared_gloss_bible_home_generic } from "./app_shared_gloss_bible_home_generic.mjs";
import { app_ceb_bible } from "./app_ceb_bible.mjs";
export async function app_ceb_bible_home(context) {
  "No recordings are handed in, so no speaker is drawn beside a word. Nothing has been recorded for these words yet; the day something is, the way to ask for one goes in here and the row starts showing it.";
  arguments_assert(arguments, 1);
  let download = app_ceb_bible_gloss_generate_download;
  let sound_url_get = null;
  await app_shared_gloss_bible_home_generic(
    context,
    download,
    true,
    app_ceb_bible,
    sound_url_get,
  );
}
