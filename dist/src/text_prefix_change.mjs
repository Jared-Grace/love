import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
export function text_prefix_change(t, before, after) {
  let without = text_prefix_without(t, before);
  let together = text_combine(after, without);
  return together;
}
