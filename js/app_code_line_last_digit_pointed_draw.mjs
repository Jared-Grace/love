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
        let last = piece.slice(-1);
        let before = piece.slice(0, -1);
        let color = color_get(last);
        let number = /^\d+$/.test(piece);
        if (number && text_empty_not_is(before) && not_equal(color, plain)) {
          pieces.push(before, last);
          colors.push(plain, color);
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
