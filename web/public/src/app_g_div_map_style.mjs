import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_g_game_save_get } from "../../../love/public/src/app_g_game_save_get.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export async function app_g_div_map_style(div_map) {
  let g = await app_g_game_save_get();
  let rows = property_get(g, "rows");
  html_style_assign(div_map, {
    position: "relative",
    display: "grid",
  });
  let rows_size = list_size(rows);
  html_style_assign(div_map, {
    gridTemplateRows: "repeat(" + rows_size + ", auto)",
  });
  let row_first = list_first(rows);
  let columns_size = list_size(row_first);
  html_style_assign(div_map, {
    gridTemplateColumns: "repeat(" + columns_size + ", auto)",
  });
}
