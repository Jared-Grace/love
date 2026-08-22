import { storage_local_exists_not } from "./storage_local_exists_not.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_p } from "./html_p.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { emoji_x_purple } from "./emoji_x_purple.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { app_shared_margin_y_set } from "./app_shared_margin_y_set.mjs";
export function app_shared_dismissable_message(app_fn, key, parent, text) {
  "A hint the reader can put away for good, with the cross that puts it away standing in";
  "its top right corner.";
  "The corner and not the end of the sentence, because the end of a sentence MOVES. A hint";
  "is prose, so its last word lands wherever the phone's width happens to leave it, and a";
  "cross that follows it is in a different place on every screen and after every reword -";
  "which means the reader has to find it each time rather than know where it is. A corner";
  "is the same place whatever the words do.";
  "It is the top right in particular because that is where a thing that closes lives -";
  "every panel, dialog and banner the reader has ever shut had its cross there, so this";
  "one needs no explaining. Beside the first line rather than beside the last also puts it";
  "where the eye already is when it starts reading, so the way out is offered before the";
  "hint has been read rather than after.";
  "The row is laid out with the words and the cross pushed apart, so the cross is at the";
  "right EDGE rather than a fixed distance after the text. A gap between them is still";
  "wanted for the one case where the two nearly meet - a hint long enough to fill the line";
  "would otherwise put a tappable cross hard against the last word.";
  let show = storage_local_exists_not(app_fn, key);
  function dismiss_noop() {}
  if (show) {
    let p = html_p(parent);
    app_shared_margin_y_set(p);
    let gap = app_shared_spaced_small_gap();
    html_style_assign(p, {
      display: "flex",
      "align-items": "flex-start",
      "justify-content": "space-between",
      gap: gap,
    });
    html_span_text(p, text);
    let right = emoji_x_purple();
    let x = html_span_text(p, right);
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
