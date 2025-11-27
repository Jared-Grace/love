import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function html_img(body, src) {
  let component = html_element(body, "img");
  html_attribute_set(component, "src", src);
  return component;
}
