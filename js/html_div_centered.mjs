import { html_centered } from "./html_centered.mjs";
import { html_div } from "./html_div.mjs";
export function html_div_centered(p) {
  let d = html_div(p);
  html_centered(d);
  return d;
}
