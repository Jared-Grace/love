import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_div } from "./html_div.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { html_value_get } from "./html_value_get.mjs";
export function app_shared_search_render(content, placeholder, on_query) {
  "a search box on top and the list it narrows below: every keystroke hands the box's text to the caller, which draws whatever matches into the div underneath";
  "picking a book of the Bible and picking a language are the same act on different lists - a reader who knows the name types it, a reader who browses ignores the box - so the box, its shared look, the div beneath it and the redraw on every keystroke are written here once and the caller is left with only the matching";
  arguments_assert(arguments, 3);
  let search = html_input_text(content, placeholder);
  app_shared_input_style(search);
  let list_div = html_div(content);
  function render() {
    let query = html_value_get(search);
    on_query(list_div, query);
  }
  html_on_input(search, render);
  ("the first draw reads the box too, so the empty query is not spelled a second time");
  render();
  return list_div;
}
