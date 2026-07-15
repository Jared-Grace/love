import { html_clear_context } from "./html_clear_context.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_on } from "./html_on.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { g_sermon_passage_words } from "./g_sermon_passage_words.mjs";
import { app_g_verify_sermon } from "./app_g_verify_sermon.mjs";
export async function app_g_verify_home(context) {
  let root = html_clear_context(context);
  let sermon = app_g_verify_sermon();
  let passage = property_get(sermon, "passage");
  let lines = property_get(sermon, "lines");
  let tokens = g_sermon_passage_words(passage);

  let panel_bg = "#f4f1e9";
  let line_color = "#e4ded1";
  let ink = "#20262a";
  let text_color = "#3c444a";
  let muted = "#7e858b";
  let gold_bg = "#f1e3be";
  let gold_edge = "#dcc378";
  let gap_color = "#af3a46";
  let serif = "Georgia, 'Times New Roman', serif";

  let covered = {};
  lines.forEach(function (l) {
    property_get(l, "indices").forEach(function (i) {
      covered[i] = true;
    });
  });

  let token_spans = [];
  let row_comps = [];
  let order_comps = [];

  function clear_all() {
    token_spans.forEach(function (span) {
      html_style_set(span, "background", "");
      html_style_set(span, "boxShadow", "");
    });
    row_comps.forEach(function (row) {
      if (row) {
        html_style_set(row, "background", "");
      }
    });
    order_comps.forEach(function (row) {
      if (row) {
        html_style_set(row, "background", "");
      }
    });
  }
  function highlight_lines(li_list) {
    clear_all();
    li_list.forEach(function (li) {
      property_get(lines[li], "indices").forEach(function (i) {
        html_style_set(token_spans[i], "background", gold_bg);
        html_style_set(token_spans[i], "boxShadow", "inset 0 0 0 1px " + gold_edge);
      });
      if (row_comps[li]) {
        html_style_set(row_comps[li], "background", gold_bg);
      }
      if (order_comps[li]) {
        html_style_set(order_comps[li], "background", gold_bg);
      }
    });
  }
  function panel_new() {
    let p = html_div(wrap);
    html_style_set(p, "background", panel_bg);
    html_style_set(p, "border", "1px solid " + line_color);
    html_style_set(p, "borderRadius", "12px");
    html_style_set(p, "overflow", "hidden");
    return p;
  }
  function label_new(caption) {
    let l = html_p_text(wrap, caption);
    html_style_set(l, "fontSize", "11px");
    html_style_set(l, "letterSpacing", "0.11em");
    html_style_set(l, "color", muted);
    html_style_set(l, "fontWeight", "600");
    html_style_set(l, "marginTop", "34px");
    html_style_set(l, "marginBottom", "10px");
    return l;
  }

  let wrap = html_div(root);
  html_style_set(wrap, "maxWidth", "820px");
  html_style_set(wrap, "margin", "0 auto");
  html_style_set(wrap, "padding", "32px 20px 64px");
  html_style_set(wrap, "fontFamily", "system-ui, -apple-system, sans-serif");
  html_style_set(wrap, "color", text_color);

  let title = html_p_text(wrap, "Sermon coverage &mdash; 1 John 1:1");
  html_style_set(title, "fontSize", "23px");
  html_style_set(title, "fontWeight", "600");
  html_style_set(title, "color", ink);
  html_style_set(title, "fontFamily", serif);
  html_style_set(title, "marginBottom", "6px");

  let hint = html_p_text(
    wrap,
    "Hover a line to light up the words it draws from; hover a word to see the lines that carry it. Underlined words are used by no line.",
  );
  html_style_set(hint, "fontSize", "14px");
  html_style_set(hint, "color", muted);
  html_style_set(hint, "marginTop", "0");
  html_style_set(hint, "marginBottom", "20px");

  let passage_panel = panel_new();
  html_style_set(passage_panel, "padding", "22px 24px");
  html_style_set(passage_panel, "fontFamily", serif);
  html_style_set(passage_panel, "fontSize", "21px");
  html_style_set(passage_panel, "lineHeight", "1.95");
  html_style_set(passage_panel, "color", ink);

  tokens.forEach(function (t, i) {
    let span = html_span_text(passage_panel, t);
    html_style_set(span, "padding", "1px 2px");
    html_style_set(span, "borderRadius", "4px");
    html_style_set(span, "marginRight", "0.28em");
    html_style_set(span, "transition", "background .12s, box-shadow .12s");
    if (!covered[i]) {
      html_style_set(span, "textDecoration", "underline dashed " + gap_color);
      html_style_set(span, "textUnderlineOffset", "4px");
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
  });

  label_new("BY PASSAGE ORDER");
  let cov = panel_new();
  let order = lines.map(function (l, li) {
    return li;
  });
  order.sort(function (a, b) {
    let ma = Math.min.apply(null, property_get(lines[a], "indices"));
    let mb = Math.min.apply(null, property_get(lines[b], "indices"));
    return ma - mb || a - b;
  });
  let cov_first = true;
  order.forEach(function (li) {
    let l = lines[li];
    let row = html_div(cov);
    html_style_set(row, "display", "flex");
    html_style_set(row, "gap", "14px");
    html_style_set(row, "padding", "11px 14px");
    if (!cov_first) {
      html_style_set(row, "borderTop", "1px solid " + line_color);
    }
    cov_first = false;
    html_style_set(row, "transition", "background .1s");
    let words = property_get(l, "indices")
      .map(function (i) {
        return tokens[i];
      })
      .join(" ");
    let words_el = html_span_text(row, words);
    html_style_set(words_el, "fontFamily", serif);
    html_style_set(words_el, "flex", "0 0 42%");
    html_style_set(words_el, "color", text_color);
    let line_el = html_span_text(row, property_get(l, "text"));
    html_style_set(line_el, "color", ink);
    html_on(row, "mouseenter", function () {
      highlight_lines([li]);
    });
    html_on(row, "mouseleave", clear_all);
    row_comps[li] = row;
  });

  label_new("IN SERMON ORDER");
  let ord = panel_new();
  let ord_first = true;
  lines.forEach(function (l, li) {
    let row = html_div(ord);
    html_style_set(row, "display", "flex");
    html_style_set(row, "gap", "12px");
    html_style_set(row, "padding", "9px 14px");
    if (!ord_first) {
      html_style_set(row, "borderTop", "1px solid " + line_color);
    }
    ord_first = false;
    html_style_set(row, "transition", "background .1s");
    let n = html_span_text(row, String(li + 1));
    html_style_set(n, "color", muted);
    html_style_set(n, "flex", "0 0 18px");
    html_style_set(n, "fontVariantNumeric", "tabular-nums");
    let t = html_span_text(row, property_get(l, "text"));
    html_style_set(t, "color", ink);
    html_on(row, "mouseenter", function () {
      highlight_lines([li]);
    });
    html_on(row, "mouseleave", clear_all);
    order_comps[li] = row;
  });
}
