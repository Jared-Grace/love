import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { bible_word_speech_text } from "./bible_word_speech_text.mjs";
import { google_text_to_speech_file } from "./google_text_to_speech_file.mjs";
export async function bible_word_voice_record(voice_name, text) {
  "$plain voice_name";
  "$plain text";
  "Records one Bible word said by one voice into the assets folder, and says whether it had to be recorded.";
  "A WORD ALREADY ON DISK IS LEFT ALONE, because the file is named after the word itself, so the recording is asked for once and never paid for again - which is what lets a run be stopped and started again without cost.";
  let path = bible_word_voice_path(voice_name, text);
  let file_path = web_assets_folder_join(path);
  let exists = await file_exists(file_path);
  if (exists) {
    return false;
  }
  let spoken = bible_word_speech_text(voice_name, text);
  await google_text_to_speech_file(voice_name, spoken, file_path);
  return true;
}
