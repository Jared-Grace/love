import { text_take } from "./text_take.mjs";
import { text_index_of } from "./text_index_of.mjs";
export function text_index_of_take(skipped, item) {
  let index = text_index_of(skipped, item);
  let taken = text_take(skipped, index);
  return taken;
}
