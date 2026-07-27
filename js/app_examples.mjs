import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
import { html_style_background } from "./html_style_background.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { storage_session_get } from "./storage_session_get.mjs";
import { storage_session_set } from "./storage_session_set.mjs";
import { list_get_wrap_index } from "./list_get_wrap_index.mjs";
import { number_is } from "./number_is.mjs";
import { examples_menu_dom } from "./examples_menu_dom.mjs";
import { examples_single_dom } from "./examples_single_dom.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
export async function app_examples(context) {
  "no-store so a data-only corpus rebuild is never masked by a cached JSON on hash-only navigation";
  let response = await fetch("examples_data.json", {
    cache: "no-store",
  });
  let examples = await response.json();
  let root = property_get(context, "root");
  html_margin_0(root);
  let value = app_shared_color_page_background();
  html_style_background(root, value);
  ("which example is open belongs to this tab, so two tabs can read two examples");
  function select(index) {
    storage_session_set(app_examples, "selected", index);
    render();
  }
  function to_menu() {
    storage_session_set(app_examples, "selected", null);
    render();
  }
  function render() {
    html_clear(root);
    let page = app_shared_container_blue(root);
    html_style_set(page, "max-width", "62rem");
    html_style_margin(page, "2rem auto");
    html_style_padding(page, "2rem");
    html_font_set(page, "system-ui, sans-serif");
    html_font_color_set(page, "#1a1a1a");
    let selected = storage_session_get(app_examples, "selected");
    if (number_is(selected)) {
      function on_prev() {
        let index2 = subtract(selected, 1);
        let r = list_get_wrap_index(examples, index2);
        select(r);
      }
      function on_next() {
        let r2 = list_get_wrap_index(examples, selected + 1);
        select(r2);
      }
      examples_single_dom(page, examples, selected, on_prev, on_next, to_menu);
    } else {
      examples_menu_dom(page, examples, select);
    }
    ("render() clears root each time, so re-add the contact button here to keep it present on every view");
    app_shared_contact_button(page, app_examples);
  }
  render();
}
