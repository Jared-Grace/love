import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { round } from "./round.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function html_move_duration_distance(rect_from, rect_to, duration) {
  arguments_assert(arguments, 3);
  ("how long a move from one place on the screen to another takes: duration for a short one, and longer the farther it goes, so the eye can follow a long flight as easily as a short one. 2026-10-23, at the human's asking, so a value sent down from its note to a line far below takes longer than one sent to the line just under it");
  ("Longer by the square root of the distance, the way a thing that speeds up and slows down evenly takes: twice as far takes not twice as long but less, so a long flight is slower to watch without dragging. Not picked: a time in proportion to the distance, a constant speed, which made a long flight drag and a short one too quick to see");
  ("Up to the reach every move is given the same time, and the time stops growing at the most, so a flight across a whole page still ends while the learner is watching");
  let reach = 100;
  let most = 2.5;
  let dx = subtract(
    rect_to.left + divide(rect_to.width, 2),
    rect_from.left + divide(rect_from.width, 2),
  );
  let dy = subtract(
    rect_to.top + divide(rect_to.height, 2),
    rect_from.top + divide(rect_from.height, 2),
  );
  let distance = Math.hypot(dx, dy);
  let divided = divide(distance, reach);
  let b = Math.sqrt(divided);
  let b2 = math_max(1, b);
  let factor = math_min(most, b2);
  let n = multiply(duration, factor);
  let r = round(n);
  return r;
}
