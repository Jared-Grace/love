import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_style_flex } from "./html_style_flex.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_receipts_choice_row(
  parent,
  title,
  choices,
  chosen,
  on_choose,
) {
  "$plain parent";
  "$plain title";
  "$plain choices";
  "$plain chosen";
  "$plain on_choose";
  "Buttons side by side under a title, one for each choice, each an object with a key and the text it is named by. The one whose key is chosen is ticked and bold; pressing any hands on_choose its key.";
  arguments_assert(arguments, 5);
  app_shared_field_title(parent, title);
  let row = html_div(parent);
  html_display_flex(row);
  html_style_gap(row, "0.6em");
  for (let choice of choices) {
    let key = property_get(choice, "key");
    let on = equal(key, chosen);
    let text = (on ? "✅ " : "") + property_get(choice, "text");
    function on_press() {
      on_choose(key);
    }
    let button = app_shared_button(row, text, on_press);
    html_style_flex(button, "1");
    if (on) {
      html_bold(button);
    }
  }
}
