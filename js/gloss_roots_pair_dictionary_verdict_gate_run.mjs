import { gloss_roots_pair_dictionary_verdict_cases } from "./gloss_roots_pair_dictionary_verdict_cases.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_roots_pair_dictionary_verdict } from "./gloss_roots_pair_dictionary_verdict.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_roots_pair_dictionary_verdict_gate_run() {
  "Gate: the arbitration between two roots one store named for the same word answers each pinned pair the way the dictionary settles it, and every one of its four answers is still reachable. Throws so the dispatcher seam exits nonzero.";
  "★ THE REACHABILITY HALF IS THE HALF THAT PAYS. Over the whole Cebuano store the arbitration answers contradiction nought times, and that nought is worth reporting only while the branch behind it can still fire. Delete the accusing branch, or narrow it until nothing satisfies it, and the sweep goes on printing the same happy nought with nothing at all behind it. Checking the answers alone would not catch that, because a case can be answered correctly by a reading that has quietly stopped being able to answer anything else.";
  "So the four names are asked for by name rather than counted. A count would pass on four cases that all came back unproved.";
  let cases = gloss_roots_pair_dictionary_verdict_cases();
  let defects = [];
  let seen = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let first = one.first;
    let second = one.second;
    let first_root = one.first_root;
    let second_root = one.second_root;
    let wanted = one.verdict;
    let why = one.why;
    let read = gloss_roots_pair_dictionary_verdict(
      first,
      second,
      first_root,
      second_root,
    );
    seen.push(read);
    let wrong = not_equal(read, wanted);
    if (wrong) {
      let defect = {
        first,
        second,
        first_root,
        second_root,
        wanted,
        read,
        why,
      };
      defects.push(defect);
      console.log("roots pair verdict   " + first + "  and  " + second);
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
  let wanted_names = ["depth", "shared", "contradiction", "unproved"];
  let unreachable = [];
  let names_size = wanted_names.length;
  let n = 0;
  while (less_than(n, names_size)) {
    let name = wanted_names[n];
    let reached = seen.includes(name);
    if (not(reached)) {
      unreachable.push(name);
      console.log("roots pair verdict   no case reaches " + name);
    }
    n = n + 1;
  }
  let count = defects.length;
  let missing = unreachable.length;
  console.log(
    "roots pair verdict defects: " + count + "  unreachable: " + missing,
  );
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss roots pair dictionary verdict gate: " +
        count +
        " pairs answered wrong - what the dictionary settles about two claimed roots has moved",
    );
  }
  let none_reached = greater_than(missing, 0);
  if (none_reached) {
    throw new Error(
      "gloss roots pair dictionary verdict gate: " +
        missing +
        " of the four answers is unreachable - a nought reported for it would mean nothing",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
