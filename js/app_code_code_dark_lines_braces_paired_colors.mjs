import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_empty } from "./text_empty.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { html_text_code_breakable_add } from "./html_text_code_breakable_add.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { modulo } from "./modulo.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
export function app_code_code_dark_lines_braces_paired_colors(
  component,
  code,
  colors,
) {
  arguments_assert(arguments, 3);
  ("code standing on more than one line, written into a code chip with every pair of braces drawn on a colour of its own out of colors, taken in the order the pairs open, so a { and the } that closes it wear the same colour. They go round again after the last, which no program in this app comes near.");
  ("The colours are handed in rather than chosen here, so two drawings that must agree - a program and its braces written out under it, or a line of braces drawn again after every tap - are given the one list and cannot disagree.");
  ("The pairs are found by the same count a learner is taught, one brace at a time, so what the colours say and what the counting says cannot disagree.");
  ("The chip is emptied first, because what goes in is a run of pieces, and a chip drawn twice would otherwise keep the first drawing underneath the second.");
  html_style_code_dark(component);
  html_style_white_space(component, "pre-wrap");
  html_text_align_left(component);
  let nothing = text_empty();
  html_text_set(component, nothing);
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let plain = "";
  for (let i = 0; less_than(i, code.length); i++) {
    let c = code[i];
    if (equal(c, left) || equal(c, right)) {
      let opening = i;
      if (equal(c, right)) {
        opening = js_code_brace_partner_index(code, i);
      }
      let pair = 0;
      for (let j = 0; less_than(j, opening); j++) {
        if (equal(code[j], left)) {
          pair += 1;
        }
      }
      html_text_code_breakable_add(component, plain, html_span_text);
      plain = "";
      let color = colors[modulo(pair, colors.length)];
      html_span_text_code_background(component, c, color);
    } else {
      plain += c;
    }
  }
  html_text_code_breakable_add(component, plain, html_span_text);
}
