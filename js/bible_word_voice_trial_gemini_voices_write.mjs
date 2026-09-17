import { bible_interlinear_chapter_word_forms_first } from "./bible_interlinear_chapter_word_forms_first.mjs";
import { file_exists } from "./file_exists.mjs";
import { google_text_to_speech_voice_gemini } from "./google_text_to_speech_voice_gemini.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_trial_gemini_voices_write() {
  "Records the first 25 different words of Genesis 1 in two male and two female Gemini voices, each given only the Hebrew letters, and files each where the voice trial screen plays it from.";
  "★ EVERY VOICE IS GIVEN ONLY THE LETTERS, because across six readings in one voice the plain letters were right on all 25 words apart from modern v for waw, while asking for Biblical pronunciation fixed two words, made one worse, and still said v. Holding the reading fixed means any difference heard is the voice's.";
  "★ TWO MEN AND TWO WOMEN, because the listener wants each word heard in both, and the voice list marks Charon and Puck as male and Kore and Aoede as female.";
  "★ A WORD ALREADY RECORDED IS SKIPPED AND EACH REQUEST WAITS SEVEN SECONDS, because Gemini voices are limited per minute per project; skipping lets a stopped run carry on where it stopped.";
  "It writes under gitignore because these are for one listener to hear on this machine, not for the app.";
  let voice_names = ["Charon", "Puck", "Kore", "Aoede"];
  let words = await bible_interlinear_chapter_word_forms_first("GEN01", 25);
  let written = [];
  for (let [index, w] of words.entries()) {
    for (let voice_name of voice_names) {
      let file_path =
        "gitignore/bible_word_voice_trial/gem_voices/" +
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
