import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { g_sermon_generate_download } from "./g_sermon_generate_download.mjs";
export async function g_sermon_generate_download_book(book_code) {
  let bible_folder = ebible_folder_english();
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  let sermons = await list_map_async(chapter_codes, g_sermon_generate_download);
  return sermons;
}
