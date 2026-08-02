import { abs } from "./abs.mjs";
import { subtract } from "./subtract.mjs";
export function numbers_apart(a, b) {
  "How far apart two numbers are, whichever of them is the larger.";
  "Named for the distance rather than for anything the numbers stand for. The same three lines were being written out for a gap between two times, a gap between two colour channels, and a gap between two positions on a map, and the one of those that had a name of its own named times - so every other place that called it would have read as if it were doing something with dates.";
  let difference = subtract(a, b);
  let v = abs(difference);
  return v;
}
