import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function text_brackets_round_outer(text) {
  arguments_assert(arguments, 1);
  ("What each outermost pair of round brackets in a text holds, brackets inside it included, in the order they open.");
  ("OUTERMOST, BECAUSE A BRACKET INSIDE A BRACKET IS PART OF WHAT THE OUTER ONE SAYS. Brown, Driver and Briggs write Abiram as ((the) Exalted One is (my) father); taking the innermost pairs answers the, my and nothing else, which reads as a meaning and is a fragment of one.");
  ("A closing bracket with nothing open is passed over, and a pair left open at the end is not answered, so text that is unbalanced loses only the broken part.");
  let groups = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; less_than(i, text.length); i++) {
    let c = text[i];
    if (equal(c, "(")) {
      if (equal(depth, 0)) {
        start = i + 1;
      }
      depth = depth + 1;
      continue;
    }
    if (equal(c, ")")) {
      if (equal(depth, 0)) {
        continue;
      }
      depth = subtract(depth, 1);
      if (equal(depth, 0)) {
        let v = text.slice(start, i);
        groups.push(v);
      }
    }
  }
  return groups;
}
