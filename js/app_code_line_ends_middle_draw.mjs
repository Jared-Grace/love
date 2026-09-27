import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_div } from "./html_div.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { equal } from "./equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
import { modulo } from "./modulo.mjs";
import { not } from "./not.mjs";
import { text_split } from "./text_split.mjs";
import { list_between_space_nb } from "./list_between_space_nb.mjs";
import { list_map } from "./list_map.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_first } from "./list_first.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_line_ends_middle_draw(parts, ends, middles) {
  arguments_assert(arguments, 3);
  ("a line of writing for a lesson's explain list, text and code taking turns as in any other line, where a number in the code that is one of the ends wears the first pointing colour and one that is a middle wears the second - the same two the number line draws them in, so a 3 in a sentence and the 3 on the picture are seen to be one number");
  ("A code part is cut at the unbreakable spaces a worked sum is written with, so 3 + 2 === 5 colours its 3 and its 5 and leaves the + and the 2 as they were. Code written with ordinary spaces is one piece and is never coloured, which keeps a line of a program looking like a line of a program.");
  ("A writing part that is itself one of the ends or middles, such as blue chairs, is drawn as a tile in that colour, so words can point at a picture as numbers do. An empty part draws nothing, so two pieces of writing can stand side by side with an empty code part between them.");
  ("ends and middles are lists of the texts to colour on this line; a line that points at nothing passes two empty lists.");
  let color_end = app_code_highlight_color();
  let color_middle = app_code_highlight_color_second();
  let plain = app_shared_color_code_background();
  let nb = text_space_nb();
  function color_get(piece) {
    if (list_includes(ends, piece)) {
      return color_end;
    }
    if (list_includes(middles, piece)) {
      return color_middle;
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
      let words = text_split(part, nb);
      let pieces = list_between_space_nb(words);
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
  }
  return draw;
}
