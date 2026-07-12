import { subtract } from "./subtract.mjs";
export function text_remove_end(t, count) {
  let v = Math.max(0, subtract(t.length, count));
  let remaining = t.slice(0, v);
  return remaining;
}
