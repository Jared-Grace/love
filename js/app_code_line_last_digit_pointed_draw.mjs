import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_pointer_color_or_null } from "./app_code_pointer_color_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { html_div } from "./html_div.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_split } from "./text_split.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_line_last_digit_pointed_draw(parts, pointers) {
  arguments_assert(arguments, 2);
  ("THE OTHER HALF TOO, asked by the human 2026-09-28 for the all-but-the-last-digit lesson: a pointer may name the digits before the last instead, so the 12 in 123, in 12.3 and in Math.floor(123 / 10) wears the colour the kept 12 wears, and the last digit stays plain. A number whose parts no pointer names is left whole, as before.");
  ("a line of writing, text and code taking turns, where a number in the code whose last digit a pointer names wears that colour on the last digit alone - so the 3 in 123 is seen to be the same 3 as the last digit found from it, asked by the human 2026-09-28 for the last-digit lesson");
  ("pointers is a list of pairs, each the digits to colour and the colour to give them, as a pointed line takes. A code part is cut at its unbreakable spaces, as a worked sum is written. A piece that is only the digit is coloured whole, and a chip that is only one such piece takes its colour edge to edge, as a pointed line's does.");
  ("Not picked: teaching the pointed line itself to colour the ends of numbers, which would colour the 3 at the end of every 13 and 23 in every lesson that points at a 3.");
  let plain = app_shared_color_code_background();
  function color_get(piece) {
    let color = app_code_pointer_color_or_null(pointers, piece);
    if (null_is(color)) {
      return plain;
    }
    return color;
  }
  function draw(box) {
    let line = html_div(box);
    function part_draw(part, index) {
      if (text_empty_is(part)) {
        return;
      }
      let left = modulo(index, 2);
      let is_code = equal(left, 1);
      if (not(is_code)) {
        html_span_text(line, part);
        return;
      }
      let cut = text_split(part, /( )/);
      let whole = list_filter(cut, text_empty_not_is);
      let pieces = [];
      let colors = [];
      for (let piece of whole) {
        ("a piece ending in a number is cut into what comes before the number, the number but its last digit, that last digit - or the .3 after a dot - and what follows; so 123 is 12 and 3, 12.3 is 12 and .3, and Math.floor(123 is Math.floor( then 12 and 3");
        let found = piece.match(/^(\D*)(\d*)(\.?\d)(\D*)$/);
        let body = "";
        let tail = "";
        if (found) {
          body = found[2];
          tail = found[3];
        }
        let color_body = color_get(body);
        let color_tail = color_get(tail);
        let body_pointed = not_equal(color_body, plain);
        let tail_pointed = not_equal(color_tail, plain);
        if (text_empty_not_is(body) && (body_pointed || tail_pointed)) {
          let parts_found = [found[1], body, tail, found[4]];
          let colors_found = [plain, color_body, color_tail, plain];
          function found_add(text, index) {
            if (text_empty_not_is(text)) {
              pieces.push(text);
              colors.push(colors_found[index]);
            }
          }
          each_index(parts_found, found_add);
        } else {
          pieces.push(piece);
          let v = color_get(piece);
          colors.push(v);
        }
      }
      let chip = html_span_code_dark_colored(line, pieces, colors);
      html_style_assign(chip, {
        "white-space": "nowrap",
      });
      let single = list_size_1(pieces);
      if (single) {
        let only = list_first(colors);
        html_style_background_color_set(chip, only);
      }
    }
    each_index(parts, part_draw);
    return line;
  }
  return draw;
}
