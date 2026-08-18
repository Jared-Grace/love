import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_div_map_style_rows(div_map, rows) {
  arguments_assert(arguments, 2);
  ("Lays a map's grid out to the shape of the rows handed in - one grid column per tile");
  ("across and one grid row per tile down.");
  ("It is given the rows rather than fetching them, so a game that has no saved world can");
  ("draw a map too. Reading the save was the only thing in here that named a particular");
  ("game, and a second game in this family - the praying one - has a world in memory and");
  ("nothing on disk to read it from.");
  html_style_assign(div_map, {
    position: "relative",
    display: "grid",
  });
  let rows_size = list_size(rows);
  let style_value = text_combine_multiple(["repeat(", rows_size, ", auto)"]);
  html_style_set(div_map, "gridTemplateRows", style_value);
  let row_first = list_first(rows);
  let columns_size = list_size(row_first);
  let style_value2 = text_combine_multiple([
    "repeat(",
    columns_size,
    ", auto)",
  ]);
  html_style_set(div_map, "gridTemplateColumns", style_value2);
}
