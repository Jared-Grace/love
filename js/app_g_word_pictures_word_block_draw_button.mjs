import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_word_pictures_api } from "./app_g_word_pictures_api.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_word_pictures_word_block_draw_button(
  controls,
  word,
  status_working,
  status_set,
  render,
) {
  "The one press on this page that spends money: it asks for another drawn attempt at the given word, and it takes two presses to do it.";
  "THE ARMING LIVES IN HERE WITH THE BUTTON AND IS SEEN BY NOTHING ELSE. Whether the next press spends anything is the button's own business, so a caller cannot arm it, cannot read it armed, and cannot leave it armed by drawing the rest of the page again.";
  "THE BUTTON IS WHAT SAYS IT IS ARMED, rather than a box the browser puts up. A confirm box stops the page dead until it is cleared, which on a phone is a worse thing to be stuck behind than the press is to make twice.";
  arguments_assert(arguments, 5);
  let armed = false;
  let draw = null;
  async function on_draw() {
    let armed_not = not(armed);
    if (armed_not) {
      armed = true;
      html_text_set(draw, "Press again to spend money");
      return;
    }
    armed = false;
    html_text_set(draw, "Drawing");
    let combined = text_combine_multiple([
      "drawing another attempt for ",
      word,
    ]);
    status_working(combined);
    try {
      let f_name = fn_name("word_picture_draw");
      await app_g_word_pictures_api(f_name, [word]);
      let combined5 = text_combine_multiple([
        "drew another attempt for ",
        word,
      ]);
      status_set(combined5);
      await render();
    } catch (failed) {
      let combined6 = text_combine_multiple(["the draw for ", word, " failed"]);
      status_set(combined6);
      html_text_set(draw, "Draw another");
    }
  }
  draw = app_shared_button(controls, "Draw another", on_draw);
}
