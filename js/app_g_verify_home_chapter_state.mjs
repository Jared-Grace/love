import { arguments_assert } from "./arguments_assert.mjs";
import { g_verify_chapter_storage_key } from "./g_verify_chapter_storage_key.mjs";
import { g_verify_chapter_asked } from "./g_verify_chapter_asked.mjs";
import { property_get } from "./property_get.mjs";
import { g_verify_book_name } from "./g_verify_book_name.mjs";
export function app_g_verify_home_chapter_state() {
  arguments_assert(arguments, 0);
  ("a chapter the link names but this bible could not have is treated as not asked for at all, so the page falls back the way it does for a link that says nothing; opened as written, three wrong letters became a title nobody could read and a fetch for a chapter that cannot exist, and the reader was left looking at a blank page with no idea their own address was the problem");
  ("what became of the word is told above the passage rather than here, because this is where the chapter is decided and there is nothing on screen yet to say it to");
  let r2 = g_verify_chapter_asked();
  let usable = property_get(r2, "usable");
  let asked = property_get(r2, "asked");
  let opened = usable ? asked : null;
  let v = g_verify_chapter_storage_key();
  let chapter_code = opened || localStorage.getItem(v) || "1JN01";
  let book_code = chapter_code.slice(0, 3);
  let v2 = chapter_code.slice(3);
  let v3 = Number(v2);
  document.title = g_verify_book_name(book_code) + " " + String(v3);
  let storage_key = "g_verify_selected_" + chapter_code;
  ("which verse you are looking at is this tab's, so two chapters can be open side by side; the chapter override above stays shared on purpose");
  let selected_key = sessionStorage.getItem(storage_key);
  let advanced_for = null;
  let chapter_advance_armed = false;
  let shown_json = null;
  let poll_timer = null;
  let chapter = null;
  let status = null;
  let chapter_state = null;
  let r = {
    chapter_code,
    storage_key,
    selected_key,
    advanced_for,
    chapter_advance_armed,
    shown_json,
    poll_timer,
    chapter,
    status,
    chapter_state,
  };
  return r;
}
