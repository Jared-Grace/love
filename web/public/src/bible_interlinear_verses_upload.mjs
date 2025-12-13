import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { bible_interlinear_chapters } from "../../../love/public/src/bible_interlinear_chapters.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { ebible_firebase_upload_verse } from "../../../love/public/src/ebible_firebase_upload_verse.mjs";
export async function bible_interlinear_verses_upload() {
  let chapters = await bible_interlinear_chapters();
  let bible_folder = bible_interlinear_verses_upload_folder();
  async function lambda(la) {
    async function lambda6(verses, chapter_code) {
      async function lambda5(verse) {
        await ebible_firebase_upload_verse(verse, chapter_code, bible_folder);
      }
      let waited = await list_map_unordered_async(verses, lambda5);
    }
    await each_object_async(chapters, lambda6);
  }
  let list = await list_adder_async(lambda);
}
