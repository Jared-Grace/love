import { arguments_assert } from "./arguments_assert.mjs";
export function urdu_roman_spellings_most() {
  "How many of a word's Latin spellings get looked for, counting from the one most people gave it.";
  "There has to be a number because the spellings of the pieces are multiplied together. A word cut into three pieces with every spelling of each kept would be looked for hundreds of ways, and the whole reading is already a scan of a whole Bible for every one of them.";
  "Three rather than one because one would be a guess wearing a list's clothes, and the list exists precisely because there is no single right spelling. Three rather than all because the tail of the list is where the spellings one person typed once live, and a spelling one person typed once is not evidence about how a Bible is printed.";
  "It is the same number for the joined-up spelling and for the spaced one, so that neither side of the comparison is looked for more thoroughly than the other. Two different numbers here would put a thumb on the scale of whichever got the larger one, and the thing being weighed is exactly which of the two the printing prefers.";
  arguments_assert(arguments, 0);
  let most = 3;
  return most;
}
