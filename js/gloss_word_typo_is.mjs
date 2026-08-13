import { text_edit_distance } from "./text_edit_distance.mjs";
import { text_length } from "./text_length.mjs";
import { list_max } from "./list_max.mjs";
import { less_than_or_equal } from "./less_than_or_equal.mjs";
import { greater_than_or_equal } from "./greater_than_or_equal.mjs";
import { and } from "./and.mjs";
export function gloss_word_typo_is(written, explained) {
  "Whether one word standing where another was expected is a slip of the fingers rather than a different word altogether.";
  "The two faults it separates want opposite things done about them. A gloss explaining the right word under a spelling nobody wrote is repaired by taking the passage's own spelling, and no reader has to judge anything. A gloss explaining a different word entirely has drifted off the passage, and the only repair is somebody who reads the language deciding which word each explanation belongs to.";
  "Two edits is the ceiling because that is what a swapped pair of letters costs - the most ordinary slip there is, and the one a stricter ceiling would refuse to see.";
  "Short words are refused however close they look, and that is the whole of what keeps this safe. Two edits over three letters is most of the word, so the pair are simply different words that happen to be near each other, and correcting one to the other would put a spelling nobody wrote under an explanation about something else.";
  let distance = text_edit_distance(written, explained);
  let near = less_than_or_equal(distance, 2);
  let length_written = text_length(written);
  let length_explained = text_length(explained);
  let longest = list_max([length_written, length_explained]);
  let long_enough = greater_than_or_equal(longest, 5);
  let typo = and(near, long_enough);
  return typo;
}
