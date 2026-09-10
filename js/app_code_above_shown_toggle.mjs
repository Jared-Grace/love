import { app_code_above_shown_get } from "./app_code_above_shown_get.mjs";
import { not } from "./not.mjs";
import { app_code_above_shown_set } from "./app_code_above_shown_set.mjs";
export function app_code_above_shown_toggle() {
  "Put the telling up if it is down and down if it is up, and hand back where it now stands.";
  "It is one button rather than two, because being shown the telling and not being shown it are the two halves of one question, and a learner can see from the page which half they are in.";
  let shown = app_code_above_shown_get();
  let next = not(shown);
  app_code_above_shown_set(next);
  return next;
}
