import { html_loading } from "./html_loading.mjs";
import { browser_is } from "./browser_is.mjs";
import { not } from "./not.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_loading_show } from "./html_loading_show.mjs";
import { html_loading_hide_now } from "./html_loading_hide_now.mjs";
export async function html_loading_immediate(lambda) {
  ("like ",
    html_loading.name,
    ", but hides the overlay immediately on finish instead of lingering 300ms. use this for an in-place re-render that is usually served from memory: a fast run never paints the overlay so there is no flash, while a slow run still shows the spinner (never a blank white page) for as long as it actually waits");
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
      html_loading_hide_now();
    }
  }
  return result;
}
