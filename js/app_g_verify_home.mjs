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
import { g_sermon_write_download } from "./g_sermon_write_download.mjs";
import { g_sermon_write_download_fresh } from "./g_sermon_write_download_fresh.mjs";
import { g_verify_status_download_fresh } from "./g_verify_status_download_fresh.mjs";
import { g_sermon_passage_verses_key } from "./g_sermon_passage_verses_key.mjs";
import { app_replace_button } from "./app_replace_button.mjs";
import { app_g_verify_view } from "./app_g_verify_view.mjs";
import { app_shared_text_deemphasized_color } from "./app_shared_text_deemphasized_color.mjs";
import { app_shared_font_serif } from "./app_shared_font_serif.mjs";
import { app_shared_milestone_background_color } from "./app_shared_milestone_background_color.mjs";
import { app_shared_verse_selected_background_color } from "./app_shared_verse_selected_background_color.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
export async function app_g_verify_home(context) {
  let root = html_clear_context(context);
  let chapter_code = localStorage.getItem("g_verify_chapter") || "1JN01";
  let storage_key = "g_verify_selected_" + chapter_code;
  let advance_key = "g_verify_advance_" + chapter_code;
  let selected_key = localStorage.getItem(storage_key);
  let shown_json = null;

  let chapter;
  try {
    chapter = await g_sermon_write_download(chapter_code);
  } catch (missing) {
    chapter = { chapter_code, passages: [] };
  }
  let status = await g_verify_status_download_fresh(chapter_code);
  render(chapter, status);
  poll();

  function render(chapter, status) {
    shown_json = json_to({ chapter, status });
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
    ["1JN01", "1JN02", "1JN03", "1JN04", "1JN05"].forEach(function (code) {
      let number = String(Number(code.slice(3)));
      let cb = app_replace_button(cbar, "1 John " + number, function () {
        if (code !== chapter_code) {
          localStorage.setItem("g_verify_chapter", code);
          location.reload();
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
      html_style_background_color_set(banner, app_shared_milestone_background_color());
      html_font_color_set(banner, "white");
      html_border_radius(banner, app_shared_border_radius());
      html_style_padding_x(banner, "0.7em");
      html_style_padding_y(banner, "0.5em");
      html_margin_em(banner, "0");
      html_style_set(banner, "margin-top", app_shared_spaced_small_gap());
      html_style_set(banner, "font-size", "0.95em");
    }

    let view = null;
    function on_approved(v) {
      localStorage.setItem(advance_key, String(Number(v) + 1));
    }
    function open_passage(passage) {
      selected_key = g_sermon_passage_verses_key(passage);
      localStorage.setItem(storage_key, selected_key);
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
      app_replace_button(bar, "v" + key, function () {
        localStorage.removeItem(advance_key);
        open_passage(passage);
      });
    });
    if (pending !== null) {
      let pb = app_replace_button(bar, "v" + pending, function () {
        open_pending(pending);
      });
      html_style_set(pb, "opacity", "0.5");
    }

    view = html_div(wrap);

    if (passages.length === 0) {
      if (pending !== null) {
        open_pending(pending);
      } else {
        let empty = html_p_text(view, "No verses written yet for this chapter.");
        html_font_color_set(empty, app_shared_text_deemphasized_color());
        html_style_set(empty, "margin-top", "1em");
      }
      return;
    }

    let advance_target = localStorage.getItem(advance_key);
    if (advance_target !== null && list_includes(real_keys, advance_target)) {
      selected_key = advance_target;
      localStorage.setItem(storage_key, selected_key);
      localStorage.removeItem(advance_key);
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
      let fresh_chapter = await g_sermon_write_download_fresh(chapter_code);
      let fresh_status = await g_verify_status_download_fresh(chapter_code);
      let fresh_json = json_to({ chapter: fresh_chapter, status: fresh_status });
      if (fresh_json !== shown_json) {
        render(fresh_chapter, fresh_status);
      }
    } catch (ignore) {
      ignore;
    }
    poll();
  }
}
