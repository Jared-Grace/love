import { html_clear_context } from "./html_clear_context.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { json_to } from "./json_to.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
import { html_loading } from "./html_loading.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_g_verify_view } from "./app_g_verify_view.mjs";
import { app_shared_text_deemphasized_color } from "./app_shared_text_deemphasized_color.mjs";
import { app_shared_font_serif } from "./app_shared_font_serif.mjs";
import { app_shared_milestone_background_color } from "./app_shared_milestone_background_color.mjs";
import { app_shared_verse_selected_background_color } from "./app_shared_verse_selected_background_color.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { g_verify_book_name } from "./g_verify_book_name.mjs";
import { g_chapter_code_next } from "./g_chapter_code_next.mjs";
import { app_shared_button_list_centered } from "./app_shared_button_list_centered.mjs";
function api_read(f_name, args) {
  return html_loading_suppressed(function read() {
    return app_shared_api({
      f_name,
      args,
    });
  });
}
export async function app_g_verify_home(context) {
  let root = html_clear_context(context);
  let chapter_code =
    new URLSearchParams(location.search).get("chapter") ||
    localStorage.getItem("g_verify_chapter") ||
    "1JN01";
  document.title =
    g_verify_book_name(chapter_code.slice(0, 3)) +
    " " +
    String(Number(chapter_code.slice(3)));
  let storage_key = "g_verify_selected_" + chapter_code;
  let selected_key = localStorage.getItem(storage_key);
  let advanced_for = null;
  let chapter_advance_armed = false;
  let shown_json = null;
  let chapter;
  let status;
  let chapter_state;
  let chapter_codes;
  await html_loading(async function initial_load() {
    try {
      chapter = await api_read(fn_name("g_sermon_write_read"), [chapter_code]);
    } catch (missing) {
      chapter = {
        chapter_code,
        passages: [],
      };
    }
    try {
      status = await api_read(fn_name("g_verify_status_read"), [chapter_code]);
    } catch (missing) {
      status = {
        busy: false,
        verse: "",
        note: "",
      };
    }
    try {
      chapter_state = await api_read(fn_name("g_verify_chapter_next"), [
        chapter_code,
      ]);
    } catch (missing) {
      chapter_state = {
        approved: "",
        latest: null,
        next: null,
        action: "wait",
      };
    }
    try {
      chapter_codes = property_get(
        await api_read(fn_name("g_verify_chapters_available"), []),
        "chapters",
      );
    } catch (missing) {
      chapter_codes = [];
    }
  });
  if (!list_includes(chapter_codes, chapter_code)) {
    chapter_codes = chapter_codes.concat([chapter_code]).sort();
  }
  render(chapter, status, chapter_state);
  poll();
  document.addEventListener("visibilitychange", function on_visible() {
    if (!document.hidden) {
      refresh();
    }
  });
  function render(chapter, status, chapter_state) {
    shown_json = json_to({
      chapter,
      status,
      chapter_state,
    });
    html_clear(root);
    let passages = property_get(chapter, "passages");
    passages = passages.slice().sort(function (a, b) {
      let na = Number(property_get(a, "verse_numbers")[0]);
      let nb = Number(property_get(b, "verse_numbers")[0]);
      return na - nb;
    });
    let busy = property_get(status, "busy");
    let status_verse = property_get(status, "verse");
    let real_keys = passages.map(function (p) {
      return g_sermon_passage_verses_key(p);
    });
    let approved_key = property_get(chapter_state, "approved");
    let approved_index = real_keys.indexOf(approved_key);
    let pending = null;
    if (busy && !list_includes(real_keys, status_verse)) {
      pending = status_verse;
    }
    let wrap = html_div(root);
    html_style_set(wrap, "max-width", "48em");
    html_style_set(wrap, "margin", "0 auto");
    html_style_padding_x(wrap, "1.2em");
    html_style_padding_y(wrap, "2em");
    let cbar = html_div(wrap);
    html_style_set(cbar, "margin-bottom", app_shared_spaced_small_gap());
    let book_order = [];
    let book_chapters = {};
    chapter_codes.forEach(function (code) {
      let book = code.slice(0, 3);
      if (!book_chapters[book]) {
        book_chapters[book] = [];
        book_order.push(book);
      }
      book_chapters[book].push(code);
    });
    book_order.forEach(function (book) {
      let row = html_div_centered(cbar);
      let book_label = html_p_text(row, g_verify_book_name(book));
      html_font_color_set(book_label, app_shared_text_deemphasized_color());
      html_style_set(book_label, "font-size", "0.85em");
      html_margin_em(book_label, "0");
      let buttons = app_shared_button_list_centered(
        row,
        book_chapters[book],
        function (code) {
          return String(Number(code.slice(3)));
        },
        function (code) {
          if (code !== chapter_code) {
            location.href = location.pathname + "?chapter=" + code;
          }
        },
      );
      book_chapters[book].forEach(function (code, i) {
        if (code === chapter_code) {
          html_style_background_color_set(
            buttons[i],
            app_shared_verse_selected_background_color(),
          );
        }
      });
    });
    let title = html_p_text(wrap, "Sermon coverage &mdash; " + chapter_code);
    html_style_set(title, "font-family", app_shared_font_serif());
    html_style_set(title, "font-size", "1.5em");
    html_style_set(title, "font-weight", "600");
    html_margin_em(title, "0");
    let hint = html_p_text(
      wrap,
      "Pick a passage, then hover a line to light up the words it draws from; hover a word to see the lines that carry it. Underlined words are used by no line.",
    );
    html_font_color_set(hint, app_shared_text_deemphasized_color());
    html_style_set(hint, "font-size", "0.9em");
    html_margin_em(hint, "0");
    if (busy) {
      let note = property_get(status, "note");
      let text = "Claude is writing v" + status_verse + "…";
      if (note) {
        text = text + "  " + note;
      }
      let banner = html_p_text(wrap, text);
      html_style_background_color_set(
        banner,
        app_shared_milestone_background_color(),
      );
      html_font_color_set(banner, "white");
      html_border_radius(banner, app_shared_border_radius());
      html_style_padding_x(banner, "0.7em");
      html_style_padding_y(banner, "0.5em");
      html_margin_em(banner, "0");
      html_style_set(banner, "margin-top", app_shared_spaced_small_gap());
      html_style_set(banner, "font-size", "0.95em");
    }
    let view = null;
    let verse_buttons = {};
    function highlight_selected() {
      Object.keys(verse_buttons).forEach(function (k) {
        let bg =
          k === selected_key
            ? app_shared_verse_selected_background_color()
            : "";
        html_style_background_color_set(verse_buttons[k], bg);
      });
    }
    function on_approved(v) {
      v;
      chapter_advance_armed = true;
      refresh();
    }
    function open_passage(passage) {
      selected_key = g_sermon_passage_verses_key(passage);
      localStorage.setItem(storage_key, selected_key);
      highlight_selected();
      app_g_verify_view(
        view,
        property_get(passage, "english"),
        property_get(passage, "lines"),
        chapter_code,
        selected_key,
        on_approved,
      );
    }
    function open_pending(verse) {
      selected_key = verse;
      localStorage.setItem(storage_key, verse);
      highlight_selected();
      html_clear(view);
      let msg = html_p_text(view, "Claude is writing v" + verse + "…");
      html_font_color_set(msg, app_shared_text_deemphasized_color());
      html_style_set(msg, "font-size", "1.1em");
      html_style_set(msg, "margin-top", "1em");
    }
    let bar = html_div_centered(wrap);
    html_style_set(bar, "margin-top", app_shared_spaced_small_gap());
    passages.forEach(function (passage) {
      let key = g_sermon_passage_verses_key(passage);
      let is_approved =
        approved_index >= 0 && real_keys.indexOf(key) <= approved_index;
      let label = is_approved ? "v" + key + " ✓" : "v" + key;
      verse_buttons[key] = app_shared_button(bar, label, function () {
        open_passage(passage);
      });
    });
    if (pending !== null) {
      let pb = app_shared_button(bar, "v" + pending, function () {
        open_pending(pending);
      });
      html_style_set(pb, "opacity", "0.5");
      verse_buttons[pending] = pb;
    }
    view = html_div(wrap);
    if (passages.length === 0) {
      if (pending !== null) {
        open_pending(pending);
      } else {
        let empty = html_p_text(
          view,
          "No verses written yet for this chapter.",
        );
        html_font_color_set(empty, app_shared_text_deemphasized_color());
        html_style_set(empty, "margin-top", "1em");
      }
      return;
    }
    let latest = property_get(chapter_state, "latest");
    if (latest !== null && latest !== approved_key && latest !== advanced_for) {
      selected_key = latest;
      localStorage.setItem(storage_key, latest);
      advanced_for = latest;
    }
    let initial = null;
    passages.forEach(function (passage) {
      if (g_sermon_passage_verses_key(passage) === selected_key) {
        initial = passage;
      }
    });
    if (initial !== null) {
      open_passage(initial);
    } else if (pending !== null && selected_key === pending) {
      open_pending(pending);
    } else {
      open_passage(list_first(passages));
    }
  }
  function poll() {
    setTimeout(refresh, 4000);
  }
  async function refresh() {
    // Don't poll a hidden/backgrounded tab: skip the API calls (which otherwise
    // pile up in DevTools' network log and burn dev-API CPU all night) and just
    // reschedule. The next visible tick picks state back up within one interval.
    if (document.hidden) {
      poll();
      return;
    }
    try {
      let fresh_chapter = await api_read(fn_name("g_sermon_write_read"), [
        chapter_code,
      ]);
      let fresh_status = await api_read(fn_name("g_verify_status_read"), [
        chapter_code,
      ]);
      let fresh_state = await api_read(fn_name("g_verify_chapter_next"), [
        chapter_code,
      ]);
      if (chapter_advance_armed) {
        let latest_key = property_get(fresh_state, "latest");
        let fully_approved =
          property_get(fresh_state, "action") === "done" &&
          latest_key !== null &&
          property_get(fresh_state, "approved") === latest_key;
        if (fully_approved) {
          let next_chapter = g_chapter_code_next(chapter_code);
          let codes = property_get(
            await api_read(fn_name("g_verify_chapters_available"), []),
            "chapters",
          );
          if (list_includes(codes, next_chapter)) {
            location.href = location.pathname + "?chapter=" + next_chapter;
            return;
          }
        }
      }
      let fresh_json = json_to({
        chapter: fresh_chapter,
        status: fresh_status,
        chapter_state: fresh_state,
      });
      if (fresh_json !== shown_json) {
        render(fresh_chapter, fresh_status, fresh_state);
      }
    } catch (ignore) {
      ignore;
    }
    poll();
  }
}
