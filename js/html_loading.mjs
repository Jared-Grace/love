import { browser_is } from "./browser_is.mjs";
import { not } from "./not.mjs";
import { html_loading_state } from "./html_loading_state.mjs";
import { html_loading_show } from "./html_loading_show.mjs";
import { html_loading_hide } from "./html_loading_hide.mjs";
export async function html_loading(lambda) {
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
      html_loading_hide();
    }
  }
  return result;
}
