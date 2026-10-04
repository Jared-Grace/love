import { app_verses_link_copied_get } from "./app_verses_link_copied_get.mjs";
import { not } from "./not.mjs";
import { app_verses_link_copied_set } from "./app_verses_link_copied_set.mjs";
export function app_verses_link_copied_toggle() {
  "Put the link under the verses if it is off and take it away if it is on, and hand back where it now stands.";
  "It is one button rather than two, because adding the link and leaving it out are the two halves of one question, and the button says which half pressing it moves to.";
  let copied = app_verses_link_copied_get();
  let next = not(copied);
  app_verses_link_copied_set(next);
  return next;
}
