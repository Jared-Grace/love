import { bible_word_voice_trial_phoneme_tried } from "./bible_word_voice_trial_phoneme_tried.mjs";
import { google_text_to_speech_voice_audio } from "./google_text_to_speech_voice_audio.mjs";
import { file_overwrite_buffer } from "./file_overwrite_buffer.mjs";
export async function bible_word_voice_trial_phoneme_write() {
  "Records every try in the phoneme trial with the voice named for it and files each one where the voice trial screen plays it from.";
  "It writes under gitignore because these are for one listener to hear once on this machine, not for the app.";
  let written = [];
  for (let [key, voice, input] of bible_word_voice_trial_phoneme_tried()) {
    let audio = await google_text_to_speech_voice_audio(voice, input);
    let file_path = "gitignore/bible_word_voice_trial/phoneme/" + key + ".mp3";
    await file_overwrite_buffer(file_path, audio);
    written.push({
      key,
      voice_name: voice.name,
      bytes: audio.length,
    });
  }
  return written;
}
