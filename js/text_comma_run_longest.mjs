import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
export function text_comma_run_longest(t) {
  "How many commas stand side by side in the longest unbroken run of them, which is the depth a nested list was written at: one comma between words, two between lists of words, three between lists of those.";
  "Counted rather than parsed, because what arrives is a single word from a command line and there is nothing in it to parse - the count of commas in a row is the whole of what the writer said about depth.";
  arguments_assert(arguments, 1);
  let longest = 0;
  let running = 0;
  for (let letter of t) {
    let comma = equal(letter, ",");
    if (comma) {
      running = add(running, 1);
    }
    if (not(comma)) {
      running = 0;
    }
    let longer = greater_than(running, longest);
    if (longer) {
      longest = running;
    }
  }
  return longest;
}
