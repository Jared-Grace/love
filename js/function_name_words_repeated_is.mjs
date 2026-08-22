import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { list_size } from "./list_size.mjs";
import { list_run_repeats_is } from "./list_run_repeats_is.mjs";
import { less_than } from "./less_than.mjs";
export function function_name_words_repeated_is(f_name) {
  "$plain f_name";
  "Whether a name says the same run of words twice running, however many words long that run is.";
  "THE ONE-WORD CASE ALREADY HAD A READING OF ITS OWN, and this is the same question with the length let go. A name is its parts joined, so a run of parts that repeats the run before it narrows exactly as little as a single word repeating a single word - the reader has already been told all of it.";
  "THE LONGER RUNS ARE THE ONES A COMMAND WRITES rather than a person. A person does not type a name that says four words twice; a command that joins a holder's name to a piece already spelled with that holder's name in it does, and what comes out reads as a name somebody chose. Three of those were written in one sitting, and the one-word reading walked past every one of them, because the two words either side of the seam were different words.";
  "THE RUNS MUST BE SIDE BY SIDE. A word coming back later in a name is ordinary and often right, because the later part narrows what the earlier one opened; only a run immediately saying itself again is certainly carrying nothing.";
  arguments_assert(arguments, 1);
  let parts = function_name_to_parts(f_name);
  let count = list_size(parts);
  let length = 1;
  while (less_than(length, count)) {
    let start = 0;
    let left = subtract(count, length);
    let after = subtract(left, length);
    while (less_than(start, after + 1)) {
      let repeats_is = list_run_repeats_is(parts, start, length);
      if (repeats_is) {
        return true;
      }
      start = start + 1;
    }
    length = length + 1;
  }
  return false;
}
