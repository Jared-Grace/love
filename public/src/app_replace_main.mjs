import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_element } from "./html_element.mjs";
import { html_document_head } from "./html_document_head.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_refresh } from "./app_refresh.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { app_replace_screens } from "./app_replace_screens.mjs";
import { app_replace } from "./app_replace.mjs";
export function app_replace_main() {
  let app_fn = app_replace;
  let screens = app_replace_screens();
  const head = html_document_head();
  let component = html_element(head, "meta");
  let name = "name";
  let value = "viewport";
  let element = html_component_element_get(component);
  element.setAttribute(name, value);
  const root = html_document_body();
  app_refresh({
    app_fn,
    screens,
    root: root,
  });
  let p = html_p_text(root, "f");
}
