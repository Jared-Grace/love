import { arguments_assert } from "./arguments_assert.mjs";
export function html_history_push() {
  arguments_assert(arguments, 0);
  ("add a step to the back button standing on the address as it is now. Whatever writes the address next writes it over this new step, so the step before keeps the old address - which is how one push gives every page that already replaces its address a way back, without any of them changing how they write it");
  history.pushState(null, "", location.href);
}
