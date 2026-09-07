import { gloss_explain_name_said_cases } from "./gloss_explain_name_said_cases.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_explain_name_said } from "./gloss_explain_name_said.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_explain_name_said_gate_run() {
  "Gate: the explanations that declare their word to be a name, and the ones that only mention a name, are read the way the written-down cases say. Throws so the dispatcher seam exits nonzero.";
  "A true answer here takes a finding out of the queue of faults, so a wrong true is the expensive direction: an ordinary Cebuano word explained from the wrong root would be excused as a borrowed name and never looked at again. The ginganlan case is the whole of what guards against that - a sentence saying a different word is a name.";
  "A wrong false only leaves a name in the queue for somebody to read and dismiss, and two of the cases here are wanted false for exactly that reason. They are the reading's blind spot written down rather than a fault, and they are here so that widening the reading has to face them.";
  let cases = gloss_explain_name_said_cases();
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let read = gloss_explain_name_said(one.explain, one.word);
    let wrong = not_equal(read, one.said);
    if (wrong) {
      defects.push({
        word: one.word,
        wanted: one.said,
        read,
      });
      console.log(
        "name said  " + one.word + "  wanted " + one.said + "  read " + read,
      );
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("explain name said defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss explain name said gate: " +
        count +
        " explanations read wrong - an ordinary word is being excused as a borrowed name, or a name is being kept in the queue",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
