import { list_map_async } from "./list_map_async.mjs";
import { g_sermon_generate_download_book } from "./g_sermon_generate_download_book.mjs";
import { g_sermon_edited_save } from "./g_sermon_edited_save.mjs";
export async function g_sermon_generate_download_book_save(book_code) {
  let sermons = await g_sermon_generate_download_book(book_code);
  let paths = await list_map_async(sermons, g_sermon_edited_save);
  return paths;
}
