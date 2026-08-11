import { app_g_verify_view_suggestion_applied_is } from "./app_g_verify_view_suggestion_applied_is.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { app_g_verify_label_font_size } from "./app_g_verify_label_font_size.mjs";
import { app_g_verify_passage_font_size } from "./app_g_verify_passage_font_size.mjs";
import { app_g_verify_suggestion_font_size } from "./app_g_verify_suggestion_font_size.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_verify_note_font_size } from "./app_g_verify_note_font_size.mjs";
import { invoke_now_and_later } from "./invoke_now_and_later.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_width_full } from "./html_width_full.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_button_bible_chapter_open } from "./html_button_bible_chapter_open.mjs";
import { html_buttons_biblehub_verse_group } from "./html_buttons_biblehub_verse_group.mjs";
import { html_buttons_biblehub_verse_grid } from "./html_buttons_biblehub_verse_grid.mjs";
import { g_verify_book_name } from "./g_verify_book_name.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on } from "./html_on.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { property_get } from "./property_get.mjs";
import { g_sermon_passage_words } from "./g_sermon_passage_words.mjs";
import { app_shared_container_base } from "./app_shared_container_base.mjs";
import { app_shared_verse_selected_background_color } from "./app_shared_verse_selected_background_color.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_text_category_color } from "./app_shared_text_category_color.mjs";
import { app_shared_text_warning_color } from "./app_shared_text_warning_color.mjs";
import { app_shared_container_blue_border_color } from "./app_shared_container_blue_border_color.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { app_shared_font_serif } from "./app_shared_font_serif.mjs";
export async function app_g_verify_view(
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
  let border = app_shared_container_blue_border_color();
  let serif = app_shared_font_serif();
  let small_gap = app_shared_spaced_small_gap();
  let covered = {};
  function lambda2(l) {
    function lambda(i) {
      covered[i] = true;
    }
    property_get(l, "indices").forEach(lambda);
  }
  lines.forEach(lambda2);
  let token_spans = [];
  let row_comps = [];
  let order_comps = [];
  function background_clear(component) {
    html_style_background_color_set(component, "");
  }
  function clear_all() {
    token_spans.forEach(background_clear);
    function lambda3(r) {
      if (r) {
        background_clear(r);
      }
    }
    row_comps.forEach(lambda3);
    function lambda4(r) {
      if (r) {
        background_clear(r);
      }
    }
    order_comps.forEach(lambda4);
  }
  function highlight_lines(li_list) {
    clear_all();
    function lambda6(li) {
      function lambda5(i) {
        html_style_background_color_set(token_spans[i], highlight);
      }
      property_get(lines[li], "indices").forEach(lambda5);
      if (row_comps[li]) {
        html_style_background_color_set(row_comps[li], highlight);
      }
      if (order_comps[li]) {
        html_style_background_color_set(order_comps[li], highlight);
      }
    }
    li_list.forEach(lambda6);
  }
  function panel_flush() {
    let p = app_shared_container_base(container);
    html_style_padding_x(p, "0");
    html_style_padding_y(p, "0");
    html_style_overflow_hidden(p);
    return p;
  }
  function row_new(panel, first) {
    let row = html_div(panel);
    html_display_flex(row);
    html_style_gap(row, small_gap);
    html_style_padding_x(row, small_gap);
    html_style_padding_y(row, small_gap);
    if (not(first)) {
      html_style_set(row, "border-top", "1px solid " + border);
    }
    html_style_set(row, "transition", "background-color .12s");
    return row;
  }
  function label_new(caption) {
    let l = html_p_text(container, caption);
    let color = app_shared_text_category_color();
    html_font_color_set(l, color);
    let value6 = app_g_verify_label_font_size();
    html_style_font_size(l, value6);
    html_style_set(l, "letter-spacing", "0.11em");
    html_bold_semi(l);
    html_margin_em(l, "0");
    html_style_margin_top(l, small_gap);
  }
  let passage_panel = app_shared_container_base(container);
  html_font_set(passage_panel, serif);
  let value7 = app_g_verify_passage_font_size();
  html_style_font_size(passage_panel, value7);
  html_style_line_height(passage_panel, "1.95");
  function lambda9(t, i) {
    let span = html_span_text(passage_panel, t);
    let border_radius = app_shared_border_radius();
    html_border_radius(span, border_radius);
    html_style_padding(span, "0 0.06em");
    html_style_set(span, "transition", "background-color .12s");
    if (not(covered[i])) {
      html_style_set(
        span,
        "text-decoration",
        "underline dashed " + app_shared_text_warning_color(),
      );
      html_style_set(span, "text-underline-offset", "0.2em");
    }
    function lambda8() {
      let lis = [];
      function lambda7(l, li) {
        let a2 = property_get(l, "indices").indexOf(i);
        if (greater_than_equal(a2, 0)) {
          lis.push(li);
        }
      }
      lines.forEach(lambda7);
      highlight_lines(lis);
    }
    html_on(span, "mouseenter", lambda8);
    html_on(span, "mouseleave", clear_all);
    token_spans[i] = span;
    html_span_space(passage_panel);
  }
  tokens.forEach(lambda9);
  label_new("BY PASSAGE ORDER");
  let cov = panel_flush();
  function lambda10(l, li) {
    return li;
  }
  let order = lines.map(lambda10);
  function lambda11(a, b) {
    let value2 = property_get(lines[a], "indices");
    let ma = Math.min.apply(null, value2);
    let value3 = property_get(lines[b], "indices");
    let mb = Math.min.apply(null, value3);
    let r2 = subtract(ma, mb) || subtract(a, b);
    return r2;
  }
  order.sort(lambda11);
  function lambda14(li, k) {
    let l = lines[li];
    let eq = equal(k, 0);
    let row = row_new(cov, eq);
    function lambda12(i) {
      let r3 = tokens[i];
      return r3;
    }
    let words = property_get(l, "indices").map(lambda12).join(" ");
    let words_el = html_span_text(row, words);
    html_font_set(words_el, serif);
    html_style_flex(words_el, "0 0 42%");
    app_shared_text_deemphasized(words_el);
    let text = property_get(l, "text");
    html_span_text(row, text);
    function lambda13() {
      highlight_lines([li]);
    }
    html_on(row, "mouseenter", lambda13);
    html_on(row, "mouseleave", clear_all);
    row_comps[li] = row;
  }
  order.forEach(lambda14);
  label_new("IN SERMON ORDER");
  let ord = panel_flush();
  function lambda16(l, li) {
    let eq2 = equal(li, 0);
    let row = row_new(ord, eq2);
    let text2 = String(li + 1);
    let n = html_span_text(row, text2);
    app_shared_text_deemphasized(n);
    html_style_flex(n, "0 0 1.2em");
    html_style_set(n, "font-variant-numeric", "tabular-nums");
    let text3 = property_get(l, "text");
    html_span_text(row, text3);
    function lambda15() {
      highlight_lines([li]);
    }
    html_on(row, "mouseenter", lambda15);
    html_on(row, "mouseleave", clear_all);
    order_comps[li] = row;
  }
  lines.forEach(lambda16);
  let links_bar = html_div(container);
  html_style_margin_top(links_bar, small_gap);
  html_centered(links_bar);
  let v = chapter_code.slice(3);
  let v2 = Number(v);
  let bh_chapter = String(v2);
  let book_code = chapter_code.slice(0, 3);
  let bh_book = g_verify_book_name(book_code);
  let verse_list = verse.split(",");
  html_button_bible_chapter_open(
    links_bar,
    chapter_code,
    verse,
    "Whole Chapter",
  );
  ("Commentary / Parallel / Interlinear each as a verse-group: one button for a single verse, or (multi-verse) a row of per-verse buttons in a shared centered grid so the verse numbers line up across the three kinds (a single button reaches only the first verse)");
  let multi_verse = greater_than_equal(verse_list.length, 2);
  let links_target = multi_verse
    ? html_buttons_biblehub_verse_grid(links_bar)
    : links_bar;
  html_buttons_biblehub_verse_group(
    links_target,
    bh_book,
    bh_chapter,
    verse_list,
    "Commentary",
    "",
    "#commentary",
  );
  html_buttons_biblehub_verse_group(
    links_target,
    bh_book,
    bh_chapter,
    verse_list,
    "Parallel",
    "",
    "",
  );
  html_buttons_biblehub_verse_group(
    links_target,
    bh_book,
    bh_chapter,
    verse_list,
    "Interlinear",
    "interlinear/",
    "",
  );
  let approve_bar = html_div(container);
  html_style_margin_top(approve_bar, small_gap);
  html_centered(approve_bar);
  async function on_approve() {
    try {
      await app_shared_api({
        f_name: fn_name("g_verify_approval_set"),
        args: [chapter_code, verse],
      });
      html_clear(approve_bar);
      let done = html_p_text(approve_bar, "Approved v" + verse + " ✓");
      app_shared_text_deemphasized(done);
      on_approved(verse);
    } catch (failed) {
      html_clear(approve_bar);
      let msg = html_p_text(approve_bar, "Couldn't save — please try again.");
      app_shared_text_deemphasized(msg);
      app_shared_button(approve_bar, "Approve v" + verse, on_approve);
    }
  }
  app_shared_button(approve_bar, "Approve v" + verse, on_approve);
  label_new("SUGGEST AN EDIT");
  let suggest_area = html_textarea(container);
  function lambda17(l) {
    let value = property_get(l, "text");
    return value;
  }
  let value4 = lines.map(lambda17).join("\n");
  html_value_set(suggest_area, value4);
  html_width_full(suggest_area);
  html_style_set(suggest_area, "min-height", "6em");
  html_style_set(suggest_area, "box-sizing", "border-box");
  ("prefer the browser's NATIVE content-sizing (field-sizing) — it grows the box to fit with zero JS and, crucially, zero FORCED REFLOW per keystroke; the JS height fallback below reads scrollHeight on every input, thrashing layout, which lags typing. Fall back to the JS path only where field-sizing is unsupported");
  let native_sizing = window.CSS.supports("field-sizing", "content");
  if (native_sizing) {
    html_style_set(suggest_area, "field-sizing", "content");
  } else {
    html_style_set(suggest_area, "overflow-y", "hidden");
  }
  html_font_set(suggest_area, serif);
  let value8 = app_g_verify_suggestion_font_size();
  html_style_font_size(suggest_area, value8);
  html_style_line_height(suggest_area, "1.5");
  html_style_margin_top(suggest_area, small_gap);
  ("keep an in-progress suggestion per verse across navigation, but ONLY while the underlying lines are unchanged; if the lines were updated the saved draft is stale, so drop it and show the fresh lines");
  let draft_key = "g_verify_draft_" + chapter_code + "_" + verse;
  let base_key = "g_verify_draft_base_" + chapter_code + "_" + verse;
  let saved_draft = sessionStorage.getItem(draft_key);
  let saved_base = sessionStorage.getItem(base_key);
  let draft_fresh = not_equal(saved_draft, null) && equal(saved_base, value4);
  if (draft_fresh) {
    html_value_set(suggest_area, saved_draft);
  } else {
    sessionStorage.removeItem(draft_key);
    sessionStorage.removeItem(base_key);
  }
  function draft_save() {
    let current = html_value_get(suggest_area);
    sessionStorage.setItem(draft_key, current);
    sessionStorage.setItem(base_key, value4);
  }
  ("grow and shrink the textarea to fit its content, so a long suggestion is fully visible without inner scrolling");
  function autosize() {
    if (native_sizing) {
      return;
    }
    ("suggest_area is a COMPONENT wrapper, not the DOM element — the style setter unwraps it internally, but layout MEASUREMENTS (scrollHeight, offsetHeight, clientHeight) must be read off the real element, else they are undefined and the height math is NaN, silently ignored, so the box stays at its min-height floor. Under box-sizing border-box, height=scrollHeight lands one border short, so add the border difference (measured while overflow-y is hidden) to fit exactly");
    let element = html_component_element_get(suggest_area);
    html_style_set(suggest_area, "height", "auto");
    let content = element.scrollHeight;
    let chrome = subtract(element.offsetHeight, element.clientHeight);
    let h = content + chrome;
    html_style_set(suggest_area, "height", h + "px");
  }
  function on_suggest_input() {
    draft_save();
    autosize();
  }
  html_on(suggest_area, "input", on_suggest_input);
  ("fit the content now and again after this tick; then once more after the serif font loads, whose metrics change the height");
  invoke_now_and_later(autosize);
  document.fonts.ready.then(autosize);
  ("a Reset control that restores the box to the CURRENT saved lines (value4) and drops any in-progress draft — so the reviewer can start over from exactly what Claude has now, having edited the box away from it");
  let reset_bar = html_div(container);
  html_style_margin_top(reset_bar, small_gap);
  html_centered(reset_bar);
  function reset_to_current() {
    html_value_set(suggest_area, value4);
    sessionStorage.removeItem(draft_key);
    sessionStorage.removeItem(base_key);
    autosize();
  }
  app_shared_button(reset_bar, "Reset to current lines", reset_to_current);
  let reviewed_badge = null;
  let suggest_bar = html_div(container);
  html_style_margin_top(suggest_bar, small_gap);
  html_centered(suggest_bar);
  async function on_suggest() {
    try {
      let value5 = html_value_get(suggest_area);
      await app_shared_api({
        f_name: fn_name("g_verify_suggest_set"),
        args: [chapter_code, verse, value5],
      });
      ("also record it in the per-passage history so it can be viewed later; non-fatal if it fails");
      try {
        await app_shared_api({
          f_name: fn_name("g_verify_suggest_history_append"),
          args: [chapter_code, verse, value5],
        });
      } catch (ignore_hist) {
        ignore_hist;
      }
      html_clear(suggest_bar);
      let sent = html_p_text(suggest_bar, "Suggestion sent — I'll review it ✓");
      app_shared_text_deemphasized(sent);
      sessionStorage.removeItem(draft_key);
      sessionStorage.removeItem(base_key);
      ("a fresh suggestion supersedes any prior reviewed-badge, so clear the marker and hide the badge until this new one is reviewed");
      try {
        await app_shared_api({
          f_name: fn_name("g_verify_reviewed_set"),
          args: [chapter_code, "", ""],
        });
      } catch (ignore_clear) {
        ignore_clear;
      }
      if (reviewed_badge) {
        html_display_none(reviewed_badge);
      }
    } catch (failed) {
      html_clear(suggest_bar);
      let msg = html_p_text(suggest_bar, "Couldn't send — please try again.");
      app_shared_text_deemphasized(msg);
      app_shared_button(suggest_bar, "Send suggestion", on_suggest);
    }
  }
  app_shared_button(suggest_bar, "Send suggestion", on_suggest);
  ("compare two suggestions the way the READER sees them: line endings, trailing spaces and blank lines are formatting they cannot see on the page, so none of them may make an applied-as-sent suggestion look declined");
  ("did the loop apply the reviewer's last suggestion word for word? the saved lines ARE what Claude decided, so comparing them with the newest suggestion for this verse answers it — no extra state to write and nothing that can disagree with the page");
  ("show a badge if the loop has already reviewed a suggestion for this verse, so the reviewer knows it was seen and handled — and when the saved lines match what they sent, SAY that it was taken as sent, because accepted and declined are the two answers they are waiting for and the neutral wording cannot tell them apart");
  async function reviewed_show() {
    try {
      let r = await app_shared_api({
        f_name: fn_name("g_verify_reviewed_read"),
        args: [chapter_code],
      });
      let reviewed_verse = property_get(r, "verse");
      if (equal(reviewed_verse, verse)) {
        let note = property_get(r, "note");
        let text = "✓ Claude reviewed your suggestion for v" + verse;
        let applied = await app_g_verify_view_suggestion_applied_is(
          chapter_code,
          verse,
          value4,
          ignore_applied,
        );
        if (applied) {
          text =
            "✓ Claude used your suggestion for v" + verse + " as you sent it";
        }
        if (note) {
          text = text + " — " + note;
        }
        let badge = html_p_text(container, text);
        app_shared_text_deemphasized(badge);
        let value9 = app_shared_font_size_label();
        html_style_font_size(badge, value9);
        html_style_margin_top(badge, small_gap);
        reviewed_badge = badge;
      }
    } catch (ignore) {
      ignore;
    }
  }
  reviewed_show();
  ("show the reviewer their own past suggestions for this verse; Load drops one back into the box to view or build on");
  async function history_show() {
    try {
      let all = await app_shared_api({
        f_name: fn_name("g_verify_suggest_history_read"),
        args: [chapter_code],
      });
      let mine = [];
      function lambda_hist(h) {
        let left = property_get(h, "verse");
        if (equal(left, verse)) {
          mine.push(h);
        }
      }
      all.forEach(lambda_hist);
      if (greater_than_equal(mine.length, 1)) {
        label_new("YOUR PAST SUGGESTIONS FOR v" + verse);
        function lambda_show(h) {
          let box = app_shared_container_base(container);
          let t = property_get(h, "text");
          let txt = html_p_text(box, t);
          html_style_white_space(txt, "pre-wrap");
          app_shared_text_deemphasized(txt);
          let value10 = app_g_verify_note_font_size();
          html_style_font_size(txt, value10);
          function load_this() {
            html_value_set(suggest_area, t);
            draft_save();
            autosize();
          }
          app_shared_button(box, "Load into box", load_this);
        }
        mine.forEach(lambda_show);
      }
    } catch (ignore_h) {
      ignore_h;
    }
  }
  history_show();
}
