import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_dev_overlay } from "./app_shared_dev_overlay.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_dev_overlay_status(title_text) {
  "A dev screen's panel with a line at the top of it that says what just happened, handed back as the column to draw into and the two ways of writing on that line.";
  "THE LINE SITS ONCE AT THE TOP RATHER THAN BESIDE EACH BUTTON, because a press on a review bench is answered by the whole sheet being drawn again, and anything written next to a button is thrown away by that redraw. It keeps its height while empty so that a message arriving does not push the sheet down.";
  "SAYING THE PRESS WAS TAKEN IS PART OF TAKING IT, and this was measured rather than guessed: a press writes a file, then asks the seam three times, and each of those questions is answered by a reader started after the write - six seconds, on this machine, before anything on the page moves. A page that says nothing for six seconds has told the reader the press missed, and the reader's answer to that is to press again, which is exactly what must not happen to a button that spends money.";
  "THE DIV ITSELF IS NOT HANDED BACK, only the two ways of writing on it. A screen that held the div would be free to hang other things off it, and then two benches would say what happened in two different places.";
  arguments_assert(arguments, 1);
  let column = app_shared_dev_overlay(title_text);
  let status = html_div_text(column, "");
  html_style_assign(status, {
    "text-align": "center",
    "min-height": "1.2rem",
    opacity: "0.7",
    "font-size": app_shared_font_size_label(),
  });
  function status_set(text) {
    html_text_set(status, text);
  }
  function status_working(text) {
    let combined = text_combine_multiple([text, "…"]);
    html_text_set(status, combined);
  }
  let r = {
    column,
    status_set,
    status_working,
  };
  return r;
}
