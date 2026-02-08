import { ebible_chapters_codes_or_specified } from "../../../love/public/src/ebible_chapters_codes_or_specified.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function g_sermon_generate_book_generic_verses(
  book_code,
  chapter_code_specified,
  bible_folders,
) {
  async function map_folder(bible_folder) {
    let chapters_codes = await ebible_chapters_codes_or_specified(
      bible_folder,
      book_code,
      chapter_code_specified,
    );
    async function map_chapter(chapter_code) {
      let verses = await ebible_verses(bible_folder, chapter_code);
      function each_verse(v) {
        object_merge(v, {
          chapter_code,
        });
      }
      each(verses, each_verse);
      return verses;
    }
    let verses_book = await list_map_unordered_async(
      chapters_codes,
      map_chapter,
    );
    let v5 = {
      verses_book,
      chapters: chapters_codes,
    };
    return v5;
  }
  let r = await list_map_unordered_async(bible_folders, map_folder);
  return r;
}
