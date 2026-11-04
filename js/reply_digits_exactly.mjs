import { less_than } from "./less_than.mjs";
import { digits } from "./digits.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_digits_exactly(count) {
  "Exactly this many digits, no fewer and no more.";
  let choices = digits();
  let one = reply_choice(choices);
  let pieces = [];
  let i = 0;
  while (less_than(i, count)) {
    pieces.push(one);
    i = i + 1;
  }
  let exactly = reply_sequence(pieces);
  return exactly;
}
