import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_object_async } from "../../../love/public/src/each_object_async.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
import { bible_interlinear_chapters } from "../../../love/public/src/bible_interlinear_chapters.mjs";
export async function bible_interlinear_verses() {
  let chapters_i = await bible_interlinear_chapters();
  let bible_folder = bible_interlinear_verses_upload_folder();
  async function lambda(la) {
    async function lambda6(verses, chapter_code) {
      la({
        chapter_code,
        verses,
      });
    }
    await each_object_async(chapters_i, lambda6);
  }
  let chapters = await list_adder_async(lambda);
  let v = {
    bible_folder,
    chapters,
  };
  return v;
}
