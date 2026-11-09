import { greater_than_equal } from "./greater_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_learn_js_code_dots_chip_add } from "./app_learn_js_code_dots_chip_add.mjs";
import { each_index } from "./each_index.mjs";
export function app_learn_js_cycle_code(parent, parts) {
  arguments_assert(arguments, 2);
  ("this is likely interweaving text and code, so code should not wrap");
  ("a code part goes through ",
    fn_name("app_learn_js_code_dots_chip_add"),
    ", so the three dots in if (a) { ... } come out in the placeholder grey, asked for by the human 2026-10-09");
  ("an opening bracket at the end of the text before a code chip, and closing punctuation at the start of the text after one, stay on the chip's line. A chip is an inline block, so a browser may break the line on either side of it, and a lone ( was left at the end of a line, seen by the human 2026-11-09. Each chip goes in a span that does not wrap, together with those marks; the rest of the text wraps as before");
  let size = list_size(parts);
  function text_at(index2) {
    if (greater_than_equal(index2, size)) {
      let r = "";
      return r;
    }
    let text = list_get(parts, index2);
    return text;
  }
  function opening(text2) {
    "the opening brackets a text ends with";
    let found = text2.match(/[(\[]+$/);
    if (equal(found, null)) {
      let r2 = "";
      return r2;
    }
    let r3 = found[0];
    return r3;
  }
  function closing(text3) {
    "the closing punctuation a text starts with";
    let found2 = text3.match(/^[)\],.:;!?]+/);
    if (equal(found2, null)) {
      let r4 = "";
      return r4;
    }
    let r5 = found2[0];
    return r5;
  }
  function part_add(part, index) {
    let left = modulo(index, 2);
    if (equal(left, 0)) {
      let head = "";
      if (greater_than(index, 0)) {
        head = closing(part);
      }
      let tail = "";
      if (less_than(index + 1, size)) {
        tail = opening(part);
      }
      let difference = subtract(part.length, tail.length);
      let middle = part.slice(head.length, difference);
      html_span_text(parent, middle);
      return;
    }
    let difference2 = subtract(index, 1);
    let v = text_at(difference2);
    let before = opening(v);
    let v2 = text_at(index + 1);
    let after = closing(v2);
    let group = html_span(parent);
    html_style_assign(group, {
      "white-space": "nowrap",
    });
    html_span_text(group, before);
    app_learn_js_code_dots_chip_add(group, part);
    html_span_text(group, after);
  }
  each_index(parts, part_add);
}
