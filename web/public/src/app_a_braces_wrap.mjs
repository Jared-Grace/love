import { app_a_brace_right } from "../../../love/public/src/app_a_brace_right.mjs";
import { app_a_brace_left } from "../../../love/public/src/app_a_brace_left.mjs";
export function app_a_braces_wrap(parent, inner) {
  let s = app_a_brace_left(parent);
  inner();
  let span2 = app_a_brace_right(parent);
}
