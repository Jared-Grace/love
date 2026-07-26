import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_go_back(root, buttons) {
  "render each way-back option as a plain, self-descriptive wide button - its emoji plus exactly what it does - each with the standard top gap. No question and no light-blue container: the button already says its own action, so there is nothing to ask, and it matches the other buttons on the screen (Next, Home, Contact). Every button object is {emoji, text, on_click}";
  function lambda(b) {
    let emoji = property_get(b, "emoji");
    let button_text = property_get(b, "text");
    let on_click = property_get(b, "on_click");
    let label = text_combine_multiple([emoji, " ", button_text]);
    let button = app_shared_button_wide(root, label, on_click);
    let gap = app_shared_spaced_gap();
    html_style_margin_top(button, gap);
  }
  each(buttons, lambda);
}
