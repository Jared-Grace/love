import { reply_either_both } from "./reply_either_both.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_either_both_unordered(first, second) {
  "Either one alone, or both in either order.";
  let forward = reply_either_both(first, second);
  let reversed = reply_sequence([second, first]);
  let either = reply_choice([forward, reversed]);
  return either;
}
