import { html_font_include } from "../../../love/public/src/html_font_include.mjs";
export function html_roboto_include() {
  const href =
    "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap";
  let fn = html_roboto_include;
  html_font_include(fn, href);
}
