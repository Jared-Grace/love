import { browser_is } from "./browser_is.mjs";
import { html_loading_show } from "./html_loading_show.mjs";
import { html_loading_hide } from "./html_loading_hide.mjs";
export async function html_loading(lambda) {
  let b = browser_is();
  if (b) {
    html_loading_show();
  }
  let result = null;
  try {
    result = await lambda();
  } finally {
    if (b) {
      html_loading_hide();
    }
  }
  return result;
}
