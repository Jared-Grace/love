import { math_max } from "./math_max.mjs";
import { subtract } from "./subtract.mjs";
export function text_remove_end(t, count) {
  let v = math_max(0, subtract(t.length, count));
  let remaining = t.slice(0, v);
  return remaining;
}
