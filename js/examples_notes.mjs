import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function examples_notes() {
  "One line for each example saying what it is there to show - why it sits at the rung it sits at, rather than what it does. The reading order and the grouping live next door; this is the reason each entry earns its place.";
  "These were written beside the names they describe, as comments on the same line. Normalizing a file parses it and writes the tree back out, and a comment lives nowhere in a tree, so all thirty-four were deleted in one pass. They are data now because they always were data - curriculum text, not a note to whoever is reading the source.";
  let notes = {
    example_statement_after_address:
      "address a line by its neighbour - the first relative address, and the first tool built with no hand editing",
  };
  return notes;
}
