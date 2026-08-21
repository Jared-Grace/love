import { modulo } from "./modulo.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { list_add } from "./list_add.mjs";
export function bible_dream_sample_arc(from, to, count, loop) {
  "Hand back the numbers of every sample lying between two of them, walking the shorter of the two ways round when the stroke is a loop.";
  "★ THE SHORTER WAY IS THE ONE THE HAND WENT AND THE LONGER WAY IS THE REST OF THE SHAPE. On a ring every pair of points has two paths between them, and marking the wrong one hands a player the whole cow for one small movement. It is safe to take the shorter way here only because the caller found the far end inside a window a dozen samples wide, so the two are near neighbours and the long way round is most of the ring.";
  "On a line there is only one way between two samples and which of them is the larger number does not matter, so both orders are walked the same.";
  let numbers = [];
  if (loop) {
    let left = subtract(to, from);
    let ahead = modulo(modulo(left, count) + count, count);
    let behind = subtract(count, ahead);
    let steps = ahead;
    let way = 1;
    if (less_than(behind, ahead)) {
      steps = behind;
      way = subtract(0, 1);
    }
    let walked = 0;
    while (less_than_equal(walked, steps)) {
      let moved = from + multiply(way, walked);
      let item = modulo(modulo(moved, count) + count, count);
      list_add(numbers, item);
      walked = walked + 1;
    }
    return numbers;
  }
  let low = from;
  let high = to;
  if (less_than(to, from)) {
    low = to;
    high = from;
  }
  let index = low;
  while (less_than_equal(index, high)) {
    list_add(numbers, index);
    index = index + 1;
  }
  return numbers;
}
