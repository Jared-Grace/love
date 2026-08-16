import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
export function image_generate_line_draw(
  line,
  i,
  WIDTH,
  lineHeight,
  startY,
  ctx,
) {
  arguments_assert(arguments, 6);
  let divided = divide(WIDTH, 2);
  let right = multiply(i, lineHeight);
  ("the two are numbers and the answer wanted is their sum, so the summing one is asked for. Its twin joins two pieces of text and both are written the same way underneath, so the picture came out right either way - but a reader meeting the joining one here has to work out that a height added to a height is not a word stuck onto a word.");
  let combined = add(startY, right);
  ctx.fillText(line, divided, combined);
}
