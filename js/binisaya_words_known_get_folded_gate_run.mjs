import { binisaya_words_known_get_folded_cases } from "./binisaya_words_known_get_folded_cases.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known_folded_index } from "./binisaya_words_known_folded_index.mjs";
import { less_than } from "./less_than.mjs";
import { binisaya_words_known_get_folded } from "./binisaya_words_known_get_folded.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function binisaya_words_known_get_folded_gate_run() {
  "Gate: asking the dictionary in a spelling it does not keep still finds the word, and a folded form two words answer to finds nothing. Throws so the dispatcher seam exits nonzero.";
  "A refusal is checked as closely as an answer. The whole worth of this lookup is that it stops where folding stops being safe, so a version that answered everything would still pass a check that only looked at the words it was meant to find - and it would be handing back one of two different words with nothing to say it had chosen.";
  "The word held under exactly its own spelling is checked too, because the second asking must never reach a word the first one already answers. A lookup that folded first would answer about a different entry than the one every earlier reading was built on, and nothing would say so.";
  let gathered = binisaya_words_known_get_folded_cases();
  let known = property_get(gathered, "known");
  let cases = property_get(gathered, "cases");
  let index = binisaya_words_known_folded_index(known);
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let word = one.word;
    let wanted = one.root;
    let why = one.why;
    let held = binisaya_words_known_get_folded(known, index, word);
    let nothing = null_is(held);
    let wanted_nothing = null_is(wanted);
    let read = nothing ? null : property_get(held, "root");
    let wrong = wanted_nothing
      ? not(nothing)
      : nothing || not_equal(read, wanted);
    if (wrong) {
      let defect = {
        word,
        wanted,
        read,
        why,
      };
      defects.push(defect);
      console.log("folded lookup  " + word + "  wanted " + wanted);
      console.log("               read " + read + "  (" + why + ")");
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("folded lookup defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "binisaya words known get folded gate: " +
        count +
        " words read wrong - the dictionary is being reached in a spelling it does not keep, or a fold two words answer to is being guessed at",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
