import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function image_generate_text_wrap(
  text_wrapping,
  fontSize,
  ctx,
  FONT_FAMILY,
  MAX_WIDTH,
) {
  arguments_assert(arguments, 5);
  ctx.font = text_combine_multiple([fontSize, "px ", FONT_FAMILY]);
  let words = text_wrapping.split(" ");
  let lines_wrapped = [];
  let line = "";
  for (let word of words) {
    let test = line ? text_combine_multiple([line, " ", word]) : word;
    if (less_than_equal(ctx.measureText(test).width, MAX_WIDTH)) {
      line = test;
    } else {
      lines_wrapped.push(line);
      line = word;
    }
  }
  if (line) {
    lines_wrapped.push(line);
  }
  return lines_wrapped;
}
