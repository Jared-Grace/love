import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { list_get_wrap_index } from "./list_get_wrap_index.mjs";
import { number_is } from "./number_is.mjs";
import { examples_menu_dom } from "./examples_menu_dom.mjs";
import { examples_single_dom } from "./examples_single_dom.mjs";
// Client entry for the examples app. Single-screen: a chooser menu, or one
// selected example with prev/next. The selection (an index, or null for the
// menu) persists in localStorage, namespaced by this fn's name.
export async function app_examples(context) {
  let response = await fetch("examples_data.json");
  let examples = await response.json();
  let root = property_get(context, "root");
  html_style_set(root, "margin", "0");
  html_style_set(root, "background", "#fafafa");
  function select(index) {
    storage_local_set(app_examples, "selected", index);
    render();
  }
  function to_menu() {
    storage_local_set(app_examples, "selected", null);
    render();
  }
  function render() {
    html_clear(root);
    let page = app_shared_container_blue(root);
    html_style_set(page, "max-width", "62rem");
    html_style_set(page, "margin", "2rem auto");
    html_style_set(page, "padding", "2rem");
    html_style_set(page, "font-family", "system-ui, sans-serif");
    html_style_set(page, "color", "#1a1a1a");
    let selected = storage_local_get(app_examples, "selected");
    if (number_is(selected)) {
      function on_prev() {
        select(list_get_wrap_index(examples, selected - 1));
      }
      function on_next() {
        select(list_get_wrap_index(examples, selected + 1));
      }
      examples_single_dom(page, examples, selected, on_prev, on_next, to_menu);
    } else {
      examples_menu_dom(page, examples, select);
    }
  }
  render();
}
