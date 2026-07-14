import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { g_sermon_generate_download_book } from "./g_sermon_generate_download_book.mjs";
export async function g_sermon_generate_download_romans_james() {
  let book_codes = ["ROM", "JAS"];
  let books_sermons = await list_map_async(
    book_codes,
    g_sermon_generate_download_book,
  );
  let sermons = list_concat_multiple(books_sermons);
  return sermons;
}
