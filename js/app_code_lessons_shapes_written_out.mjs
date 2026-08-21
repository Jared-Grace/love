import { app_code_lessons_shapes } from "./app_code_lessons_shapes.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_right_aligned } from "./text_right_aligned.mjs";

export function app_code_lessons_shapes_written_out(rounds) {
  arguments_assert(arguments, 1);
  "The whole course as one column to read down: every lesson in the order it is learned, with how many operators stand on the hardest line it can hand out and how deep they sit.";
  "The twin next door hands back the same reading as entries to be counted and sorted. This one is for a person looking at it, and a person reading a hundred and thirty three rows is looking for where the twos end and the threes begin - which is a shape in the column rather than a number in any one row, and only shows up when the numbers line up under each other.";
  "A lesson that hands out no code writes a dash rather than a nought, because it has no line to be simple and a nought would read as the easiest lesson in the course.";
  let shapes = app_code_lessons_shapes(rounds);
  let none = "-";
  function column(place_text, ops_text, depth_text, id) {
    "one row of the column, each number ending under the one above it";
    let line = text_combine_multiple([
      text_right_aligned(place_text, 4),
      text_right_aligned(ops_text, 6),
      text_right_aligned(depth_text, 7),
      "  ",
      id,
    ]);
    return line;
  }
  let lines = [column("no", "ops", "depth", "lesson")];
  for (let shape of shapes) {
    let place = property_get(shape, "place");
    let place_text = text_combine_multiple([place]);
    let id = property_get(shape, "id");
    let code = property_get(shape, "code");
    if (not(code)) {
      let blank = column(place_text, none, none, id);
      list_add(lines, blank);
      continue;
    }
    let operators = property_get(shape, "operators");
    let ops_text = text_combine_multiple([operators]);
    let depth = property_get(shape, "depth");
    let depth_text = text_combine_multiple([depth]);
    let line = column(place_text, ops_text, depth_text, id);
    list_add(lines, line);
  }
  return lines;
}
