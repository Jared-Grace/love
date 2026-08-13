import { property_get } from "./property_get.mjs";
import { bible_interlinear_verses } from "./bible_interlinear_verses.mjs";
import { each_async } from "./each_async.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { ebible_firebase_upload_verse } from "./ebible_firebase_upload_verse.mjs";
export async function bible_interlinear_verses_upload() {
  "The text is read fresh rather than from the kept copy. This publishes scripture, so a copy made under an older reading of which words belong to the public-domain base would be published as the text itself - which has happened, with a copy eight months old. The reading costs one walk of the table on a run that then uploads every verse in the bible, so it is bought for almost nothing.";
  let r = await bible_interlinear_verses();
  let chapters = property_get(r, "chapters");
  let bible_folder = property_get(r, "bible_folder");
  async function lambda2({ chapter_code, verses }) {
    async function lambda5(verse) {
      await ebible_firebase_upload_verse(verse, chapter_code, bible_folder);
    }
    await list_map_unordered_async(verses, lambda5);
  }
  await each_async(chapters, lambda2);
}
