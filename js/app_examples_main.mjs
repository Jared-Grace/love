import { property_get } from "./property_get.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { examples_body_html } from "./examples_body_html.mjs";
// Client entry for the examples app: fetch the serialized corpus, render the
// cards into the page root. Runs in-browser (bundled), so the corpus arrives as
// JSON (examples_data_write) rather than the node-only reader.
export async function app_examples_main(context) {
  let response = await fetch("examples_data.json");
  let examples = await response.json();
  let html = examples_body_html(examples);
  let root = property_get(context, "root");
  let element = html_component_element_get(root);
  element.innerHTML = html;
}
