import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_p } from "./html_p.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_x_purple } from "./emoji_x_purple.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { app_shared_margin_y_set } from "./app_shared_margin_y_set.mjs";
export function app_shared_dismissable_message(app_fn, parent, key, text) {
  let show = storage_local_exists_not(app_fn, key);
  function dismiss_noop() {}
  if (show) {
    let p = html_p(parent);
    app_shared_margin_y_set(p);
    html_span_text(p, text);
    let x = html_span_text(p, text_combine("  ", emoji_x_purple()));
    app_shared_text_deemphasized(x);
    let dismissed = false;
    function dismiss() {
      if (dismissed) {
        return;
      }
      dismissed = true;
      storage_local_set(app_fn, key, true);
      html_remove(p);
    }
    html_on_click(x, dismiss);
    ("returning dismiss lets the caller retire the hint the moment the user first does the action it describes");
    return dismiss;
  }
  return dismiss_noop;
}
