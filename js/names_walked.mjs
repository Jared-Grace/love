import { arguments_assert } from "./arguments_assert.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
export function names_walked(names, opened) {
  "$plain names";
  "$plain opened";
  "The answer a question about offenders gives: the names it found, in order, beside how many things it opened in order to find them.";
  "THE COUNT IS THE THINGS OPENED, NOT THE ONES FOUND WANTING, and that is the whole reason it travels with the names rather than being left behind. An empty list of offenders is what a clean run says, and it is equally what a run says that looked at nothing at all - one whose starting list came back empty, or whose walk stopped before it reached anything. The names alone cannot tell those two apart, and a record compared against the first would quietly accept the second.";
  "Said in order, because this is what a record on disk is compared against, and a list that came out shuffled would read as a change every time the same things were walked in a different order.";
  "How the names were found is nobody's business here, and neither is what was opened - only how much of it there was. That is what lets one shape answer for questions as far apart as which apps have no description and which of a bundle's functions could never run in a browser.";
  arguments_assert(arguments, 2);
  let sorted = list_sort_text(names);
  let walked = list_size(opened);
  let r = {
    walked,
    names: sorted,
  };
  return r;
}
