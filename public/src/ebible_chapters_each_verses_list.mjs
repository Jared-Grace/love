import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function ebible_chapters_each_verses_list(
  list,
  bible_folder,
  each_chapter,
) {
  await each_async(list, lambda);
  async function lambda(chapter_code) {
    if (bible_folder === "hausa" && chapter_code === "DAN14") {
      return;
    }
    if (false) {
    }
    log_keep(chapter_code);
    let verses = await ebible_verses(bible_folder, chapter_code);
    await each_chapter(chapter_code, verses);
  }
}
