import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { add_1 } from "./add_1.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { examples_groups } from "./examples_groups.mjs";
import { app_shared_text_category } from "./app_shared_text_category.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
// The chooser screen: a heading, then the examples as numbered wide buttons drawn
// under complexity-tier headers (examples_groups is the source of both order and
// grouping). Numbering runs continuously 1..N across groups so the intended reading
// order stays visible; clicking a button loads that example (on_select with its index).
export function examples_menu_dom(parent, examples, on_select) {
  let heading = html_element(parent, "h1");
  html_text_set(heading, "Transform examples");
  html_style_set(heading, "font-size", "1.6rem");
  app_shared_text_body(
    parent,
    "Each example is one code transform — the same file shown before and after. They run easiest first; pick any to see it in full.",
  );
  function group_header(name) {
    let header = html_element(parent, "h2");
    html_text_set(header, name);
    app_shared_text_category(header);
    html_style_set(header, "font-size", "1rem");
    html_style_set(header, "margin", "1.5rem 0 0.5rem");
  }
  function example_button(index) {
    let title = property_get(list_get(examples, index), "title");
    let label = text_combine_multiple([add_1(index), ". ", title]);
    function on_click() {
      on_select(index);
    }
    let button = app_shared_button_wide(parent, label, on_click);
    html_style_set(button, "margin-bottom", "0.5rem");
    html_style_set(button, "text-align", "left");
  }
  let index = 0;
  for (let group of examples_groups()) {
    group_header(property_get(group, "name"));
    let members = property_get(group, "examples");
    let size = list_size(members);
    let placed = 0;
    while (placed < size) {
      example_button(index);
      index = index + 1;
      placed = placed + 1;
    }
  }
  // A newly-added, not-yet-grouped example (appended by examples_corpus_read) still shows.
  let count = list_size(examples);
  if (index < count) {
    group_header("Other");
    while (index < count) {
      example_button(index);
      index = index + 1;
    }
  }
}
