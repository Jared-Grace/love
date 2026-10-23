import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_program_line_in_loop_is(lines, i) {
  arguments_assert(arguments, 2);
  ("Whether line i of a program can run more than once: it heads a while or a for, or some { } around it belongs to one. Read upward from line i, each { that no later } has closed is one that line i is inside");
  let loop = function lambda(text) {
    let v = text.trim();
    let r = /^(\}\s*)?(while|for)\s*\(/.test(v);
    return r;
  };
  if (loop(lines[i])) {
    return true;
  }
  let depth = 0;
  for (let j = subtract(i, 1); greater_than_equal(j, 0); j--) {
    let text = lines[j];
    for (let c = subtract(text.length, 1); greater_than_equal(c, 0); c--) {
      if (equal(text[c], "}")) {
        depth++;
      }
      if (equal(text[c], "{")) {
        if (equal(depth, 0)) {
          if (loop(text)) {
            return true;
          }
        } else {
          depth--;
        }
      }
    }
  }
  return false;
}
