import { bible_interlinear_verses_cache } from "../../../love/public/src/bible_interlinear_verses_cache.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { ebible_firebase_upload_verse } from "../../../love/public/src/ebible_firebase_upload_verse.mjs";
export async function bible_interlinear_verses_upload() {
  let { bible_folder, chapters } = await bible_interlinear_verses_cache();
  async function lambda2({ chapter_code, verses }) {
    async function lambda5(verse) {
      await ebible_firebase_upload_verse(verse, chapter_code, bible_folder);
    }
    let waited = await list_map_unordered_async(verses, lambda5);
  }
  await each_async(chapters, lambda2);
}
