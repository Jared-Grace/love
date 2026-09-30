import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_original_bible_gloss_generate_download } from "./app_original_bible_gloss_generate_download.mjs";
import { integer_random } from "./integer_random.mjs";
import { gloss_word_sound_url_cycling_generic } from "./gloss_word_sound_url_cycling_generic.mjs";
import { bible_word_voices } from "./bible_word_voices.mjs";
import { bible_word_sound_voice_url } from "./bible_word_sound_voice_url.mjs";
import { bible_word_sound_voice_slow_url } from "./bible_word_sound_voice_slow_url.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_gloss_bible_home_generic } from "./app_shared_gloss_bible_home_generic.mjs";
import { app_original_bible } from "./app_original_bible.mjs";
export async function app_original_bible_home(context) {
  "Every word on this page can be heard said, because a clip is named after the word itself and so the page needs to hand over nothing but the word a finger landed on.";
  ("★ A WORD THAT WAS NEVER RECORDED MAKES A GOOD-LOOKING ADDRESS AND FETCHES NOTHING, and the playing swallows that silently, so a tap on it does nothing at all and the reader is told nothing. ",
    fn_name("bible_word_voice_chapter_missing"),
    " is what says, before a reader finds out, which words of a chapter would be silent.");
  ("The turtle beside each word says it again at half speed, made from the same recording, so it is the voice the reader just heard, stretched.");
  ("★ EACH TAP GOES ROUND THE WORD'S CAST OF VOICES, as the English words' taps do and for the same reason; Hebrew has four people and Greek one, and the cast is asked of the word because one screen can hold both.");
  ("The first tap's place is drawn from twelve, because twelve divides evenly by every cast size up to four, so whichever language a reader starts in every person of its cast is as likely to be heard first.");
  arguments_assert(arguments, 1);
  let download = app_original_bible_gloss_generate_download;
  let start = integer_random(0, 11);
  let cycling = gloss_word_sound_url_cycling_generic(
    bible_word_voices,
    start,
    bible_word_sound_voice_url,
    bible_word_sound_voice_slow_url,
  );
  let sound_url_get = property_get(cycling, "sound");
  let slow_url_get = property_get(cycling, "slow");
  await app_shared_gloss_bible_home_generic(
    context,
    download,
    false,
    app_original_bible,
    sound_url_get,
    slow_url_get,
  );
}
