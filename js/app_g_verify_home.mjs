import { html_clear_context } from "../../love/js/html_clear_context.mjs";
import { html_clear } from "../../love/js/html_clear.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { html_div_centered } from "../../love/js/html_div_centered.mjs";
import { html_p_text } from "../../love/js/html_p_text.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
import { html_font_color_set } from "../../love/js/html_font_color_set.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { html_border_radius } from "../../love/js/html_border_radius.mjs";
import { html_style_padding_x } from "../../love/js/html_style_padding_x.mjs";
import { html_style_padding_y } from "../../love/js/html_style_padding_y.mjs";
import { html_margin_em } from "../../love/js/html_margin_em.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { list_join_comma } from "../../love/js/list_join_comma.mjs";
import { list_first } from "../../love/js/list_first.mjs";
import { list_includes } from "../../love/js/list_includes.mjs";
import { json_to } from "../../love/js/json_to.mjs";
import { app_api } from "../../love/js/app_api.mjs";
import { fn_name } from "../../love/js/fn_name.mjs";
import { html_loading_suppressed } from "../../love/js/html_loading_suppressed.mjs";
import { g_sermon_passage_verses_key } from "../../love/js/g_sermon_passage_verses_key.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { app_g_verify_view } from "../../love/js/app_g_verify_view.mjs";
import { app_shared_text_deemphasized_color } from "../../love/js/app_shared_text_deemphasized_color.mjs";
import { app_shared_font_serif } from "../../love/js/app_shared_font_serif.mjs";
import { app_shared_milestone_background_color } from "../../love/js/app_shared_milestone_background_color.mjs";
import { app_shared_verse_selected_background_color } from "../../love/js/app_shared_verse_selected_background_color.mjs";
import { app_shared_border_radius } from "../../love/js/app_shared_border_radius.mjs";
import { app_shared_spaced_small_gap } from "../../love/js/app_shared_spaced_small_gap.mjs";
import { g_verify_book_name } from "../../love/js/g_verify_book_name.mjs";
function api_read(f_name, args) {
  return html_loading_suppressed(function read() {
    return app_api({ f_name, args });
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
  let advance_key = "g_verify_advance_" + chapter_code;
  let selected_key = localStorage.getItem(storage_key);
  let shown_json = null;
  let chapter;
  try {
    chapter = await api_read(fn_name("g_sermon_write_read"), [chapter_code]);
  } catch (missing) {
    chapter = {
      chapter_code,
      passages: [],
    };
  }
  let status;
  try {
    status = await api_read(fn_name("g_verify_status_read"), [chapter_code]);
  } catch (missing) {
    status = { busy: false, verse: "", note: "" };
  }
  let approval;
  try {
    approval = await api_read(fn_name("g_verify_approval_read"), [chapter_code]);
  } catch (missing) {
    approval = { approved: null };
  }
  let chapter_codes;
  try {
    chapter_codes = property_get(
      await api_read(fn_name("g_verify_chapters_available"), []),
      "chapters",
    );
  } catch (missing) {
    chapter_codes = [];
  }
  if (!list_includes(chapter_codes, chapter_code)) {
    chapter_codes = chapter_codes.concat([chapter_code]).sort();
  }
  render(chapter, status, approval);
  poll();
  document.addEventListener("visibilitychange", function on_visible() {
    if (!document.hidden) {
      refresh();
    }
  });
  function render(chapter, status, approval) {
    shown_json = json_to({
      chapter,
      status,
      approval,
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
    let approved_key = property_get(approval, "approved");
    let approved_index = approved_key === null ? -1 : real_keys.indexOf(approved_key);
    let pending = null;
    if (busy && !list_includes(real_keys, status_verse)) {
      pending = status_verse;
    }
    let wrap = html_div(root);
    html_style_set(wrap, "max-width", "48em");
    html_style_set(wrap, "margin", "0 auto");
    html_style_padding_x(wrap, "1.2em");
    html_style_padding_y(wrap, "2em");
    let cbar = html_div_centered(wrap);
    html_style_set(cbar, "margin-bottom", app_shared_spaced_small_gap());
    chapter_codes.forEach(function (code) {
      let label = g_verify_book_name(code.slice(0, 3)) + " " + String(Number(code.slice(3)));
      let cb = app_shared_button(cbar, label, function () {
        if (code !== chapter_code) {
          location.href = location.pathname + "?chapter=" + code;
        }
      });
      if (code === chapter_code) {
        html_style_background_color_set(
          cb,
          app_shared_verse_selected_background_color(),
        );
      }
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
        let bg = k === selected_key ? app_shared_verse_selected_background_color() : "";
        html_style_background_color_set(verse_buttons[k], bg);
      });
    }
    function on_approved(v) {
      localStorage.setItem(advance_key, v);
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
      let is_approved = approved_index >= 0 && real_keys.indexOf(key) <= approved_index;
      let label = is_approved ? "v" + key + " ✓" : "v" + key;
      verse_buttons[key] = app_shared_button(bar, label, function () {
        localStorage.removeItem(advance_key);
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
    let advance_after = localStorage.getItem(advance_key);
    if (advance_after !== null) {
      let approved_index = real_keys.indexOf(advance_after);
      if (approved_index >= 0 && approved_index + 1 < real_keys.length) {
        selected_key = real_keys[approved_index + 1];
        localStorage.setItem(storage_key, selected_key);
        localStorage.removeItem(advance_key);
      }
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
    try {
      let fresh_chapter = await api_read(fn_name("g_sermon_write_read"), [chapter_code]);
      let fresh_status = await api_read(fn_name("g_verify_status_read"), [chapter_code]);
      let fresh_approval = await api_read(fn_name("g_verify_approval_read"), [chapter_code]);
      let fresh_json = json_to({
        chapter: fresh_chapter,
        status: fresh_status,
        approval: fresh_approval,
      });
      if (fresh_json !== shown_json) {
        render(fresh_chapter, fresh_status, fresh_approval);
      }
    } catch (ignore) {
      ignore;
    }
    poll();
  }
}
