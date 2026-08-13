import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { bible_interlinear_verses } from "./bible_interlinear_verses.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
export async function bible_interlinear_chapters_upload_generic(
  existing_skip_is,
) {
  "publish the original-language text one file per chapter, in the exact compressed shape every other version uses, so the reader fetches `bible/original/<chapter>.json` the same way it fetches any translation.";
  "$plain existing_skip_is";
  "it is a yes-or-no answer and nothing else: yes leaves a chapter already in storage exactly as it is, no writes over it. Resumability and correction want opposite answers, which is the whole reason it is asked rather than decided here. Yes is the ordinary run - a dropped connection mid-run then only costs the current handful, and re-running finishes the rest. No is for the day the published text itself is wrong, when skipping what is already there would step over every file that needs fixing and report success.";
  "The text is read fresh rather than from the kept copy. Answering no to the question above is the day the published text is wrong and every file is being rewritten to fix it - which is exactly the day a kept copy would hand back the wrong text again and report the correction done.";
  let interlinear = await bible_interlinear_verses();
  let property_name = bible_folder_key();
  let bible_folder = property_get(interlinear, property_name);
  let chapters = property_get(interlinear, "chapters");
  let chunks = list_chunk(chapters, 20);
  async function lambda_chunk(chunk) {
    async function upload_one(value) {
      object_merge_set(value, {
        bible_folder,
      });
      let chapter_code = property_get(value, "chapter_code");
      let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
      if (existing_skip_is) {
        let exists = await firebase_storage_exists(destination);
        if (exists) {
          return;
        }
      }
      async function attempt() {
        await firebase_upload_object_compressed(destination, value);
      }
      await retry_standard(attempt);
    }
    await each_unordered_async(chunk, upload_one);
  }
  await each_async(chunks, lambda_chunk);
  return chapters;
}
