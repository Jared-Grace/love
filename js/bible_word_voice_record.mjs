import { bible_word_voice_record_local } from "./bible_word_voice_record_local.mjs";
import { not } from "./not.mjs";
import { bible_word_voice_path } from "./bible_word_voice_path.mjs";
import { web_assets_upload } from "./web_assets_upload.mjs";
export async function bible_word_voice_record(voice_name, text) {
  "$plain voice_name";
  "$plain text";
  "Records one Bible word said by one voice into the assets folder, and says whether it had to be recorded.";
  "Every clip it records is sent up to storage in the same breath, because a clip nobody can fetch is not a recording of anything.";
  "A WORD ALREADY ON DISK IS LEFT ALONE, because the file is named after the word itself, so the recording is asked for once and never paid for again - which is what lets a run be stopped and started again without cost.";
  let made = await bible_word_voice_record_local(voice_name, text);
  if (not(made)) {
    return false;
  }
  let path = bible_word_voice_path(voice_name, text);
  await web_assets_upload(path);
  return true;
}
