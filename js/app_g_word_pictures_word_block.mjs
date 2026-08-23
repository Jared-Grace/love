import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { word_picture_url } from "./word_picture_url.mjs";
import { html_img } from "./html_img.mjs";
import { equal } from "./equal.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_word_pictures_api } from "./app_g_word_pictures_api.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { each } from "./each.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { not } from "./not.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_g_word_pictures_word_block(
  word,
  sheet,
  gap,
  glosses,
  chosen,
  known,
  status_working,
  status_set,
  render,
  wordings,
) {
  arguments_assert(arguments, 10);
  let block = html_div(sheet);
  html_style_assign(block, {
    "margin-top": gap,
    "border-top": "1px solid rgba(0,0,0,0.15)",
    "padding-top": gap,
  });
  let heading = html_div_text(block, word);
  html_style_assign(heading, {
    "font-weight": "bold",
    "font-size": "1.25rem",
  });
  let entry = property_get(glosses, word);
  let gloss = property_get(entry, "gloss");
  let explain = property_get(entry, "explain");
  let gloss_line = html_div_text(block, gloss);
  html_style_assign(gloss_line, {
    "margin-top": "0.15rem",
    opacity: "0.75",
  });
  let kept = property_get_or(chosen, word, null);
  let strip = html_div(block);
  html_style_assign(strip, {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "0.6rem",
    "margin-top": "0.6rem",
  });
  let attempts = property_get(known, word);
  function attempt_block(drawn) {
    "280px is the width below which an attempt drops to its own row, and it is set just under half the overlay column rather than at a round number, because two attempts fitting side by side is the whole reason this screen exists and 320 missed it by the width of the gap. A phone is narrower than two of anything, so there it stacks - which is the right answer on a phone and not a fallback.";
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
        await app_g_word_pictures_api(f_name, [word, attempt]);
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
  each(attempts, attempt_block);
  let explain_line = html_div_text(block, explain);
  html_style_assign(explain_line, {
    "margin-top": "0.6rem",
    "line-height": "1.4",
  });
  let box = html_textarea(block);
  html_style_assign(box, {
    width: "100%",
    "min-height": "8rem",
    "margin-top": "0.6rem",
    "font-size": app_shared_font_size_label(),
    "line-height": "1.4",
    "box-sizing": "border-box",
  });
  let wording_now = property_get_or(wordings, word, "");
  html_value_set(box, wording_now);
  let controls = html_div(block);
  html_style_assign(controls, {
    display: "flex",
    gap: "0.6rem",
    "margin-top": "0.4rem",
  });
  async function on_save() {
    let typed = html_value_get(box);
    let combined8 = text_combine_multiple(["saving the wording for ", word]);
    status_working(combined8);
    try {
      let f_name6 = fn_name("word_picture_wording_set");
      await app_g_word_pictures_api(f_name6, [word, typed]);
      let combined3 = text_combine_multiple(["saved the wording for ", word]);
      status_set(combined3);
      await render();
    } catch (failed) {
      let combined4 = text_combine_multiple([
        "could not save the wording for ",
        word,
      ]);
      status_set(combined4);
    }
  }
  app_shared_button(controls, "Save wording", on_save);
  let armed = false;
  let draw = null;
  async function on_draw() {
    "the first press only arms the second, and the button says so on its own face. the browser's own confirm box would stop the page dead until it is cleared, which on a phone is a worse thing to be stuck behind than the press is to make twice.";
    let armed_not = not(armed);
    if (armed_not) {
      armed = true;
      html_text_set(draw, "Press again to spend money");
      return;
    }
    armed = false;
    html_text_set(draw, "Drawing");
    let combined9 = text_combine_multiple([
      "drawing another attempt for ",
      word,
    ]);
    status_working(combined9);
    try {
      let f_name7 = fn_name("word_picture_draw");
      await app_g_word_pictures_api(f_name7, [word]);
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
