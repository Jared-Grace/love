import { arguments_assert } from "./arguments_assert.mjs";
export function js_value_names() {
  arguments_assert(arguments, 0);
  ("the names JavaScript itself gives a value, each with the value it gives: NaN, Infinity and undefined. Written in a line they read like a number does - nothing in the program had to say what they hold");
  ("2026-10-17, at the human's asking, so false && NaN can be stepped through. Not picked: adding every global JavaScript has, which would let a line call Math or read window - things a step-through cannot show as a value");
  let names = {
    NaN: NaN,
    Infinity: Infinity,
    undefined: undefined,
  };
  return names;
}
