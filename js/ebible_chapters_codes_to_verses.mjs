import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { each } from "./each.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { ebible_verses } from "./ebible_verses.mjs";
export async function ebible_chapters_codes_to_verses(
  bible_folder,
  chapters_codes,
) {
  async function map_chapter_code(chapter_code) {
    let verses = await ebible_verses(bible_folder, chapter_code);
    function each_verse(v) {
      object_merge_set(v, {
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
