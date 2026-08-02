import { arguments_assert } from "./arguments_assert.mjs";
import { html_loading_generic } from "./html_loading_generic.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_loading_hide_now } from "./html_loading_hide_now.mjs";
export async function html_loading_immediate(lambda) {
  ("like ",
    fn_name("html_loading"),
    ", but hides the overlay immediately on finish instead of lingering 300ms. use this for an in-place re-render that is usually served from memory: a fast run never paints the overlay so there is no flash, while a slow run still shows the spinner (never a blank white page) for as long as it actually waits");
  arguments_assert(arguments, 1);
  let result = await html_loading_generic(lambda, html_loading_hide_now);
  return result;
}
