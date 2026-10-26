import { list_add_multiple } from "./list_add_multiple.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_brace_left } from "./js_code_brace_left.mjs";
import { js_code_brace_right } from "./js_code_brace_right.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_braces_sequence } from "./app_code_braces_sequence.mjs";
export function app_code_braces_order_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("for a quiz between code and only its braces, in either direction: walks the code's braces from the top down, saying which block each { opens and which block each } closes; null when neither side is code with braces");
  let left = js_code_brace_left();
  let right = js_code_brace_right();
  let braces_only = function lambda2(t) {
    function lambda(c) {
      let r = equal(c, left) || equal(c, right) || equal(c, " ");
      return r;
    }
    let r2 = greater_than(t.length, 0) && [...t].every(lambda);
    return r2;
  };
  let code = null;
  if (braces_only(answer) && not(braces_only(question))) {
    code = question;
  } else if (braces_only(question) && not(braces_only(answer))) {
    code = answer;
  }
  if (equal(code, null)) {
    return null;
  }
  let parts = ["Remember: read the braces from the top down: "];
  let text_add = function lambda3(t) {
    parts[subtract(parts.length, 1)] = parts[subtract(parts.length, 1)] + t;
  };
  let open = [];
  let first = true;
  for (let line of code.split("\n")) {
    let rest = line.trim();
    while (greater_than(rest.length, 0)) {
      let i_left = rest.indexOf(left);
      let i_right = rest.indexOf(right);
      if (equal(i_left, -1) && equal(i_right, -1)) {
        break;
      }
      text_add(first ? "" : ", then ");
      first = false;
      if (
        not_equal(i_right, -1) &&
        (equal(i_left, -1) || less_than(i_right, i_left))
      ) {
        if (equal(open.length, 0)) {
          return null;
        }
        let closed = open.pop();
        list_add_multiple(parts, [right, " closes ", closed, ""]);
        rest = rest.slice(i_right + 1).trim();
      } else {
        let head = rest.slice(0, i_left).trim();
        if (equal(head.length, 0)) {
          return null;
        }
        list_add(parts, head + " " + left);
        if (equal(open.length, 0)) {
          list_add(parts, " opens a block");
        } else {
          list_add_multiple(parts, [
            " opens a block inside ",
            open[subtract(open.length, 1)],
            "",
          ]);
        }
        list_add(open, head);
        rest = rest.slice(i_left + 1).trim();
      }
    }
  }
  if (not_equal(open.length, 0)) {
    return null;
  }
  text_add(", so its braces, in order, are ");
  let item = app_code_braces_sequence(code);
  list_add_multiple(parts, [item, ""]);
  return parts;
}
