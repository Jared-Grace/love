import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { g_sermon_generate_download_book } from "./g_sermon_generate_download_book.mjs";
import { g_sermon_edited_book_codes } from "./g_sermon_edited_book_codes.mjs";
export async function g_sermon_generate_download_romans_james() {
  let book_codes = g_sermon_edited_book_codes();
  let books_sermons = await list_map_async(
    book_codes,
    g_sermon_generate_download_book,
  );
  let sermons = list_concat_multiple(books_sermons);
  return sermons;
}
