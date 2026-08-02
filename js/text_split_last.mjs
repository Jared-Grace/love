import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_last } from "./list_last.mjs";
export function text_split_last(text, separator) {
  arguments_assert(arguments, 2);
  ("What stands after the last of a word, when a line is cut at every one of them.");
  ("A line naming a file that moved keeps the new name after an arrow; a line a");
  ("gate complained on keeps its complaint after a marker. Both cut the line up");
  ("only to throw every piece away but the last, and the pieces in between have no");
  ("meaning of their own in either.");
  ("The last rather than the second, because a line may hold the word more than");
  ("once and the tail is what either of them is after.");
  let parts = text_split(text, separator);
  let last = list_last(parts);
  return last;
}
