import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_if_blocks } from "./app_code_if_blocks.mjs";
import { html_div } from "./html_div.mjs";
import { html_flex_column_stretch } from "./html_flex_column_stretch.mjs";
import { app_code_flex_gap } from "./app_code_flex_gap.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_add } from "./list_add.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { sleep } from "./sleep.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_height } from "./html_height.mjs";
import { html_height_animate } from "./html_height_animate.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { list_all } from "./list_all.mjs";
import { property_set } from "./property_set.mjs";
import { html_element_width } from "./html_element_width.mjs";
import { html_transition_transform_set } from "./html_transition_transform_set.mjs";
import { html_pixels_text } from "./html_pixels_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_translation_transition_clear } from "./html_translation_transition_clear.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { html_style_clear } from "./html_style_clear.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_if_block_reached } from "./app_code_if_block_reached.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_code_braces_run_output_show } from "./app_code_braces_run_output_show.mjs";
import { app_code_braces_color_next } from "./app_code_braces_color_next.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { app_code_div_braces_painted } from "./app_code_div_braces_painted.mjs";
import { app_code_quiz_choice_button_answer } from "./app_code_quiz_choice_button_answer.mjs";
export function app_code_braces_run_choose(parent, code, on_wrong, on_success) {
  arguments_assert(arguments, 4);
  ("a program whose sections are asked about one at a time, its braces drawn in a colour: does this { ... } run? Once the right answer is pressed, the program is taken a step towards what runs of it. A section that does not run is swallowed: what is inside its braces fades out, and the braces close up over the room it took. A section that runs loses the if, or the if () { } else {, around it and its last }, and its lines move diagonally out and up to where they now stand. Asked for by the human 2026-10-11");
  ("What each answer does is ",
    fn_name("app_code_if_blocks"),
    "'s to say, so the program shown at the end is the one ",
    fn_name("app_code_if_blocks_kept"),
    " writes out as the answer.");
  ("Every letter is its own piece of the page, so any stretch of the program can fade however it falls across lines; a line goes once everything written on it has faded, which is what makes the braces close up rather than leave a hole.");
  ("The answers are the choices of every other question in this app with choices, so they look and behave the same: a wrong one turns red and is spent, the right one turns green.");
  let blocks = app_code_if_blocks(code);
  let wrap = html_div(parent);
  html_flex_column_stretch(wrap);
  app_code_flex_gap(wrap);
  let div = html_div(wrap);
  html_style_code_dark(div);
  html_style_white_space(div, "pre-wrap");
  html_text_align_left(div);
  ("The letters stand in a list whose places are the program's own places, a line's end taking a place that holds nothing, so a letter is found by where it stands in the program. Not picked: an object keyed by those numbers, which said the same but could not be proved safe to edit, so every change here needed the human.");
  let spans = [];
  let faded = [];
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
      let letter = code.charAt(i);
      let span = html_span_text(line_div, letter);
      list_add(spans, span);
      if (not_equal(letter, " ")) {
        list_add(written, i);
      }
    }
    list_add(spans, null);
    list_add(rows, {
      line_div,
      start,
      end,
      written,
      gone: false,
      moved: 0,
    });
  }
  let duration = app_shared_animation_duration();
  async function fade(ranges) {
    "every letter of every stretch fades out, all at once";
    for (let r of ranges) {
      let from = property_get(r, "from");
      let to = property_get(r, "to");
      for (let i = from; less_than(i, to); i++) {
        let span = list_get(spans, i);
        if (equal(span, null)) {
          continue;
        }
        let value = text_combine_multiple(["opacity ", duration, "ms"]);
        html_transition_set(span, value);
        html_style_opacity(span, "0");
        list_add(faded, i);
      }
    }
    await sleep(duration);
  }
  function faded_is(i) {
    let f = list_includes(faded, i);
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
  async function row_outdent(row, size) {
    "a line slides left by size letters, and the spaces it slid over are then taken out, so it ends where it slid to";
    let line_div = property_get(row, "line_div");
    let start = property_get(row, "start");
    let moved = property_get(row, "moved");
    let from = start + moved;
    let to = from + size;
    let width = 0;
    for (let i = from; less_than(i, to); i++) {
      let span = list_get(spans, i);
      width = width + html_element_width(span);
    }
    html_transition_transform_set(line_div, duration);
    let pixels = html_pixels_text(-width);
    let style_value = text_combine_multiple(["translateX(", pixels, ")"]);
    html_style_set(line_div, "transform", style_value);
    await sleep(duration);
    for (let i = from; less_than(i, to); i++) {
      let span = list_get(spans, i);
      html_display_none(span);
    }
    html_translation_transition_clear(line_div);
    let value2 = subtract(to, start);
    property_set(row, "moved", value2);
  }
  async function outdent(dedent) {
    "the lines between a pair of braces move out by the indent they were given, all at once";
    if (equal(dedent, null)) {
      return;
    }
    let from = property_get(dedent, "from");
    let to = property_get(dedent, "to");
    let size = property_get(dedent, "size");
    let moving = [];
    for (let row of rows) {
      let start = property_get(row, "start");
      let end = property_get(row, "end");
      if (less_than(from, start) && less_than(end, to)) {
        let item2 = row_outdent(row, size);
        list_add(moving, item2);
      }
    }
    await Promise.all(moving);
  }
  async function step_run(step) {
    "a step fades what it fades, then the empty lines close up as the lines it moves slide out, so they go diagonally";
    let fades = property_get(step, "fades");
    await fade(fades);
    let dedent = property_get(step, "dedent");
    let v = swallow();
    let v2 = outdent(dedent);
    await Promise.all([v, v2]);
  }
  function braces_plain(block) {
    "a pair's braces go back to the code's own colours, unless they have faded";
    let open = property_get(block, "open");
    let close = property_get(block, "close");
    for (let i of [open, close]) {
      let b2 = faded_is(i);
      if (not(b2)) {
        let span = list_get(spans, i);
        html_style_clear(span);
      }
    }
  }
  let ask = html_div(wrap);
  html_flex_column_stretch(ask);
  app_code_flex_gap(ask);
  let state = {
    index: 0,
  };
  async function next() {
    "the next section still reached is asked about; once none is left, the program is done";
    let index = property_get(state, "index");
    while (
      less_than(index, list_size(blocks)) &&
      not(app_code_if_block_reached(blocks, index))
    ) {
      index = index + 1;
    }
    property_set(state, "index", index);
    let b3 = list_size(blocks);
    if (greater_than_equal(index, b3)) {
      ("the question goes for good once the program is done, so nothing is written into it again after the wait");
      html_clear(ask);
      await app_code_braces_run_output_show(wrap, code, on_success);
      return;
    }
    html_clear(ask);
    let block = list_get(blocks, index);
    let open = property_get(block, "open");
    let close = property_get(block, "close");
    let runs = property_get(block, "runs");
    let color = app_code_braces_color_next();
    for (let i of [open, close]) {
      let span = list_get(spans, i);
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
    ("The answers stand in a plain block, as a multiple choice quiz's do, so the space between them is the buttons' own margins, which meet and collapse: a flex column would add its gap to both margins.");
    let choices = html_div(ask);
    let answered = {
      answered: false,
    };
    async function on_right() {
      "the section's steps are taken, its braces lose their colour, and the next section is asked about";
      let steps = property_get(block, "steps");
      for (let step of steps) {
        await step_run(step);
      }
      braces_plain(block);
      property_set(state, "index", index + 1);
      next();
    }
    function choice_add(yes, words) {
      "one answer, its braces coloured as the section's are";
      let right2 = equal(yes, runs);
      let b = app_code_quiz_choice_button_answer(
        choices,
        "",
        right2,
        answered,
        on_right,
        on_wrong,
      );
      app_code_div_braces_painted(b, [
        words[0],
        left,
        [" ... "],
        right,
        words[1],
      ]);
    }
    choice_add(true, [["Yes, "], [" runs"]]);
    choice_add(false, [["No, "], [" does not run"]]);
  }
  next();
}
