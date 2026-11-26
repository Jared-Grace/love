import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { math_max } from "./math_max.mjs";
export function app_bible_record_text_layout_first_room(height, margin, under) {
  arguments_assert(arguments, 3);
  let room_low = multiply(height, 0.45);
  let right = multiply(margin, 3);
  let a = subtract(under, right);
  let first_room = math_max(a, room_low);
  return first_room;
}
