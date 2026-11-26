import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
export function app_bible_record_text_layout_tall(size, lines, margin) {
  arguments_assert(arguments, 3);
  let left = multiply(size, 0.7);
  let left2 = multiply(lines.length, size);
  let r =
    margin +
    multiply(left, 1.4) +
    multiply(left2, 1.25) +
    multiply(margin, 0.5);
  return r;
}
