import { app_a_brace_right } from "./app_a_brace_right.mjs";
import { app_a_brace_left } from "./app_a_brace_left.mjs";
export function app_a_braces_wrap(parent, lambda) {
  let left = app_a_brace_left(parent);
  lambda();
  let right = app_a_brace_right(parent);
  let r = {
    left,
    right,
  };
  return r;
}
