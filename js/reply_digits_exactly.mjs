import { digits } from "./digits.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { list_value_repeat } from "./list_value_repeat.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_digits_exactly(count) {
  "Exactly this many digits, no fewer and no more.";
  let choices = digits();
  let one = reply_choice(choices);
  let pieces = list_value_repeat(one, count);
  let exactly = reply_sequence(pieces);
  return exactly;
}
