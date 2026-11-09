import { list_alphabet_lower } from "./list_alphabet_lower.mjs";
import { digits } from "./digits.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_at_most } from "./reply_at_most.mjs";
export function reply_at_most_alphanumeric(count) {
  "$plain count";
  "Any letters and digits at all, or none, up to count of them - the code at the end of a link.";
  let letters = list_alphabet_lower();
  let numbers = digits();
  let characters = [...letters, ...numbers];
  let one = reply_choice(characters);
  let code = reply_at_most(count, one);
  return code;
}
