import { storage_local_set } from "./storage_local_set.mjs";
import { app_code_above_shown_get } from "./app_code_above_shown_get.mjs";
export function app_code_above_shown_set(shown) {
  "$plain shown";
  "the answer says whether this learner wants the worked telling above a lesson's examples. It is a yes or a no to remember and nothing that runs.";
  "Remember whether this learner wants the telling above a lesson's examples.";
  "The reading half of this pair owns the place it is kept, and its own name is what names that place, so the two cannot end up looking in different drawers.";
  storage_local_set(app_code_above_shown_get, "above_shown", shown);
}
