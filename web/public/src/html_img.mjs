import { html_src_set } from "../../../love/public/src/html_src_set.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
export function html_img(body, src) {
  let component = html_element(body, "img");
  html_src_set(component, src);
  return component;
}
