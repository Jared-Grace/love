import { app_a_brace_right } from "../../../love/public/src/app_a_brace_right.mjs";
import { app_a_brace_left } from "../../../love/public/src/app_a_brace_left.mjs";
export function app_a_braces_wrap(parent, lambda) {
  let s = app_a_brace_left(parent);
  lambda();
  let span2 = app_a_brace_right(parent);
}
