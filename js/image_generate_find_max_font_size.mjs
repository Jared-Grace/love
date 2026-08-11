import { arguments_assert } from "./arguments_assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { add } from "./add.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
export function image_generate_find_max_font_size(wrapText, text, MAX_HEIGHT) {
  arguments_assert(arguments, 3);
  let low = 10;
  let high = 500;
  let best = low;
  while (less_than_equal(low, high)) {
    let top = add(low, high);
    let mid = divide_floor(top, 2);
    let lines_tried = wrapText(text, mid);
    let line_height_tried = multiply(mid, 1.25);
    let totalHeight = multiply(lines_tried.length, line_height_tried);
    if (less_than_equal(totalHeight, MAX_HEIGHT)) {
      best = mid;
      low = add(mid, 1);
    } else {
      high = subtract(mid, 1);
    }
  }
  return best;
}
