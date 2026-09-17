import { bible_word_voice_name } from "./bible_word_voice_name.mjs";
import { bible_word_voice_trial_phoneme_tried } from "./bible_word_voice_trial_phoneme_tried.mjs";
import { google_text_to_speech_audio } from "./google_text_to_speech_audio.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function bible_word_voice_trial_phoneme_write() {
  "Records every try in the phoneme trial with the Hebrew voice and files each one where the voice trial screen plays it from.";
  "It writes under gitignore because these are for one listener to hear once on this machine, not for the app.";
  let voice_name = bible_word_voice_name("שָׁלוֹם");
  let written = [];
  for (let [key, input] of bible_word_voice_trial_phoneme_tried()) {
    let audio = await google_text_to_speech_audio(voice_name, input);
    let file_path = "gitignore/bible_word_voice_trial/phoneme/" + key + ".mp3";
    await file_overwrite_buffer(file_path, audio);
    written.push({
      key,
      bytes: audio.length,
    });
  }
  return written;
}
