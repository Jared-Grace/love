import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapter_word_forms_first } from "./bible_interlinear_chapter_word_forms_first.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { google_text_to_speech_voice_gemini_model } from "./google_text_to_speech_voice_gemini_model.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
import { sleep } from "./sleep.mjs";
export async function bible_word_voice_trial_gemini_pro_write() {
  "Records the five Genesis 1 words the listener liked least in the four voices chosen by description, spoken by Gemini's Pro speech model, and sets the Flash recording of each beside it, so the trial screen plays the two models side by side.";
  "★ ONLY THE WORDS WITH THE FEWEST VOTES are recorded, because a word every voice already said well cannot show Pro doing better. Row 2 had one vote; rows 1, 14, 15 and 21 tied at two, and all four are kept rather than one dropped by a rule that would not mean anything.";
  "★ THE FLASH RECORDING IS COPIED RATHER THAN MADE AGAIN, because it is the very clip the listener already judged, and a new request could come back said differently.";
  "★ EVERY VOICE IS GIVEN ONLY THE LETTERS, as the Flash round was, so any difference heard is the model's.";
  "A word already recorded is skipped and each request waits seven seconds, because Gemini voices are limited per minute per project.";
  "It writes under gitignore because these are for one listener to hear on this machine, not for the app.";
  arguments_assert(arguments, 0);
  let indices = [0, 1, 13, 14, 20];
  let voice_names = ["Sadaltager", "Schedar", "Sulafat", "Gacrux"];
  let folder = "gitignore/bible_word_voice_trial/";
  let words = await bible_interlinear_chapter_word_forms_first("GEN01", 25);
  let written = [];
  for (let index of indices) {
    let w = words[index];
    for (let voice_name of voice_names) {
      let flash_to =
        folder + "gem_pro/" + index + "_" + voice_name + "_flash.mp3";
      let b = await file_exists(flash_to);
      if (not(b)) {
        let flash_from =
          folder + "gem_described/" + index + "_" + voice_name + ".mp3";
        await file_copy_overwrite(flash_from, flash_to);
      }
      let pro_to = folder + "gem_pro/" + index + "_" + voice_name + "_pro.mp3";
      if (await file_exists(pro_to)) {
        continue;
      }
      let voice = google_text_to_speech_voice_gemini_model(
        "he-IL",
        voice_name,
        "gemini-2.5-pro-tts",
      );
      let audio = await google_text_to_speech_voice_audio(voice, {
        text: w.text,
      });
      await file_overwrite_buffer(pro_to, audio);
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
