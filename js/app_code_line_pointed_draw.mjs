import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_second } from "./list_second.mjs";
import { html_div } from "./html_div.mjs";
import { equal } from "./equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { modulo } from "./modulo.mjs";
import { not } from "./not.mjs";
import { text_split } from "./text_split.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_line_pointed_draw(parts, pointers) {
  arguments_assert(arguments, 2);
  ("a line of writing for a lesson's explain list, text and code taking turns as in any other line, where each piece named by a pointer wears that pointer's colour - the colour the same thing wears in the picture above, so a 7 in a sentence and the 7 in the picture are seen to be one thing");
  ("pointers is a list of pairs, each the texts to colour and the colour to give them; the first pair naming a piece wins. A line that points at nothing passes an empty list.");
  ("A code part is cut at the unbreakable spaces a worked sum is written with and at its brackets, so Math.floor(7 / 3) === 2 can colour its 7 and its 2 and leave the rest as it was. Code written with ordinary spaces between brackets stays one piece.");
  ("A writing part that is itself a pointed text, such as blue chairs, is drawn as a tile in that colour, so words can point at a picture as numbers do. An empty part draws nothing, so two pieces of writing can stand side by side with an empty code part between them.");
  let plain = app_shared_color_code_background();
  function color_get(piece) {
    for (let pointer of pointers) {
      let texts = list_first(pointer);
      if (list_includes(texts, piece)) {
        let color = list_second(pointer);
        return color;
      }
    }
    return plain;
  }
  function draw(box) {
    let line = html_div(box);
    function text_draw(part) {
      let color = color_get(part);
      if (equal(color, plain)) {
        html_span_text(line, part);
        return;
      }
      app_code_span_text_highlight_color(line, part, color);
    }
    function part_draw(part, index) {
      if (text_empty_is(part)) {
        return;
      }
      let left = modulo(index, 2);
      let is_code = equal(left, 1);
      if (not(is_code)) {
        text_draw(part);
        return;
      }
      let cut = text_split(part, /( |\(|\))/);
      let pieces = list_filter(cut, text_empty_not_is);
      let colors = list_map(pieces, color_get);
      let chip = html_span_code_dark_colored(line, pieces, colors);
      html_style_assign(chip, {
        "white-space": "nowrap",
      });
      ("a chip that is only one number takes its colour edge to edge, so a pointed 3 reads as one blue chip rather than blue inside black");
      let single = list_size_1(pieces);
      if (single) {
        let only = list_first(colors);
        html_style_background_color_set(chip, only);
      }
    }
    each_index(parts, part_draw);
    ("the line is handed back so a caller can go on writing into it, such as a button to an earlier lesson at the end of a sentence");
    return line;
  }
  return draw;
}
