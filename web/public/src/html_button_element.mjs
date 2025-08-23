import { marker } from "./marker.mjs";
import { html_element } from "./html_element.mjs";
export function html_button_element(body) {
  marker("1");
  const tag_name = "button";
  let b = html_element(body, tag_name);
  return b;
}
