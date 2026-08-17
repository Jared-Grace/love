import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { api_read } from "./api_read.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { g_chapter_code_next } from "./g_chapter_code_next.mjs";
import { list_includes } from "./list_includes.mjs";
import { g_verify_chapter_url } from "./g_verify_chapter_url.mjs";
import { json_to } from "./json_to.mjs";
import { app_g_verify_home_editing_now } from "./app_g_verify_home_editing_now.mjs";
import { not } from "./not.mjs";
export async function app_g_verify_home_refresh(
  poll,
  chapter_code,
  chapter_advance_armed,
  shown_json,
  render,
) {
  arguments_assert(arguments, 5);
  if (document.hidden) {
    poll();
    return;
  }
  try {
    let f_name = fn_name("g_sermon_write_read");
    let fresh_chapter = await api_read(f_name, [chapter_code]);
    let f_name6 = fn_name("g_verify_status_read");
    let fresh_status = await api_read(f_name6, [chapter_code]);
    let f_name7 = fn_name("g_verify_chapter_next");
    let fresh_state = await api_read(f_name7, [chapter_code]);
    if (chapter_advance_armed) {
      let latest_key = property_get(fresh_state, "latest");
      let left = property_get(fresh_state, "action");
      let left3 = property_get(fresh_state, "approved");
      let fully_approved =
        equal(left, "done") &&
        not_equal(latest_key, null) &&
        equal(left3, latest_key);
      if (fully_approved) {
        let next_chapter = g_chapter_code_next(chapter_code);
        let f_name8 = fn_name("g_verify_chapters_available");
        let object = await api_read(f_name8, []);
        let codes = property_get(object, "chapters");
        if (list_includes(codes, next_chapter)) {
          location.href = g_verify_chapter_url(location.pathname, next_chapter);
          return;
        }
      }
    }
    let fresh_json = json_to({
      chapter: fresh_chapter,
      status: fresh_status,
      chapter_state: fresh_state,
    });
    let b = app_g_verify_home_editing_now(document);
    if (not_equal(fresh_json, shown_json) && not(b)) {
      render(fresh_chapter, fresh_status, fresh_state);
    }
  } catch (ignore) {
    ignore;
  }
  poll();
}
