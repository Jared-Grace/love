import { property_get } from "./property_get.mjs";
import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
import { firebase_storage_exists } from "./firebase_storage_exists.mjs";
import { retry_standard } from "./retry_standard.mjs";
import { bible_interlinear_verses_cache } from "./bible_interlinear_verses_cache.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { each_async } from "./each_async.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
export async function bible_interlinear_chapters_upload() {
  ("publish the original-language text one file per chapter, in the exact compressed shape every other version uses, so the reader fetches `bible/original/<chapter>.json` the same way it fetches any translation. Resumable: a chapter already in storage is skipped and each upload is retried, so a dropped connection mid-run only costs the current handful and re-running finishes the rest");
  let cache = await bible_interlinear_verses_cache();
  let bible_folder = property_get(cache, "bible_folder");
  let chapters = property_get(cache, "chapters");
  let chunks = list_chunk(chapters, 20);
  async function lambda_chunk(chunk) {
    async function upload_one(value) {
      object_merge_set(value, {
        bible_folder,
      });
      let chapter_code = property_get(value, "chapter_code");
      let destination = ebible_firebase_upload_path(bible_folder, chapter_code);
      let exists = await firebase_storage_exists(destination);
      if (exists) {
        return;
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
