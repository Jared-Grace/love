import { arguments_assert } from "./arguments_assert.mjs";
import { html_history_state_get } from "./html_history_state_get.mjs";
export function html_history_state_merge(object) {
  arguments_assert(arguments, 1);
  ("file these words on the step of the back button the page is standing on, keeping whatever else was filed there and leaving the address alone - no address is passed, because an empty one would be read as the page without its hash and rub the hash out");
  let state = html_history_state_get();
  let merged = {
    ...state,
    ...object,
  };
  history.replaceState(merged, "");
}
