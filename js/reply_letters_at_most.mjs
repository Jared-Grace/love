import { subtract } from "./subtract.mjs";
import { list_alphabet_lower } from "./list_alphabet_lower.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { each_range } from "./each_range.mjs";
export function reply_letters_at_most(count) {
  "Any letters at all, or none, up to a limit.";
  "It stands where a word cannot be listed, such as the name of a street. Spaces are gone by the time a rule reads a message, so the only way left to keep it to a word or two is to count letters. A long sentence does not fit. A short one does, so a closed word has to stand beside this.";
  let letters = list_alphabet_lower();
  let one = reply_choice(letters);
  let piece = reply_optional(one);
  function one_longer(i) {
    let longer = reply_sequence([one, piece]);
    piece = reply_optional(longer);
  }
  let count2 = subtract(count, 1);
  each_range(count2, one_longer);
  return piece;
}
