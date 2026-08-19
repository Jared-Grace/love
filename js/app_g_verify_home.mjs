import { app_g_verify_home_chapter } from "./app_g_verify_home_chapter.mjs";
import { app_g_verify_home_poll_timer } from "./app_g_verify_home_poll_timer.mjs";
import { app_g_verify_home_status } from "./app_g_verify_home_status.mjs";
import { app_g_verify_home_chapter_codes } from "./app_g_verify_home_chapter_codes.mjs";
import { app_g_verify_home_open_pending } from "./app_g_verify_home_open_pending.mjs";
import { app_g_verify_home_document } from "./app_g_verify_home_document.mjs";
import { app_g_verify_home_refresh } from "./app_g_verify_home_refresh.mjs";
import { app_g_verify_home_lambda } from "./app_g_verify_home_lambda.mjs";
import { api_read_or } from "./api_read_or.mjs";
import { app_g_verify_home_verse_bar } from "./app_g_verify_home_verse_bar.mjs";
import { app_g_verify_home_header } from "./app_g_verify_home_header.mjs";
import { app_g_verify_home_busy_banner } from "./app_g_verify_home_busy_banner.mjs";
import { app_g_verify_home_asked_banner } from "./app_g_verify_home_asked_banner.mjs";
import { app_g_verify_home_highlight_selected } from "./app_g_verify_home_highlight_selected.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { json_to } from "./json_to.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_loading } from "./html_loading.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { app_g_verify_view } from "./app_g_verify_view.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_g_verify_column_max_width } from "./app_g_verify_column_max_width.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export async function app_g_verify_home(context) {
  let root = html_clear_context(context);
  let r3 = app_g_verify_home_chapter_codes();
  let r4 = app_g_verify_home_status(r3);
  let r5 = app_g_verify_home_poll_timer(r4);
  let r6 = app_g_verify_home_chapter(r5);
  let chapter = property_get(r6, "chapter");
  let status = property_get(r6, "status");
  let view = property_get(r6, "view");
  let selected_key = property_get(r6, "selected_key");
  let advanced_for = property_get(r6, "advanced_for");
  let chapter_advance_armed = property_get(r6, "chapter_advance_armed");
  let shown_json = property_get(r6, "shown_json");
  let storage_key = property_get(r6, "storage_key");
  let chapter_code2 = property_get(r6, "chapter_code2");
  let r32 = property_get(r6, "r32");
  let chapter_codes = property_get(r6, "chapter_codes");
  let poll_timer = property_get(r6, "poll_timer");
  let chapter_state = property_get(r32, "chapter_state");
  async function initial_load() {
    let f_name = fn_name("g_sermon_write_read");
    chapter = await api_read_or(f_name, [chapter_code2], {
      chapter_code: chapter_code2,
      passages: [],
    });
    let f_name2 = fn_name("g_verify_status_read");
    status = await api_read_or(f_name2, [chapter_code2], {
      busy: false,
      verse: "",
      note: "",
    });
    let f_name3 = fn_name("g_verify_chapter_next");
    chapter_state = await api_read_or(f_name3, [chapter_code2], {
      approved: "",
      latest: null,
      next: null,
      action: "wait",
    });
    let f_name4 = fn_name("g_verify_chapters_available");
    let object = await api_read_or(f_name4, [], {
      chapters: [],
    });
    chapter_codes = property_get(object, "chapters");
  }
  await html_loading(initial_load);
  let b2 = list_includes(chapter_codes, chapter_code2);
  if (not(b2)) {
    chapter_codes = chapter_codes.concat([chapter_code2]).sort();
  }
  await app_g_verify_home_document(
    render,
    chapter,
    status,
    chapter_state,
    view,
    poll,
    refresh,
  );
  function render(chapter_shown, status_shown, chapter_state_shown) {
    shown_json = json_to({
      chapter: chapter_shown,
      status: status_shown,
      chapter_state: chapter_state_shown,
    });
    html_clear(root);
    let passages = property_get(chapter_shown, "passages");
    function lambda(a, b) {
      let r = app_g_verify_home_lambda(a, b);
      return r;
    }
    passages = passages.slice().sort(lambda);
    let busy = property_get(status_shown, "busy");
    let status_verse = property_get(status_shown, "verse");
    function lambda2(p) {
      let key = g_sermon_passage_verses_key(p);
      return key;
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
    app_g_verify_home_header(wrap, chapter_codes, chapter_code2);
    app_g_verify_home_asked_banner(wrap);
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
        chapter_code2,
        selected_key,
        on_approved,
      );
    }
    function open_pending(verse) {
      let app_g_verify_home_open_pending_answer =
        app_g_verify_home_open_pending(
          verse,
          selected_key,
          storage_key,
          verse_buttons,
          view,
        );
      selected_key = property_get(
        app_g_verify_home_open_pending_answer,
        "selected_key",
      );
    }
    app_g_verify_home_verse_bar(
      wrap,
      real_keys,
      approved_index,
      open_passage,
      verse_buttons,
      passages,
      pending,
      open_pending,
    );
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
    let r2 = await app_g_verify_home_refresh(
      poll,
      chapter_code2,
      chapter_advance_armed,
      shown_json,
      render,
    );
    return r2;
  }
}
