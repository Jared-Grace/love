import { text_combine } from "./text_combine.mjs";
import { gloss_back_reference_markers } from "./gloss_back_reference_markers.mjs";
import { list_any } from "./list_any.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function gloss_explain_back_reference_is(explain) {
  "Whether an explanation points the reader further up the passage instead of saying the thing itself.";
  "This needs no dictionary and no reading of the word being explained, which is why it reaches the whole store rather than the corner some outside reference happens to cover. What it finds is certain in a way a disagreement with a dictionary never is: the sentence is not a wrong explanation, it is an absent one.";
  "The wording is given a space at the front before anything is looked for in it, because every phrase looked for carries the space that has to stand before it and one opening a sentence has nothing in front of it to find.";
  let lower = text_lower_to(explain);
  let padded = text_combine(" ", lower);
  function marker_found(phrase) {
    let found = text_includes(padded, phrase);
    return found;
  }
  let markers = gloss_back_reference_markers();
  let pointing = list_any(markers, marker_found);
  return pointing;
}
