import { html_link } from "../../../love/public/src/html_link.mjs";
import { html_attribute_set } from "../../../love/public/src/html_attribute_set.mjs";
export function html_roboto() {
  let l = html_link();
  html_attribute_set(
    l,
    "href",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
  );
  html_attribute_set(l, "rel", "stylesheet");
}
