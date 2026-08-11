import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function app_g_verify_home_editing_now(document) {
  arguments_assert(arguments, 1);
  let active = document.activeElement;
  if (not(active)) {
    return false;
  }
  let eq = equal(active.tagName, "TEXTAREA");
  return eq;
}
