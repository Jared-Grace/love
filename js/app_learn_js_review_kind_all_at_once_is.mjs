import { not } from "./not.mjs";
import { app_learn_js_review_kind_run_is } from "./app_learn_js_review_kind_run_is.mjs";
import { app_code_review_kind_step_is } from "./app_code_review_kind_step_is.mjs";
export function app_learn_js_review_kind_all_at_once_is(kind) {
  "whether a lesson's quiz kind takes a program whole: every kind but the two that take it a piece at a time, because each of those has a milestone of its own";
  let run = app_learn_js_review_kind_run_is(kind);
  let step = app_code_review_kind_step_is(kind);
  let either = run || step;
  let n = not(either);
  return n;
}
