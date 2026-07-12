import { text_combine } from "./text_combine.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
export function text_prefix_change(t, before, after) {
  let without = text_prefix_without(t, before);
  let together = text_combine(after, without);
  return together;
}
