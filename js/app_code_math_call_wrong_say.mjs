import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_to } from "./text_to.mjs";
import { text_index_of_try } from "./text_index_of_try.mjs";
import { text_size } from "./text_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_slice } from "./text_slice.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_split } from "./text_split.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_math_call_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong value for one Math call given only numbers: what that Math function does with the numbers inside its ( ), then the value the call comes to, as parts that take turns between words and code. null for any other line, for a Math function the lessons do not teach, and when the value does not match the right answer");
  ("Each function's words say what its own lesson teaches - round sends a .5 up, ceil always goes up, floor always goes down - so the reminder repeats the lesson's rule rather than a new one. Not picked: naming why the pick is wrong; a pick may be the other function's answer, the number unchanged, or a number off by one, and the rule with the right value beside it answers each of them");
  let message = text_to(question);
  let code = text_trim(message);
  let right = text_to(answer);
  let fns = [
    {
      name: "Math.max",
      does: " gives the largest of the numbers inside its ",
      run: Math.max,
    },
    {
      name: "Math.min",
      does: " gives the smallest of the numbers inside its ",
      run: Math.min,
    },
    {
      name: "Math.abs",
      does: " gives how far the number inside its ",
      after: " is from 0, which drops a minus sign",
      run: Math.abs,
    },
    {
      name: "Math.ceil",
      does: " rounds the number inside its ",
      after: " up to a whole number, always up",
      run: Math.ceil,
    },
    {
      name: "Math.floor",
      does: " rounds the number inside its ",
      after: " down to a whole number, always down",
      run: Math.floor,
    },
    {
      name: "Math.round",
      does: " rounds the number inside its ",
      after: " to the nearest whole number, and a .5 goes up",
      run: Math.round,
    },
  ];
  let open = text_index_of_try(code, "(");
  let size = text_size(code);
  if (
    equal(open, -1) ||
    not(equal(text_slice(code, subtract(size, 1), size), ")"))
  ) {
    return null;
  }
  let name = text_slice(code, 0, open);
  function named(candidate) {
    let left = property_get(candidate, "name");
    let n = equal(left, name);
    return n;
  }
  let f = list_find_or_null(fns, named);
  if (null_is(f)) {
    return null;
  }
  let to = subtract(size, 1);
  let inside = text_slice(code, open + 1, to);
  let numbers = [];
  for (let piece of text_split(inside, ",")) {
    let t = text_trim(piece);
    let n = Number(t);
    if (equal(t, "") || Number.isNaN(n)) {
      return null;
    }
    list_add(numbers, n);
  }
  let input = property_get(f, "run")(...numbers);
  let value = text_to(input);
  let b = equal(value, right);
  if (not(b)) {
    return null;
  }
  let after = f.after || "";
  let value2 = property_get(f, "does");
  let parts = [
    "Remember: ",
    name,
    value2,
    "( )",
    after + ", so ",
    code,
    " is ",
    value,
    "",
  ];
  return parts;
}
