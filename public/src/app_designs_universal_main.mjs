import { html_hr } from "../../../love/public/src/html_hr.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_style_grid } from "../../../love/public/src/html_style_grid.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_cartesian_product_self } from "../../../love/public/src/list_cartesian_product_self.mjs";
export function app_designs_universal_main(context) {
  let root = property_get(context, "root");
  const size = "7px";
  html_style_background_color_set(root, "gray");
  let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  let dimensions = [
    {
      columns: 1,
      rows: 1,
    },
    {
      columns: 2,
      rows: 1,
    },
    {
      columns: 2,
      rows: 2,
    },
  ];
  function lambda4(dimension) {
    let container = html_div(root);
    html_style_assign(container, {
      display: "flex",
      "flex-wrap": "wrap",
      gap: size,
    });
    let columns = property_get(dimension, "columns");
    let rows = property_get(dimension, "rows");
    let slots = rows * columns;
    let possbilities = list_cartesian_product_self(colors, slots);
    function lambda3(possibility) {
      let shape = html_div(container);
      html_style_grid(shape, columns, rows);
      function lambda(y) {
        let offset = y * columns;
        function lambda2(x) {
          let offset_x = offset + x;
          let column = html_div(shape);
          html_style_assign(column, {
            width: size,
            height: size,
          });
          let item = list_get(possibility, offset_x);
          html_style_background_color_set(column, item);
        }
        each_range(columns, lambda2);
      }
      each_range(rows, lambda);
    }
    each(possbilities, lambda3);
    let component2 = html_hr(root);
  }
  each(dimensions, lambda4);
}
