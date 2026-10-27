import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_if_blocks } from "./app_code_if_blocks.mjs";
import { list_size } from "./list_size.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { app_code_if_block_reached } from "./app_code_if_block_reached.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_braces_color_next } from "./app_code_braces_color_next.mjs";
import { app_code_if_blocks_lines_kept } from "./app_code_if_blocks_lines_kept.mjs";
import { app_code_div_braces_painted } from "./app_code_div_braces_painted.mjs";
export function app_code_braces_run_walkthrough(root, code) {
  arguments_assert(arguments, 2);
  ("the worked example's answering written out, one box per section reached: the program as it stands, that section's braces drawn in a colour, Does this { ... } run?, why, and the answer; then the program once every section is answered. Asked for by the human 2026-10-12, so the writing above a Does this section run? lesson explains the exercise it asks, rather than what the code writes out, which is the lesson after's.");
  ("The reason is said before the answer, the proof before what it proves. A section asking a name runs as that name is true or false; one after a section of the same if that ran does not run, whatever it asks; an else runs when no section before it ran. A section inside one that did not run is never reached, so it is never asked, as in the exercise.");
  ("What the answers do to the program is ",
    fn_name("app_code_if_blocks"),
    "'s steps, the ones the exercise animates, so each box shows the program the exercise would be showing at that question. Not picked: the exercise itself answering on its own, which shows the steps but cannot stop to say why.");
  let blocks = app_code_if_blocks(code);
  let count = list_size(blocks);
  let brace_left = js_code_brace_left();
  let brace_right = js_code_brace_right();
  function program_draw(parent, lines, block, color) {
    "the program as its lines stand, block's braces in color when there is a block";
    let div = html_div(parent);
    html_style_code_dark(div);
    html_style_white_space(div, "pre-wrap");
    html_text_align_left(div);
    for (let line of lines) {
      let line_div = html_div(div);
      for (let i of line) {
        let letter = code.charAt(i);
        let span = html_span_text(line_div, letter);
        if (equal(block, null)) {
          continue;
        }
        let open = property_get(block, "open");
        let close = property_get(block, "close");
        if (equal(i, open) || equal(i, close)) {
          html_style_background_color_set(span, color);
          html_font_color_set_white(span);
        }
      }
    }
  }
  function reason_parts(block) {
    "why a section runs or does not, as plain writing and code taking turns";
    let asked = property_get(block, "asked");
    let runs = property_get(block, "runs");
    let before_ran = property_get(block, "before_ran");
    if (before_ran) {
      let parts = ["A ", "{ ... }", " before it in the same ", "if", " ran"];
      return parts;
    }
    if (equal(asked, null)) {
      let parts2 = ["No ", "{ ... }", " before it in the same ", "if", " ran"];
      return parts2;
    }
    let value = runs ? "true" : "false";
    let parts3 = ["", asked, " is ", value];
    return parts3;
  }
  function removed_lines(block) {
    "what the answer takes out of the program, a line each, as plain writing and code taking turns";
    "Asked for by the human 2026-10-12: because this, then we remove that, and now we have. Said in words the learner already has, its lines and this if, rather than naming each brace and header that goes: the program drawn next shows exactly which. Not picked: naming the if (a) { and } else { that go one by one, which is longer than the picture it describes.";
    let runs = property_get(block, "runs");
    let is_last = property_get(block, "is_last");
    let ran_any = property_get(block, "ran_any");
    if (not(is_last)) {
      let line = runs ? ["So its lines stay"] : ["So its lines are removed"];
      let r = [line];
      return r;
    }
    if (runs) {
      let line2 = [
        "So its lines stay, and the rest of this ",
        "if",
        " is removed",
      ];
      let r2 = [line2];
      return r2;
    }
    let gone = ["So its lines are removed"];
    if (ran_any) {
      let line3 = [
        "Only the lines of the ",
        "{ ... }",
        " that ran stay. The rest of this ",
        "if",
        " is removed",
      ];
      let r3 = [gone, line3];
      return r3;
    }
    let line4 = [
      "No ",
      "{ ... }",
      " of this ",
      "if",
      " ran, so all of this ",
      "if",
      " is removed",
    ];
    let r4 = [gone, line4];
    return r4;
  }
  let first = true;
  for (let n = 0; less_than(n, count); n++) {
    let b = app_code_if_block_reached(blocks, n);
    if (not(b)) {
      continue;
    }
    let block = list_get(blocks, n);
    let runs = property_get(block, "runs");
    let box = app_code_container_light_blue(root);
    if (first) {
      app_code_div_cycle_code(box, ["For example:"]);
      first = false;
    }
    let color = app_code_braces_color_next();
    let lines = app_code_if_blocks_lines_kept(code, blocks, n);
    program_draw(box, lines, block, color);
    let left = {
      brace: brace_left,
      color,
    };
    let right = {
      brace: brace_right,
      color,
    };
    app_code_div_braces_painted(box, [
      ["Does this "],
      left,
      [" ... "],
      right,
      [" run?"],
    ]);
    let parts = reason_parts(block);
    app_code_div_cycle_code(box, parts);
    let words = runs ? [["Yes, "], [" runs"]] : [["No, "], [" does not run"]];
    let item = list_get(words, 0);
    let item2 = list_get(words, 1);
    app_code_div_braces_painted(box, [item, left, [" ... "], right, item2]);
    for (let removed of removed_lines(block)) {
      app_code_div_cycle_code(box, removed);
    }
    app_code_div_cycle_code(box, ["Now we have:"]);
  }
  let box_end = app_code_container_light_blue(root);
  let lines_end = app_code_if_blocks_lines_kept(code, blocks, count);
  program_draw(box_end, lines_end, null, null);
  app_code_div_cycle_code(box_end, ["So the code is as if it were only this"]);
}
