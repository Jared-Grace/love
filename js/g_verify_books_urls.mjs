import { g_verify_loop_check } from "./g_verify_loop_check.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_prod_asset_url } from "./firebase_prod_asset_url.mjs";
import { list_map } from "./list_map.mjs";
export async function g_verify_books_urls() {
  "The approve-your-lines link for each book the sermon loop currently has in flight, as text. Seeing which passages are waiting is a different want from being taken to them, and only the second one is worth a window appearing on somebody's screen — so the list is its own answer, and the opener is a thin thing on top of it.";
  let state = await g_verify_loop_check();
  let books = property_get(state, "books");
  let base = firebase_prod_asset_url("g_verify.html");
  function book_url(book) {
    let chapter = property_get(book, "chapter");
    let url = base + "?chapter=" + chapter;
    return url;
  }
  let urls = list_map(books, book_url);
  return urls;
}
