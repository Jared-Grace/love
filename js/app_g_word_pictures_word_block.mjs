import { app_g_word_pictures_word_block_on_save } from "./app_g_word_pictures_word_block_on_save.mjs";
import { app_g_word_pictures_word_block_attempt_block } from "./app_g_word_pictures_word_block_attempt_block.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_word_pictures_api } from "./app_g_word_pictures_api.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { each } from "./each.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { html_value_set } from "./html_value_set.mjs";
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
    let r = app_g_word_pictures_word_block_attempt_block(
      drawn,
      strip,
      word,
      kept,
      status_working,
      status_set,
      render,
    );
    return r;
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
    let r = await app_g_word_pictures_word_block_on_save(
      box,
      word,
      status_working,
      status_set,
      render,
    );
    return r;
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
