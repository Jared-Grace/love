import { arguments_assert } from "./arguments_assert.mjs";
export function html_history_state_get() {
  arguments_assert(arguments, 0);
  ("what the page filed on the step of the back button it is standing on, or null when nothing was filed there - a step added by something else, or the step the page first opened on before anything was filed");
  let state = history.state;
  return state;
}
