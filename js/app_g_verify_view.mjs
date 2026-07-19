import { html_clear } from "../../love/js/html_clear.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { html_span_text } from "../../love/js/html_span_text.mjs";
import { html_span_space } from "../../love/js/html_span_space.mjs";
import { app_shared_button } from "../../love/js/app_shared_button.mjs";
import { html_button_biblehub_open_commentary } from "../../love/js/html_button_biblehub_open_commentary.mjs";
import { html_button_biblehub_open_parallel } from "../../love/js/html_button_biblehub_open_parallel.mjs";
import { g_verify_book_name } from "../../love/js/g_verify_book_name.mjs";
import { app_api } from "../../love/js/app_api.mjs";
import { fn_name } from "../../love/js/fn_name.mjs";
import { html_p_text } from "../../love/js/html_p_text.mjs";
import { html_on } from "../../love/js/html_on.mjs";
import { html_style_set } from "../../love/js/html_style_set.mjs";
import { html_font_color_set } from "../../love/js/html_font_color_set.mjs";
import { html_style_background_color_set } from "../../love/js/html_style_background_color_set.mjs";
import { html_border_radius } from "../../love/js/html_border_radius.mjs";
import { html_style_padding_x } from "../../love/js/html_style_padding_x.mjs";
import { html_style_padding_y } from "../../love/js/html_style_padding_y.mjs";
import { html_margin_em } from "../../love/js/html_margin_em.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { g_sermon_passage_words } from "../../love/js/g_sermon_passage_words.mjs";
import { app_shared_container_base } from "../../love/js/app_shared_container_base.mjs";
import { app_shared_verse_selected_background_color } from "../../love/js/app_shared_verse_selected_background_color.mjs";
import { app_shared_text_deemphasized_color } from "../../love/js/app_shared_text_deemphasized_color.mjs";
import { app_shared_text_category_color } from "../../love/js/app_shared_text_category_color.mjs";
import { app_shared_text_warning_color } from "../../love/js/app_shared_text_warning_color.mjs";
import { app_shared_container_blue_border_color } from "../../love/js/app_shared_container_blue_border_color.mjs";
import { app_shared_border_radius } from "../../love/js/app_shared_border_radius.mjs";
import { app_shared_spaced_small_gap } from "../../love/js/app_shared_spaced_small_gap.mjs";
import { app_shared_font_serif } from "../../love/js/app_shared_font_serif.mjs";
export function app_g_verify_view(
  container,
  english,
  lines,
  chapter_code,
  verse,
  on_approved,
) {
  html_clear(container);
  let tokens = g_sermon_passage_words(english);
  let highlight = app_shared_verse_selected_background_color();
  let muted = app_shared_text_deemphasized_color();
  let border = app_shared_container_blue_border_color();
  let serif = app_shared_font_serif();
  let small_gap = app_shared_spaced_small_gap();
  let covered = {};
  lines.forEach(function (l) {
    property_get(l, "indices").forEach(function (i) {
      covered[i] = true;
    });
  });
  let token_spans = [];
  let row_comps = [];
  let order_comps = [];
  function background_clear(component) {
    html_style_background_color_set(component, "");
  }
  function clear_all() {
    token_spans.forEach(background_clear);
    row_comps.forEach(function (r) {
      if (r) {
        background_clear(r);
      }
    });
    order_comps.forEach(function (r) {
      if (r) {
        background_clear(r);
      }
    });
  }
  function highlight_lines(li_list) {
    clear_all();
    li_list.forEach(function (li) {
      property_get(lines[li], "indices").forEach(function (i) {
        html_style_background_color_set(token_spans[i], highlight);
      });
      if (row_comps[li]) {
        html_style_background_color_set(row_comps[li], highlight);
      }
      if (order_comps[li]) {
        html_style_background_color_set(order_comps[li], highlight);
      }
    });
  }
  function panel_flush() {
    let p = app_shared_container_base(container);
    html_style_padding_x(p, "0");
    html_style_padding_y(p, "0");
    html_style_set(p, "overflow", "hidden");
    return p;
  }
  function row_new(panel, first) {
    let row = html_div(panel);
    html_style_set(row, "display", "flex");
    html_style_set(row, "gap", small_gap);
    html_style_padding_x(row, small_gap);
    html_style_padding_y(row, small_gap);
    if (!first) {
      html_style_set(row, "border-top", "1px solid " + border);
    }
    html_style_set(row, "transition", "background-color .12s");
    return row;
  }
  function label_new(caption) {
    let l = html_p_text(container, caption);
    html_font_color_set(l, app_shared_text_category_color());
    html_style_set(l, "font-size", "0.72em");
    html_style_set(l, "letter-spacing", "0.11em");
    html_style_set(l, "font-weight", "600");
    html_margin_em(l, "0");
    html_style_set(l, "margin-top", small_gap);
  }
  let passage_panel = app_shared_container_base(container);
  html_style_set(passage_panel, "font-family", serif);
  html_style_set(passage_panel, "font-size", "1.3em");
  html_style_set(passage_panel, "line-height", "1.95");
  tokens.forEach(function (t, i) {
    let span = html_span_text(passage_panel, t);
    html_border_radius(span, app_shared_border_radius());
    html_style_set(span, "padding", "0 0.06em");
    html_style_set(span, "transition", "background-color .12s");
    if (!covered[i]) {
      html_style_set(
        span,
        "text-decoration",
        "underline dashed " + app_shared_text_warning_color(),
      );
      html_style_set(span, "text-underline-offset", "0.2em");
    }
    html_on(span, "mouseenter", function () {
      let lis = [];
      lines.forEach(function (l, li) {
        if (property_get(l, "indices").indexOf(i) >= 0) {
          lis.push(li);
        }
      });
      highlight_lines(lis);
    });
    html_on(span, "mouseleave", clear_all);
    token_spans[i] = span;
    html_span_space(passage_panel);
  });
  label_new("BY PASSAGE ORDER");
  let cov = panel_flush();
  let order = lines.map(function (l, li) {
    return li;
  });
  order.sort(function (a, b) {
    let ma = Math.min.apply(null, property_get(lines[a], "indices"));
    let mb = Math.min.apply(null, property_get(lines[b], "indices"));
    return ma - mb || a - b;
  });
  order.forEach(function (li, k) {
    let l = lines[li];
    let row = row_new(cov, k === 0);
    let words = property_get(l, "indices")
      .map(function (i) {
        return tokens[i];
      })
      .join(" ");
    let words_el = html_span_text(row, words);
    html_style_set(words_el, "font-family", serif);
    html_style_set(words_el, "flex", "0 0 42%");
    html_font_color_set(words_el, muted);
    html_span_text(row, property_get(l, "text"));
    html_on(row, "mouseenter", function () {
      highlight_lines([li]);
    });
    html_on(row, "mouseleave", clear_all);
    row_comps[li] = row;
  });
  label_new("IN SERMON ORDER");
  let ord = panel_flush();
  lines.forEach(function (l, li) {
    let row = row_new(ord, li === 0);
    let n = html_span_text(row, String(li + 1));
    html_font_color_set(n, muted);
    html_style_set(n, "flex", "0 0 1.2em");
    html_style_set(n, "font-variant-numeric", "tabular-nums");
    html_span_text(row, property_get(l, "text"));
    html_on(row, "mouseenter", function () {
      highlight_lines([li]);
    });
    html_on(row, "mouseleave", clear_all);
    order_comps[li] = row;
  });
  let links_bar = html_div(container);
  html_style_set(links_bar, "margin-top", small_gap);
  html_style_set(links_bar, "text-align", "center");
  let bh_chapter = String(Number(chapter_code.slice(3)));
  let bh_book = g_verify_book_name(chapter_code.slice(0, 3));
  let bh_verse = verse.split(",")[0];
  html_button_biblehub_open_commentary(links_bar, bh_chapter, bh_book, bh_verse);
  html_button_biblehub_open_parallel(links_bar, bh_chapter, bh_book, bh_verse);
  let approve_bar = html_div(container);
  html_style_set(approve_bar, "margin-top", small_gap);
  html_style_set(approve_bar, "text-align", "center");
  async function on_approve() {
    try {
      await app_api({
        f_name: fn_name("g_verify_approval_set"),
        args: [chapter_code, verse],
      });
      html_clear(approve_bar);
      let done = html_p_text(approve_bar, "Approved v" + verse + " ✓");
      html_font_color_set(done, muted);
      on_approved(verse);
    } catch (failed) {
      html_clear(approve_bar);
      let msg = html_p_text(approve_bar, "Couldn't save — please try again.");
      html_font_color_set(msg, muted);
      app_shared_button(approve_bar, "Approve v" + verse, on_approve);
    }
  }
  app_shared_button(approve_bar, "Approve v" + verse, on_approve);
}
