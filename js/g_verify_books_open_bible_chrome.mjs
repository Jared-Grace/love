import { g_verify_loop_check_line } from "./g_verify_loop_check_line.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_prod_asset_url } from "./firebase_prod_asset_url.mjs";
export async function g_verify_books_open_bible_chrome() {
  "Open each active sermon-loop book's CURRENT verse (the latest-written one, awaiting approval) in its own tab, all in ONE new Chrome window. Reads the live loop state, deep-links the PROD bible app per book (bible.html#c=<chapter code>,v=<verse> — the hash pairs are COMMA-separated), and spawns google-chrome --new-window with every URL. A one-command review shortcut to eyeball all in-flight passages at once.";
  let state = await g_verify_loop_check_line();
  let books = property_get(state, "books");
  let base = firebase_prod_asset_url("bible.html");
  function lambda(book) {
    let chapter = property_get(book, "chapter");
    let verse = property_get(book, "latest");
    let url = base + "#c=" + chapter + ",v=" + verse;
    return url;
  }
  let urls = books.map(lambda);
  let flags = ["--new-window"];
  let args = flags.concat(urls);
  let module = await import("child_process");
  let spawn = property_get(module, "spawn");
  let child = spawn("google-chrome", args, {
    detached: true,
    stdio: "ignore",
  });
  child.unref();
  let r = {
    opened: urls,
  };
  return r;
}
