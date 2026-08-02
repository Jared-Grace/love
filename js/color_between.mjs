import { number_moved_round } from "./number_moved_round.mjs";
import { subtract } from "./subtract.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function color_between(t, start, end) {
  "the rgb color a fraction t (0..1) of the way from start [r,g,b] to end [r,g,b], as an 'rgb(...)' string";
  function channel(index) {
    let from = list_get(start, index);
    let to = list_get(end, index);
    let span = subtract(to, from);
    let value = number_moved_round(from, span, t);
    return value;
  }
  let r = channel(0);
  let g = channel(1);
  let b = channel(2);
  let color = text_combine_multiple(["rgb(", r, ", ", g, ", ", b, ")"]);
  return color;
}
