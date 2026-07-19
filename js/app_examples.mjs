import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_card_dom } from "./example_card_dom.mjs";
// Client entry for the examples app: fetch the serialized corpus and build the
// page as DOM nodes with the shared style fns (matching the other apps). Runs
// in-browser (bundled), so the corpus arrives as JSON (examples_data_write).
export async function app_examples(context) {
  let response = await fetch("examples_data.json");
  let examples = await response.json();
  let root = property_get(context, "root");
  html_style_set(root, "margin", "0");
  html_style_set(root, "background", "#fafafa");
  let page = html_div(root);
  html_style_set(page, "max-width", "62rem");
  html_style_set(page, "margin", "0 auto");
  html_style_set(page, "padding", "2rem");
  html_style_set(page, "font-family", "system-ui, sans-serif");
  html_style_set(page, "color", "#1a1a1a");
  let heading = html_element(page, "h1");
  html_text_set(heading, "Transform examples");
  html_style_set(heading, "font-size", "1.6rem");
  for (let example of examples) {
    example_card_dom(page, example);
  }
}
