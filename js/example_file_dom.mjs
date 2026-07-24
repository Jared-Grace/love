import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { example_file_name_dom } from "./example_file_name_dom.mjs";
import { example_code_block_dom } from "./example_code_block_dom.mjs";
("One file of a multi-file example: its filename caption over its highlighted source.");
export function example_file_dom(parent, file) {
  let name = property_get(file, "name");
  let source = property_get(file, "source");
  let wrap = html_div(parent);
  html_style_set(wrap, "min-width", "0");
  example_file_name_dom(wrap, name);
  example_code_block_dom(wrap, source);
  return wrap;
}
