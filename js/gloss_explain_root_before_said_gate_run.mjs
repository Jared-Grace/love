import { gloss_explain_root_before_said_cases } from "./gloss_explain_root_before_said_cases.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_explain_root_before_said } from "./gloss_explain_root_before_said.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_explain_root_before_said_gate_run() {
  "Gate: the reading that finds a root standing in front of the words is the root still answers each pinned sentence, and still refuses the ordinary shape that writes the root behind them. Throws so the dispatcher seam exits nonzero.";
  "★ THE REFUSALS ARE WHAT THIS PROTECTS AND THEY ARE THE CHEAP THING TO BREAK. Widening the reading by one word would make it answer the sentence the whole store is written in, and the widening would look like an improvement: more sentences read, more roots found, no count anywhere going the wrong way. Thirty six thousand sightings are written the ordinary way and three are written the other way, so a reading that stopped telling them apart would be wrong about the store almost everywhere while reporting nothing at all.";
  "It is written against the sentences rather than against the store, because the store is authored daily and a gate that moved with it would say a reading had changed when only the text had.";
  let cases = gloss_explain_root_before_said_cases();
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let explain = one.explain;
    let wanted = one.said;
    let why = one.why;
    let read = gloss_explain_root_before_said(explain);
    let wrong = not_equal(read, wanted);
    if (wrong) {
      let defect = {
        explain,
        wanted,
        read,
        why,
      };
      defects.push(defect);
      console.log("root before said     " + explain);
      console.log(
        "                     wanted " +
          wanted +
          "  read " +
          read +
          "  (" +
          why +
          ")",
      );
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("root before said defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss explain root before said gate: " +
        count +
        " sentences read wrong - the reading that tells a root written in front of the phrase from one written behind it has moved",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
