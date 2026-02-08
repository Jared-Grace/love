import { ebible_chapters_codes_to_verses } from "../../../love/public/src/ebible_chapters_codes_to_verses.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function g_sermon_generate_book_generic_verses(
  book_code,
  chapter_code_specified,
  bible_folders,
) {
  async function map_folder(bible_folder) {
    let verses_book = await ebible_chapters_codes_to_verses(
      bible_folder,
      chapters_codes,
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
