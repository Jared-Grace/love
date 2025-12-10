import { html_document_head } from "../../../love/public/src/html_document_head.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function html_script_module(script_body_text) {
  marker("1");
  let body = html_document_head();
  let component = html_element(body, "script");
  html_text_set(component, script_body_text);
  html_attribute_set(component, "type", "module");
}
