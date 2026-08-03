import { fn_name } from "./fn_name.mjs";
import { app_g_dev_overlay } from "./app_g_dev_overlay.mjs";
import { g_genders_get } from "./g_genders_get.mjs";
import { g_directions_all } from "./g_directions_all.mjs";
import { g_character_img_url_direction } from "./g_character_img_url_direction.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_img } from "./html_img.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_size_square } from "./html_style_size_square.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
export function app_g_characters() {
  "The #characters contact sheet: every character sprite the game owns, each one turning once all the way round, laid out to be scrolled through and read left to right.";
  "A sheet rather than a picker. Nothing here is chosen or clicked - it exists so the whole cast can be LOOKED at in one pass, which is the only way a rotation that came out wrong is ever noticed. Walking the map shows one character at a time and only the facing you happened to walk into.";
  ("Every facing is shown, not the four the game walks on, because a facing the game does not use yet is still art that was paid for and can still be broken. The two lists are ",
    fn_name("g_directions_all"),
    " and ",
    fn_name("g_directions"),
    ".");
  ("One character is one block: its eight facings as four across and two down, its folder name underneath. The blocks wrap, so a wide screen puts several characters on a row and a phone puts one, and neither has to be scrolled sideways.");
  let column = app_g_dev_overlay("Characters");
  let genders = g_genders_get();
  let directions = g_directions_all();
  let sheet = html_div(column);
  html_style_assign(sheet, {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "0.75rem",
    "justify-content": "center",
    "margin-top": "0.75rem",
  });
  function character_block(img) {
    let block = html_div(sheet);
    html_style_assign(block, {
      flex: "0 0 auto",
    });
    let ring = html_div(block);
    html_style_assign(ring, {
      display: "grid",
      "grid-template-columns": "repeat(4, auto)",
      gap: "0.1rem",
    });
    let character = {
      img,
    };
    function facing(direction) {
      let src = g_character_img_url_direction(character, direction);
      let element = html_img(ring, src);
      html_style_size_square(element, "4rem");
      ("the sprites are drawn at 128 and shown at 64, so the browser is halving them. pixelated keeps the edges the artist drew instead of blurring them, which is what tells a broken rotation apart from a soft one");
      html_style_assign(element, {
        "image-rendering": "pixelated",
      });
    }
    each(directions, facing);
    let label = html_div_text(block, img);
    html_style_assign(label, {
      "font-size": app_shared_font_size_label(),
      "text-align": "center",
      opacity: "0.7",
    });
  }
  function gender_block(gender) {
    let imgs = property_get(gender, "imgs");
    each(imgs, character_block);
  }
  each(genders, gender_block);
}
