import { arguments_assert } from "./arguments_assert.mjs";
import { html_loading_generic } from "./html_loading_generic.mjs";
import { html_loading_hide } from "./html_loading_hide.mjs";
export async function html_loading(lambda) {
  arguments_assert(arguments, 1);
  ("Shows the loading overlay around a run of work, and lets it linger a moment");
  ("afterwards so a run of quick steps reads as one wait rather than a flicker.");
  let result = await html_loading_generic(lambda, html_loading_hide);
  return result;
}
