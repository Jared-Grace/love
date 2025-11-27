import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function app_g_main() {
  marker("1");
  let body = html_document_body();
  let path_prefix = "..\\";
  const src = path_prefix + "img\\game\\tiles\\seamless\\grass.png";
  let component = html_element(body, "img");
  html_attribute_set(component, "src", src);
  html_style_assign(body, {
    margin: "0",
  });
}
