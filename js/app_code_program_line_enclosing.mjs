import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_program_line_enclosing(lines, i) {
  arguments_assert(arguments, 2);
  ("The lines whose { line i is inside, nearest first. Read upward from line i, each { that no later } has closed is one that line i is inside");
  let found = [];
  let depth = 0;
  for (let j = subtract(i, 1); greater_than_equal(j, 0); j--) {
    let text = lines[j];
    for (let c = subtract(text.length, 1); greater_than_equal(c, 0); c--) {
      if (equal(text[c], "}")) {
        depth++;
      }
      if (equal(text[c], "{")) {
        if (equal(depth, 0)) {
          found.push(j);
        } else {
          depth--;
        }
      }
    }
  }
  return found;
}
