import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { ebible_chapters } from "../../../love/public/src/ebible_chapters.mjs";
export async function g_sermon_generate_book_generic_verses(
  book_code,
  chapter_code_specified,
  bible_folders,
) {
  async function lambda3(bible_folder) {
    let chapters = await ebible_chapters(bible_folder, book_code);
    if (null_not_is(chapter_code_specified)) {
      chapters = [chapter_code_specified];
    }
    async function lambda7(chapter_code) {
      let verses = await ebible_verses(bible_folder, chapter_code);
      function lambda8(v) {
        object_merge(v, {
          chapter_code,
        });
      }
      each(verses, lambda8);
      return verses;
    }
    let verses_book = await list_map_unordered_async(chapters, lambda7);
    let v5 = {
      verses_book,
      chapters,
    };
    return v5;
  }
  let r = await list_map_unordered_async(bible_folders, lambda3);
  return r;
}
