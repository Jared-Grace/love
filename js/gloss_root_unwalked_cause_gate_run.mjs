import { gloss_root_unwalked_cause_cases } from "./gloss_root_unwalked_cause_cases.mjs";
import { binisaya_words_known_folded_index } from "./binisaya_words_known_folded_index.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_root_unwalked_cause } from "./gloss_root_unwalked_cause.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_root_unwalked_cause_gate_run() {
  "Gate: the reading of why a dictionary took no step on from a root answers what the written-down cases say it should. Throws so the dispatcher seam exits nonzero.";
  "Four fifths of the disagreements gathered end in silence, and this reading is the only thing that says which part of that silence somebody can close and which part nobody can. A rule that drifted would not fail anywhere - it would move sightings between two piles that look the same from outside, and the plan built on the counts would spend its effort in the wrong place.";
  "The two cases that must come back unasked and unanalysed are the whole point. They are indistinguishable to every other reader in this repo, and running them together is the mistake this file exists to catch.";
  let written = gloss_root_unwalked_cause_cases();
  let known = written.known;
  let cases = written.cases;
  let folded_index = binisaya_words_known_folded_index(known);
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let root = one.root;
    let cause = one.cause;
    let read = gloss_root_unwalked_cause(known, folded_index, root);
    let wrong = not_equal(read, cause);
    if (wrong) {
      let defect = {
        root,
        cause,
        read,
      };
      defects.push(defect);
      console.log(
        "unwalked cause  " + root + "  wanted " + cause + "  read " + read,
      );
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("unwalked cause defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss root unwalked cause gate: " +
        count +
        " roots read wrong - silence that can be closed is being counted with silence that cannot",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
