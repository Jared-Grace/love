import { html_element } from "./html_element.mjs";
export function html_wbr(parent) {
  "A place where the line may break, drawn as nothing at all.";
  let component = html_element(parent, "wbr");
  return component;
}
