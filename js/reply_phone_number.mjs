import { reply_phone_codes_lengths } from "./reply_phone_codes_lengths.mjs";
import { reply_sequence_optional } from "./reply_sequence_optional.mjs";
import { reply_digits_exactly } from "./reply_digits_exactly.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phone_number() {
  "A phone number: a country calling code, maybe a leading 0, then as many digits as that code allows.";
  "The count is what says it is a phone number. 92 alone is not one, and neither is 92 followed by three digits.";
  let rows = reply_phone_codes_lengths();
  let o_zero = reply_sequence_optional(["0"]);
  let numbers = [];
  for (let row of rows) {
    let rests = row.lengths.map(reply_digits_exactly);
    let rest = reply_choice(rests);
    let number = reply_sequence([row.code, o_zero, rest]);
    numbers.push(number);
  }
  let any = reply_choice(numbers);
  return any;
}
