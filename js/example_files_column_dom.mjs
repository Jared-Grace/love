import { html_div } from "./html_div.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { each } from "./each.mjs";
import { example_file_dom } from "./example_file_dom.mjs";
("A stacked column of files (one side — before or after — of a multi-file example).");
export function example_files_column_dom(parent, files) {
  let column = html_div(parent);
  html_style_set(column, "display", "flex");
  html_style_set(column, "flex-direction", "column");
  html_style_set(column, "gap", "0.3rem");
  html_style_set(column, "min-width", "0");
  function lambda(file) {
    example_file_dom(column, file);
  }
  each(files, lambda);
  return column;
}
