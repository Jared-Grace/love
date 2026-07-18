import { html_code_element } from "./html_code_element.mjs";
import { html_escape } from "./html_escape.mjs";
import { text_combine } from "./text_combine.mjs";
export function example_io_column_html(label, block) {
  let label_html = html_code_element(
    "div",
    { class: "io-label" },
    html_escape(label),
  );
  let inner = text_combine(label_html, block);
  let r = html_code_element("div", { class: "io-col" }, inner);
  return r;
}
