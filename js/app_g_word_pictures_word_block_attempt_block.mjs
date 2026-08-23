import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { word_picture_url } from "./word_picture_url.mjs";
import { html_img } from "./html_img.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_g_word_pictures_word_block_attempt_block(
  drawn,
  strip,
  word,
  kept,
  status_working,
  status_set,
  render,
) {
  arguments_assert(arguments, 7);
  ("280px is the width below which an attempt drops to its own row, and it is set just under half the overlay column rather than at a round number, because two attempts fitting side by side is the whole reason this screen exists and 320 missed it by the width of the gap. A phone is narrower than two of anything, so there it stacks - which is the right answer on a phone and not a fallback.");
  let attempt = property_get(drawn, "attempt");
  let wording = property_get(drawn, "wording");
  let cell = html_div(strip);
  html_style_assign(cell, {
    flex: "1 1 280px",
  });
  let src = word_picture_url(word, attempt);
  let picture = html_img(cell, src);
  html_style_assign(picture, {
    width: "100%",
    height: "auto",
    display: "block",
    "border-radius": "0.25rem",
  });
  let kept_is = equal(kept, attempt);
  if (kept_is) {
    ("the kept one is marked on the picture itself and not only in writing under it, because the row is read by looking at the pictures; a word underneath is missed by exactly the glance this page is for.");
    html_style_assign(picture, {
      outline: "0.2rem solid black",
      "outline-offset": "0.15rem",
    });
  }
  let text = String(attempt);
  let number = html_div_text(cell, text);
  html_style_assign(number, {
    "font-size": app_shared_font_size_label(),
    "text-align": "center",
    opacity: "0.6",
  });
  let bar = html_div(cell);
  html_style_assign(bar, {
    "text-align": "center",
    "margin-top": "0.2rem",
  });
  async function on_keep() {
    let combined7 = text_combine_multiple(["keeping ", word, " ", text]);
    status_working(combined7);
    try {
      let f_name = fn_name("word_picture_chosen_set");
      await app_shared_api_named(f_name, [word, attempt]);
      let combined = text_combine_multiple(["kept ", word, " ", text]);
      status_set(combined);
      await render();
    } catch (failed) {
      let combined2 = text_combine_multiple([
        "could not keep ",
        word,
        " ",
        text,
      ]);
      status_set(combined2);
    }
  }
  if (kept_is) {
    let mark = html_div_text(bar, "kept");
    html_style_assign(mark, {
      "font-weight": "bold",
    });
  } else {
    app_shared_button(bar, "Keep", on_keep);
  }
  let wording_line = html_div_text(cell, wording);
  html_style_assign(wording_line, {
    "margin-top": "0.2rem",
    "font-size": app_shared_font_size_label(),
    "line-height": "1.4",
    opacity: "0.55",
  });
}
