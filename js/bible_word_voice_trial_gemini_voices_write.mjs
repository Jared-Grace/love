import { text_split_comma } from "./text_split_comma.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapter_word_forms_first } from "./bible_interlinear_chapter_word_forms_first.mjs";
import { file_exists } from "./file_exists.mjs";
import { google_text_to_speech_voice_gemini } from "./google_text_to_speech_voice_gemini.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_trial_gemini_voices_write(
  key,
  voice_names_comma,
) {
  "Records the first 25 different words of Genesis 1 in each Gemini voice named, each given only the Hebrew letters, and files each where the voice trial screen plays it from.";
  "★ EVERY VOICE IS GIVEN ONLY THE LETTERS, because across six readings in one voice the plain letters were right on all 25 words apart from modern v for waw, while asking for Biblical pronunciation fixed two words, made one worse, and still said v. Holding the reading fixed means any difference heard is the voice's.";
  "★ THE LISTENER WANTS EACH WORD IN TWO MEN AND TWO WOMEN, so a set names two voices Google marks male and two it marks female.";
  "★ A WORD ALREADY RECORDED IS SKIPPED AND EACH REQUEST WAITS SEVEN SECONDS, because Gemini voices are limited per minute per project; skipping lets a stopped run carry on where it stopped.";
  "It writes under gitignore because these are for one listener to hear on this machine, not for the app.";
  "★ THE SET AND ITS VOICES ARE GIVEN, because the listener chooses voices by name after hearing earlier ones, and each choice is its own set on the trial screen so its picks are not mixed with an earlier set's.";
  arguments_assert(arguments, 2);
  let voice_names = text_split_comma(voice_names_comma);
  let words = await bible_interlinear_chapter_word_forms_first("GEN01", 25);
  let written = [];
  for (let [index, w] of words.entries()) {
    for (let voice_name of voice_names) {
      let file_path =
        "gitignore/bible_word_voice_trial/" +
        key +
        "/" +
        index +
        "_" +
        voice_name +
        ".mp3";
      if (await file_exists(file_path)) {
        continue;
      }
      let voice = google_text_to_speech_voice_gemini("he-IL", voice_name);
      let audio = await google_text_to_speech_voice_audio(voice, {
        text: w.text,
      });
      await file_overwrite_buffer(file_path, audio);
      await sleep(7000);
      written.push({
        index,
        voice_name,
        bytes: audio.length,
      });
    }
  }
  return written;
}
