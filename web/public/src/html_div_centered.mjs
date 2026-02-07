import { html_centered } from "../../../love/public/src/html_centered.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function html_div_centered(p) {
  let d = html_div(p);
  html_centered(d);
  return d;
}
