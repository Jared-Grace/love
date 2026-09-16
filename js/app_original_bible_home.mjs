import { fn_name } from "./fn_name.mjs";
import { bible_word_sound_url } from "./bible_word_sound_url.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_generate_download } from "./app_original_bible_gloss_generate_download.mjs";
import { app_shared_gloss_bible_home_generic } from "./app_shared_gloss_bible_home_generic.mjs";
import { app_original_bible } from "./app_original_bible.mjs";
export async function app_original_bible_home(context) {
  "Every word on this page can be heard said, because a clip is named after the word itself and so the page needs to hand over nothing but the word a finger landed on.";
  ("★ A WORD THAT WAS NEVER RECORDED MAKES A GOOD-LOOKING ADDRESS AND FETCHES NOTHING, and the playing swallows that silently, so a tap on it does nothing at all and the reader is told nothing. ",
    fn_name("bible_word_voice_chapter_missing"),
    " is what says, before a reader finds out, which words of a chapter would be silent.");
  ("No slower readings yet. Slowing is done to a recording, so the recordings had to come first; the turtle arrives for this page the day they do.");
  arguments_assert(arguments, 1);
  let download = app_original_bible_gloss_generate_download;
  let sound_url_get = bible_word_sound_url;
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
