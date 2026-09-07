import { gloss_classes_claimed_unvouched_cases } from "./gloss_classes_claimed_unvouched_cases.mjs";
import { gloss_classes_claimed_unvouched } from "./gloss_classes_claimed_unvouched.mjs";
import { less_than } from "./less_than.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_classes_claimed_unvouched_gate_run() {
  "Gate: the claims picked out as words nothing in the dictionary vouches for are the ones the written-down cases say they should be. Throws so the dispatcher seam exits nonzero.";
  "The dictionary stores a word it holds without a breakdown and a word it never had in exactly the same four fields, so a check reading the entry alone would answer the same for both and would be a check that cannot disagree. What separates them is another entry naming the word as its root. A reading that stopped consulting that would call every plain entry a suspect, and the list would fill with common roots until nobody read it.";
  "The case that must not be picked up matters as much as the one that must. tulod and halang are stored identically and are answered differently, so the two of them together are the whole of what this gate is for.";
  let written = gloss_classes_claimed_unvouched_cases();
  let known = written.known;
  let classes = written.classes;
  let picked = gloss_classes_claimed_unvouched(classes, known);
  let defects = [];
  let size = classes.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = classes[i];
    let wanted = one.wanted;
    let read = list_includes(picked, one);
    let wrong = not_equal(read, wanted);
    if (wrong) {
      defects.push({
        claimed: one.claimed,
        wanted,
        read,
      });
      console.log(
        "claimed unvouched  " +
          one.claimed +
          "  wanted " +
          wanted +
          "  read " +
          read,
      );
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("claimed unvouched defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss classes claimed unvouched gate: " +
        count +
        " claims read wrong - a word the dictionary vouches for is being suspected, or a word it never had is being let past",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
