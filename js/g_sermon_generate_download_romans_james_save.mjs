import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { g_sermon_edited_book_codes } from "./g_sermon_edited_book_codes.mjs";
import { g_sermon_generate_download_book_save } from "./g_sermon_generate_download_book_save.mjs";
export async function g_sermon_generate_download_romans_james_save() {
  let book_codes = g_sermon_edited_book_codes();
  let books_paths = await list_map_async(
    book_codes,
    g_sermon_generate_download_book_save,
  );
  let paths = list_concat_multiple(books_paths);
  return paths;
}
