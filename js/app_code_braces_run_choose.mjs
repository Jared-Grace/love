import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_if_blocks } from "./app_code_if_blocks.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_size } from "./text_size.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { sleep } from "./sleep.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { html_height } from "./html_height.mjs";
import { html_height_animate } from "./html_height_animate.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { list_all } from "./list_all.mjs";
import { html_style_clear } from "./html_style_clear.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_clear } from "./html_clear.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_braces_color_next } from "./app_code_braces_color_next.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_div_braces_painted } from "./app_code_div_braces_painted.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { html_button } from "./html_button.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
export function app_code_braces_run_choose(parent, code, on_wrong, on_success) {
  arguments_assert(arguments, 4);
  ("a program whose sections are asked about one at a time, its braces drawn in a colour: does this { ... } run? A section that does not run is swallowed: what is inside its braces fades out, and the braces close up over the room it took. An if with no else then fades out whole and the lines below close up; an else fades out from the end of its if. Asked for by the human 2026-10-11");
  ("Every letter is its own piece of the page, so any stretch of the program can fade however it falls across lines; a line goes once everything written on it has faded, which is what makes the braces close up rather than leave a hole.");
  ("A section inside one that has been swallowed is never asked about, because it is never reached; it went with the section around it.");
  let blocks = app_code_if_blocks(code);
  let div = html_div(parent);
  html_style_code_dark(div);
  html_style_white_space(div, "pre-wrap");
  html_text_align_left(div);
  let spans = {};
  let faded = {};
  let rows = [];
  let lines = text_split_newline(code);
  let line_start = 0;
  for (let line of lines) {
    let start = line_start;
    let end = start + text_size(line);
    line_start = end + 1;
    let line_div = html_div(div);
    let written = [];
    for (let i = start; less_than(i, end); i++) {
      let letter = code[i];
      let span = html_span_text(line_div, letter);
      property_set(spans, i, span);
      if (not_equal(letter, " ")) {
        list_add(written, i);
      }
    }
    list_add(rows, {
      line_div,
      written,
      gone: false,
    });
  }
  let duration = app_shared_animation_duration();
  async function fade(from, to) {
    "every letter from one place up to another fades out";
    for (let i = from; less_than(i, to); i++) {
      let span = property_get_or_null(spans, i);
      if (equal(span, null)) {
        continue;
      }
      let value = text_combine_multiple(["opacity ", duration, "ms"]);
      html_transition_set(span, value);
      html_style_opacity(span, "0");
      property_set(faded, i, true);
    }
    await sleep(duration);
  }
  function faded_is(i) {
    let f = property_exists(faded, i);
    return f;
  }
  async function row_shrink(row) {
    "a line whose writing has all faded closes up";
    let line_div = property_get(row, "line_div");
    let height = html_height(line_div);
    await html_height_animate(line_div, height, 0, duration);
    html_display_none(line_div);
  }
  async function swallow() {
    "every line with nothing left on it closes up, all at once";
    let shrinking = [];
    for (let row of rows) {
      let gone = property_get(row, "gone");
      if (gone) {
        continue;
      }
      let written = property_get(row, "written");
      if (list_all(written, faded_is)) {
        property_set(row, "gone", true);
        let item = row_shrink(row);
        list_add(shrinking, item);
      }
    }
    await Promise.all(shrinking);
  }
  function braces_plain(block) {
    "a pair's braces go back to the code's own colours, unless they have faded";
    for (let key of ["open", "close"]) {
      let i = property_get(block, key);
      let b = faded_is(i);
      if (not(b)) {
        let span = property_get(spans, i);
        html_style_clear(span);
      }
    }
  }
  let ask = html_div(parent);
  let state = {
    index: 0,
    skipped: [],
  };
  function next() {
    "the next section still reached is asked about; once none is left, the program is done";
    let index = property_get(state, "index");
    let skipped = property_get(state, "skipped");
    while (
      less_than(index, list_size(blocks)) &&
      list_includes(skipped, index)
    ) {
      index = index + 1;
    }
    property_set(state, "index", index);
    html_clear(ask);
    let b2 = list_size(blocks);
    if (greater_than_equal(index, b2)) {
      on_success();
      return;
    }
    let block = list_get(blocks, index);
    let open = property_get(block, "open");
    let close = property_get(block, "close");
    let runs = property_get(block, "runs");
    let color = app_code_braces_color_next();
    for (let i of [open, close]) {
      let span = property_get(spans, i);
      html_style_background_color_set(span, color);
      html_font_color_set_white(span);
    }
    let left = {
      brace: js_code_brace_left(),
      color,
    };
    let right = {
      brace: js_code_brace_right(),
      color,
    };
    app_code_div_braces_painted(ask, [
      ["Does this "],
      left,
      [" ... "],
      right,
      [" run?"],
    ]);
    let busy = {
      on: false,
    };
    async function answer(yes, button) {
      "a right answer swallows the section when it does not run, then moves on; a wrong one is marked red";
      if (property_get(busy, "on")) {
        return;
      }
      if (not_equal(yes, runs)) {
        app_code_lesson_quiz_wrong_set(button);
        on_wrong();
        return;
      }
      property_set(busy, "on", true);
      html_data_set_test_happy_remove(button);
      if (not(runs)) {
        await fade(open + 1, close);
        await swallow();
        let after = property_get(block, "after");
        if (not_equal(after, null)) {
          let value2 = property_get(after, "from");
          let value3 = property_get(after, "to");
          await fade(value2, value3);
          await swallow();
        }
        for (let j = index + 1; less_than(j, list_size(blocks)); j++) {
          let inner = list_get(blocks, j);
          let inner_open = property_get(inner, "open");
          if (less_than(open, inner_open) && less_than(inner_open, close)) {
            list_add(skipped, j);
          }
        }
      }
      braces_plain(block);
      property_set(state, "index", index + 1);
      next();
    }
    function button_add(yes, words) {
      "one answer, its braces coloured as the section's are";
      function on_tap() {
        answer(yes, button);
      }
      let button = html_button(ask, "", on_tap);
      app_code_div_braces_painted(button, [
        words[0],
        left,
        [" ... "],
        right,
        words[1],
      ]);
      if (equal(yes, runs)) {
        html_data_set_test_happy(button);
      }
    }
    button_add(true, [["Yes, "], [" runs"]]);
    button_add(false, [["No, "], [" does not run"]]);
  }
  next();
}
