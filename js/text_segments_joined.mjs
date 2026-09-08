import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { text_shared_least } from "./text_shared_least.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { text_segment_add } from "./text_segment_add.mjs";
export function text_segments_joined(segments) {
  "A comparison with its accidental agreements folded away: any stretch the two texts share that is too short to be worth reading as a match becomes part of the difference around it, and neighbours of the same kind then join up.";
  "THIS IS WHAT MAKES A REWRITE READ AS A REWRITE. The longest shared run between two different phrases is not one run, it is every letter they happen to have in common in the right order - so a phrase swapped for another phrase came back as a dozen alternating scraps, each of them true and none of them legible. Folded, one phrase stands against the other.";
  "A LONE STRETCH IS NEVER FOLDED, and that case is the whole reason this asks how many stretches there are. Two texts that are the same are one shared stretch; measured against the least it would be dropped, and a line nobody had touched would be drawn as though every character of it had moved.";
  "ONLY THE SHARED SIDE IS MEASURED, because a difference is never too small to show. A single character that changed is exactly what a reader most wants pointed at - a capital letter, a full stop - and it is the shared runs on either side of it that make it findable.";
  "★ THE FIRST STRETCH AND THE LAST ONE ARE NEVER FOLDED, HOWEVER SHORT THEY ARE, because the scraps this exists to clear away are the ones in the middle. A short stretch between two differences is an accident - a letter the two phrases happen to share - and reading it as a match cuts the difference in half around it. A short stretch at an end is the opposite thing: it is where the two texts still agree before they part, or agree again once they have met, and nothing is being bridged by folding it.";
  "IT IS WHAT KEEPS A LINE OF CODE FROM ENDING TWICE. A line reworded near its end shares its closing - a bracket, a brace, a semicolon - and that closing is under a handful of characters, so folded it was drawn as going out and coming back in again. A reader then sees two endings and looks for a change in a place where the two lines are identical.";
  arguments_assert(arguments, 1);
  let alone = less_than(segments.length, 2);
  if (alone) {
    return segments;
  }
  let least = text_shared_least();
  let joined = [];
  let size = segments.length;
  let last_number = subtract(size, 1);
  let number = 0;
  while (less_than(number, size)) {
    let segment = segments[number];
    let shared = property_get(segment, "shared");
    let before_text = property_get(segment, "before_text");
    let after_text = property_get(segment, "after_text");
    let long_enough = greater_than_equal(before_text.length, least);
    let first = equal(number, 0);
    let last = equal(number, last_number);
    let at_an_end = first || last;
    let stands = long_enough || at_an_end;
    let keep = shared && stands;
    text_segment_add(joined, keep, before_text, after_text);
    number = number + 1;
  }
  return joined;
}
