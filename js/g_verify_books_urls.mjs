import { g_verify_loop_check } from "./g_verify_loop_check.mjs";
import { property_get } from "./property_get.mjs";
import { server_port } from "./server_port.mjs";
import { list_map } from "./list_map.mjs";
export async function g_verify_books_urls() {
  "The approve-your-lines link for each book the sermon loop currently has in flight, as text. Points at the LOCAL DEV server, not prod: the approval app reads and writes through /api, which only the dev server serves — the prod firebase host 404s every /api call, so its g_verify shows an empty 'no verses written yet'. Seeing which passages are waiting is a different want from being taken to them, and only the second one is worth a window appearing on somebody's screen — so the list is its own answer, and the opener is a thin thing on top of it.";
  let state = await g_verify_loop_check();
  let books = property_get(state, "books");
  let base =
    "http://localhost:" + server_port() + "/love/public/dev/g_verify.html";
  function book_url(book) {
    let chapter = property_get(book, "chapter");
    let url = g_verify_chapter_url(base, chapter);
    return url;
  }
  let urls = list_map(books, book_url);
  return urls;
}
