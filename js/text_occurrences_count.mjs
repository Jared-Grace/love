import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function text_occurrences_count(t, s) {
  "How many times a word appears in a text";
  "Counted by cutting the text at the word and seeing how many pieces are left, because cutting at something that appears twice leaves three pieces and cutting at something absent leaves the text whole. That is the same cutting the replacing does, so the count and the replacement can never disagree about what was there - a count worked out a different way could say one while the replacement changed two.";
  "The pieces do not overlap, which is what somebody replacing wants: replacing has to choose non-overlapping places anyway, and a count that included overlapping ones would promise more changes than any replacement could make.";
  arguments_assert(arguments, 2);
  let pieces = text_split(t, s);
  let size = list_size(pieces);
  let count = subtract(size, 1);
  return count;
}
