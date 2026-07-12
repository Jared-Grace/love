import { html_remove } from "./html_remove.mjs";
export function html_remove_lambda(component) {
  let r = function lambda() {
    html_remove(component);
  };
  return r;
}
