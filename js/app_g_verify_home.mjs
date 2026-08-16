import { app_g_verify_home_header } from "./app_g_verify_home_header.mjs";
import { app_g_verify_home_busy_banner } from "./app_g_verify_home_busy_banner.mjs";
import { app_g_verify_home_highlight_selected } from "./app_g_verify_home_highlight_selected.mjs";
import { app_g_verify_home_editing_now } from "./app_g_verify_home_editing_now.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { html_query_property_get } from "./html_query_property_get.mjs";
import { g_verify_chapter_url } from "./g_verify_chapter_url.mjs";
import { g_verify_chapter_query_key } from "./g_verify_chapter_query_key.mjs";
import { g_verify_chapter_storage_key } from "./g_verify_chapter_storage_key.mjs";
import { app_g_verify_waiting_font_size } from "./app_g_verify_waiting_font_size.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { api_read } from "./api_read.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_loading } from "./html_loading.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_g_verify_view } from "./app_g_verify_view.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_g_verify_column_max_width } from "./app_g_verify_column_max_width.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { g_verify_book_name } from "./g_verify_book_name.mjs";
import { g_chapter_code_next } from "./g_chapter_code_next.mjs";
import { html_scroll_generic } from "./html_scroll_generic.mjs";
export async function app_g_verify_home(context) {
  let root = html_clear_context(context);
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
  let chapter_codes = null;
  let view = null;
  async function initial_load() {
    try {
      let f_name = fn_name("g_sermon_write_read");
      chapter = await api_read(f_name, [chapter_code]);
    } catch (missing) {
      chapter = {
        chapter_code,
        passages: [],
      };
    }
    try {
      let f_name2 = fn_name("g_verify_status_read");
      status = await api_read(f_name2, [chapter_code]);
    } catch (missing) {
      status = {
        busy: false,
        verse: "",
        note: "",
      };
    }
    try {
      let f_name3 = fn_name("g_verify_chapter_next");
      chapter_state = await api_read(f_name3, [chapter_code]);
    } catch (missing) {
      chapter_state = {
        approved: "",
        latest: null,
        next: null,
        action: "wait",
      };
    }
    try {
      let f_name4 = fn_name("g_verify_chapters_available");
      let object = await api_read(f_name4, []);
      chapter_codes = property_get(object, "chapters");
    } catch (missing) {
      chapter_codes = [];
    }
  }
  await html_loading(initial_load);
  let b2 = list_includes(chapter_codes, chapter_code);
  if (not(b2)) {
    chapter_codes = chapter_codes.concat([chapter_code]).sort();
  }
  render(chapter, status, chapter_state);
  ("on page load/refresh scroll the passage to the top of the viewport, past the chapter-grid, title and hint — the reviewer wants to read the passage immediately. Only here (the one-time initial render), NOT on the 4s poll re-renders, which would yank the page mid-read");
  await html_scroll_generic(view, "auto", "start");
  poll();
  function on_visible() {
    if (not(document.hidden)) {
      refresh();
    }
  }
  document.addEventListener("visibilitychange", on_visible);
  function render(chapter_shown, status_shown, chapter_state_shown) {
    shown_json = json_to({
      chapter: chapter_shown,
      status: status_shown,
      chapter_state: chapter_state_shown,
    });
    html_clear(root);
    let passages = property_get(chapter_shown, "passages");
    function lambda(a, b) {
      let na = Number(property_get(a, "verse_numbers")[0]);
      let nb = Number(property_get(b, "verse_numbers")[0]);
      let difference = subtract(na, nb);
      return difference;
    }
    passages = passages.slice().sort(lambda);
    let busy = property_get(status_shown, "busy");
    let status_verse = property_get(status_shown, "verse");
    function lambda2(p) {
      let key2 = g_sermon_passage_verses_key(p);
      return key2;
    }
    let real_keys = passages.map(lambda2);
    let approved_key = property_get(chapter_state_shown, "approved");
    let approved_index = real_keys.indexOf(approved_key);
    let pending = null;
    let b3 = list_includes(real_keys, status_verse);
    if (busy && not(b3)) {
      pending = status_verse;
    }
    let wrap = html_div(root);
    let style_value = app_g_verify_column_max_width();
    html_style_set(wrap, "max-width", style_value);
    html_style_margin(wrap, "0 auto");
    let edge_gap = app_shared_content_edge_gap();
    html_style_padding_x(wrap, edge_gap);
    html_style_padding_y(wrap, "2em");
    app_g_verify_home_header(wrap, chapter_codes, chapter_code);
    app_g_verify_home_busy_banner(busy, status_shown, status_verse, wrap);
    view = null;
    let verse_buttons = {};
    async function on_approved(v) {
      chapter_advance_armed = true;
      refresh();
    }
    async function open_passage(passage) {
      selected_key = g_sermon_passage_verses_key(passage);
      sessionStorage.setItem(storage_key, selected_key);
      app_g_verify_home_highlight_selected(selected_key, verse_buttons);
      let scripture = property_get(passage, "scripture");
      let lines = property_get(passage, "lines");
      await app_g_verify_view(
        view,
        scripture,
        lines,
        chapter_code,
        selected_key,
        on_approved,
      );
    }
    function open_pending(verse) {
      selected_key = verse;
      sessionStorage.setItem(storage_key, verse);
      app_g_verify_home_highlight_selected(selected_key, verse_buttons);
      html_clear(view);
      let msg = html_p_text(view, "Claude is writing v" + verse + "…");
      app_shared_text_deemphasized(msg);
      let value = app_g_verify_waiting_font_size();
      html_style_font_size(msg, value);
      html_style_margin_top(msg, "1em");
    }
    let bar = html_div_centered(wrap);
    let value4 = app_shared_spaced_small_gap();
    html_style_margin_top(bar, value4);
    function lambda10(passage) {
      let key = g_sermon_passage_verses_key(passage);
      let a2 = real_keys.indexOf(key);
      let is_approved =
        greater_than_equal(approved_index, 0) &&
        less_than_equal(a2, approved_index);
      let label = is_approved ? "v" + key + " ✓" : "v" + key;
      function lambda9() {
        open_passage(passage);
      }
      verse_buttons[key] = app_shared_button(bar, label, lambda9);
    }
    passages.forEach(lambda10);
    if (not_equal(pending, null)) {
      function lambda11() {
        open_pending(pending);
      }
      let pb = app_shared_button(bar, "v" + pending, lambda11);
      html_style_opacity(pb, "0.5");
      verse_buttons[pending] = pb;
    }
    view = html_div(wrap);
    if (equal(passages.length, 0)) {
      if (not_equal(pending, null)) {
        open_pending(pending);
      } else {
        let empty = html_p_text(
          view,
          "No verses written yet for this chapter.",
        );
        app_shared_text_deemphasized(empty);
        html_style_margin_top(empty, "1em");
      }
      return;
    }
    let latest = property_get(chapter_state_shown, "latest");
    if (
      not_equal(latest, null) &&
      not_equal(latest, approved_key) &&
      not_equal(latest, advanced_for)
    ) {
      selected_key = latest;
      sessionStorage.setItem(storage_key, latest);
      advanced_for = latest;
    }
    let initial = null;
    function lambda12(passage) {
      let left = g_sermon_passage_verses_key(passage);
      if (equal(left, selected_key)) {
        initial = passage;
      }
    }
    passages.forEach(lambda12);
    if (not_equal(initial, null)) {
      open_passage(initial);
    } else if (not_equal(pending, null) && equal(selected_key, pending)) {
      open_pending(pending);
    } else {
      let first = list_first(passages);
      open_passage(first);
    }
  }
  function poll() {
    clearTimeout(poll_timer);
    poll_timer = setTimeout(refresh, 4000);
  }
  ("do NOT re-render while the reviewer is typing in the suggest box — a poll that lands mid-edit would rebuild the textarea and wipe their in-progress draft. Defer: shown_json is left stale, so the next poll after they click away or submit renders the fresh lines");
  async function refresh() {
    if (document.hidden) {
      poll();
      return;
    }
    try {
      let f_name5 = fn_name("g_sermon_write_read");
      let fresh_chapter = await api_read(f_name5, [chapter_code]);
      let f_name6 = fn_name("g_verify_status_read");
      let fresh_status = await api_read(f_name6, [chapter_code]);
      let f_name7 = fn_name("g_verify_chapter_next");
      let fresh_state = await api_read(f_name7, [chapter_code]);
      if (chapter_advance_armed) {
        let latest_key = property_get(fresh_state, "latest");
        let left2 = property_get(fresh_state, "action");
        let left3 = property_get(fresh_state, "approved");
        let fully_approved =
          equal(left2, "done") &&
          not_equal(latest_key, null) &&
          equal(left3, latest_key);
        if (fully_approved) {
          let next_chapter = g_chapter_code_next(chapter_code);
          let f_name8 = fn_name("g_verify_chapters_available");
          let object2 = await api_read(f_name8, []);
          let codes = property_get(object2, "chapters");
          if (list_includes(codes, next_chapter)) {
            location.href = g_verify_chapter_url(
              location.pathname,
              next_chapter,
            );
            return;
          }
        }
      }
      let fresh_json = json_to({
        chapter: fresh_chapter,
        status: fresh_status,
        chapter_state: fresh_state,
      });
      let b4 = app_g_verify_home_editing_now(document);
      if (not_equal(fresh_json, shown_json) && not(b4)) {
        render(fresh_chapter, fresh_status, fresh_state);
      }
    } catch (ignore) {
      ignore;
    }
    poll();
  }
}
