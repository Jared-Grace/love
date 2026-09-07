import { gloss_root_named_reversed_cases } from "./gloss_root_named_reversed_cases.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_root_named_reversed_is } from "./gloss_root_named_reversed_is.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_root_named_reversed_gate_run() {
  "Gate: the reversed reading keeps an explanation that names its root before anything else and refuses the three classes that only look like one - a repeated headword, a quoted affix, and half of a two word entry. Throws so the dispatcher seam exits nonzero.";
  "★ THE SEVEN REFUSALS ARE THE POINT OF THIS FILE AND THE THREE KEEPERS ARE ALMOST INCIDENTAL. A reading that dropped all three refusals would keep every genuine sighting it keeps now and simply report a larger number, and there is no count anywhere that would show it had got worse. That is exactly what happened once: the first reading returned 6715, forty of its commonest answers were read and every one was right, and 155 of the sightings were wrong all the same.";
  "It is written against the mark rather than against the store on purpose. Asking the store would take minutes, would answer differently as authoring goes on, and would say a number moved without saying which pair moved it.";
  let cases = gloss_root_named_reversed_cases();
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let word = one.word;
    let root = one.root;
    let wanted = one.reversed;
    let why = one.why;
    let read = gloss_root_named_reversed_is(word, root);
    let wrong = not_equal(read, wanted);
    if (wrong) {
      let defect = {
        word,
        root,
        wanted,
        read,
        why,
      };
      defects.push(defect);
      console.log("root named reversed  " + word + "  root " + root);
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
  console.log("root named reversed defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss root named reversed gate: " +
        count +
        " pairs read wrong - the reading that tells a named root from a repeated headword, an affix or half a phrase has moved",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
