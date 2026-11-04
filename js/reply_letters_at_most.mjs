import { list_alphabet_lower } from "./list_alphabet_lower.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_at_most } from "./reply_at_most.mjs";
export function reply_letters_at_most(count) {
  "Any letters at all, or none, up to a limit.";
  "It stands where a word cannot be listed, such as the name of a street. Spaces are gone by the time a rule reads a message, so the only way left to keep it to a word or two is to count letters. A long sentence does not fit. A short one does, so a closed word has to stand beside this.";
  let letters = list_alphabet_lower();
  let one = reply_choice(letters);
  let piece = reply_at_most(count, one);
  return piece;
}
