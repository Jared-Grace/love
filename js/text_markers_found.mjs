import { list_filter } from "./list_filter.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function text_markers_found(text, markers) {
  "Which of a set of phrases stand somewhere in one piece of text, whatever capitals it was written with.";
  "Which ones were found comes back rather than whether any were, because a reader shown a sentence and told only that something in it matched has to hunt for the phrase themselves. It costs nothing to keep, and a caller wanting the plain yes or no asks whether the answer is empty.";
  "The wording is given a space at the front before anything is looked for in it, because every phrase looked for carries the space that has to stand before it and one opening a sentence has nothing in front of it to find.";
  let lower = text_lower_to(text);
  let padded = text_combine(" ", lower);
  function marker_found(marker) {
    let found = text_includes(padded, marker);
    return found;
  }
  let standing = list_filter(markers, marker_found);
  return standing;
}
