import { arguments_assert } from "./arguments_assert.mjs";
export function urdu_roman_lexicon_least() {
  "The fewest words a file has to hold before it will be believed to be the Urdu spelling list at all.";
  "It is a floor and not a count. The list published holds thirty thousand words, and the point of the number is only to be far above anything a wrong stretch of bytes would come apart into and far below anything a real release would shrink to. Written as the true count it would have to be edited every time the list was fetched again, and an edit nobody remembers to make fails in the direction that hides the fault.";
  arguments_assert(arguments, 0);
  let least = 10000;
  return least;
}
