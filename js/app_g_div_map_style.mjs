import { app_g_rows_get } from "./app_g_rows_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_g_div_map_style(div_map) {
  let rows = await app_g_rows_get();
  html_style_assign(div_map, {
    position: "relative",
    display: "grid",
  });
  let rows_size = list_size(rows);
  html_style_set(
    div_map,
    "gridTemplateRows",
    text_combine_multiple(["repeat(", rows_size, ", auto)"]),
  );
  let row_first = list_first(rows);
  let columns_size = list_size(row_first);
  html_style_set(
    div_map,
    "gridTemplateColumns",
    text_combine_multiple(["repeat(", columns_size, ", auto)"]),
  );
}
