import { arguments_assert } from "./arguments_assert.mjs";
import { browser_is } from "./browser_is.mjs";
import { not } from "./not.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_loading_show } from "./html_loading_show.mjs";
export async function html_loading_generic(lambda, hide_fn) {
  arguments_assert(arguments, 2);
  ("Shows the loading overlay around a run of work, unless the page has asked for");
  ("quiet or this is not a browser at all, and takes the overlay away again");
  ("however the work ends.");
  ("How it is taken away is the only thing the two commands built on this differ");
  ("by - one lets it linger, one removes it at once - so that arrives as the last");
  ("argument and everything else is written once.");
  ("Hiding happens in a finally, so a run that throws still leaves the page");
  ("usable; the error carries on afterwards, unchanged.");
  let suppressed = html_loading_state().suppressed;
  let show = browser_is() && not(suppressed);
  if (show) {
    html_loading_show();
  }
  let result = null;
  try {
    result = await lambda();
  } finally {
    if (show) {
      hide_fn();
    }
  }
  return result;
}
