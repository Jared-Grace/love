import { marker } from "../../../love/public/src/marker.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function html_button_element(parent) {
  marker("1");
  const tag_name = "button";
  let b = html_element(parent, tag_name);
  return b;
}
