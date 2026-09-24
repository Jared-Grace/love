import { arguments_assert } from "./arguments_assert.mjs";
export function html_on_pop_state(lambda) {
  arguments_assert(arguments, 1);
  ("run this whenever the reader moves along the back or forward button, which puts an earlier address in the bar without loading the page again - so the page has to read the address itself and draw what it names");
  window.addEventListener("popstate", lambda);
}
