import { ebible_chapters_codes_to_verses } from "../../../love/public/src/ebible_chapters_codes_to_verses.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function g_sermon_generate_book_generic_verses(
  chapters_codes,
  bible_folders,
) {
  async function map_folder(bible_folder) {
    let verses_book = await ebible_chapters_codes_to_verses(
      bible_folder,
      chapters_codes,
    );
    return verses_book;
  }
  let r = await list_map_unordered_async(bible_folders, map_folder);
  return r;
}
