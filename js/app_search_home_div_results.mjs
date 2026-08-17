import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_focus } from "./html_focus.mjs";
import { emoji_x_red } from "./emoji_x_red.mjs";
import { html_br_2 } from "./html_br_2.mjs";
import { html_div } from "./html_div.mjs";
export function app_search_home_div_results(r2, left, search) {
  arguments_assert(arguments, 3);
  let input = property_get(r2, "input");
  let content = property_get(r2, "content");
  let text = text_combine(left, " Search");
  app_shared_button_wide(content, text, search);
  function query_clear() {
    "empty the box and put the writing cursor back in it - on a phone the keyboard only opens for a focused box, so clearing without focusing leaves the reader tapping at an empty box to start typing again";
    html_value_set(input, "");
    html_focus(input);
  }
  let clear_left = emoji_x_red();
  let clear_text = text_combine(clear_left, " Clear");
  app_shared_button_wide(content, clear_text, query_clear);
  html_br_2(content);
  let div_results = html_div(content);
  let r = {
    input,
    content,
    div_results,
  };
  return r;
}
