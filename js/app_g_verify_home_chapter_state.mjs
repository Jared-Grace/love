import { arguments_assert } from "./arguments_assert.mjs";
import { g_verify_chapter_query_key } from "./g_verify_chapter_query_key.mjs";
import { g_verify_chapter_storage_key } from "./g_verify_chapter_storage_key.mjs";
import { html_query_property_get } from "./html_query_property_get.mjs";
import { g_verify_book_name } from "./g_verify_book_name.mjs";
export function app_g_verify_home_chapter_state() {
  arguments_assert(arguments, 0);
  let v6 = g_verify_chapter_query_key();
  let v7 = g_verify_chapter_storage_key();
  let chapter_code =
    html_query_property_get(v6) || localStorage.getItem(v7) || "1JN01";
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
  return {
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
}
