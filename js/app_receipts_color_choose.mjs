import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_color_ink } from "./app_shared_color_ink.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { app_receipts_colors } from "./app_receipts_colors.mjs";
import { html_element } from "./html_element.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function app_receipts_color_choose(parent, key, on_choose) {
  "$plain parent";
  "$plain key";
  "$plain on_choose";
  "A row of round buttons, one in each colour a purchase can be marked with, under a title. The one marked now wears a thick dark ring; pressing another moves the ring to it and hands on_choose its key.";
  arguments_assert(arguments, 3);
  app_shared_field_title(parent, "Color");
  let row = html_div(parent);
  html_style_set(row, "display", "flex");
  html_style_set(row, "flex-wrap", "wrap");
  html_style_set(row, "gap", "0.6em");
  let ink = app_shared_color_ink();
  let buttons = [];
  function rings_show(chosen) {
    for (let b of buttons) {
      let left = property_get(b, "key");
      let on = equal(left, chosen);
      let b2 = property_get(b, "button");
      html_style_set(
        b2,
        "border",
        on ? "0.25em solid " + ink : "0.1em solid " + ink,
      );
    }
  }
  for (let c of app_receipts_colors()) {
    let c_key = property_get(c, "key");
    let button = html_element(row, "button");
    html_attribute_set(button, "type", "button");
    let value = property_get(c, "name");
    html_attribute_set(button, "aria-label", value);
    let value2 = property_get(c, "name");
    html_attribute_set(button, "title", value2);
    let background = property_get(c, "color");
    html_style_background_color_set(button, background);
    html_style_set(button, "width", "2.5em");
    html_style_set(button, "height", "2.5em");
    html_style_set(button, "border-radius", "50%");
    html_style_set(button, "cursor", "pointer");
    function on_press() {
      rings_show(c_key);
      on_choose(c_key);
    }
    html_on_click(button, on_press);
    buttons.push({
      key: c_key,
      button,
    });
  }
  rings_show(key);
}
