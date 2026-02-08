import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { ebible_verses } from "../../../love/public/src/ebible_verses.mjs";
export async function ebible_chapters_codes_to_verses(
  bible_folder,
  chapters_codes,
) {
  async function map_chapter_code(chapter_code) {
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
    map_chapter_code,
  );
  return verses_book;
}
