import { html_br } from "../../../love/public/src/html_br.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_style_grid } from "../../../love/public/src/html_style_grid.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_cartesian_product_self } from "../../../love/public/src/list_cartesian_product_self.mjs";
export function app_designs_universal_main(context) {
  let root = object_property_get(context, "root");
  const size = "7px";
  html_style_assign(root, {
    display: "flex",
    "flex-wrap": "wrap",
    gap: size,
  });
  html_style_background_color(root, "gray");
  let colors = ["black", "white"];
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
    {
      columns: 3,
      rows: 2,
    },
    {
      columns: 3,
      rows: 3,
    },
  ];
  function lambda4(dimension) {
    let container = html_br(root);
    let columns = object_property_get(dimension, "columns");
    let rows = object_property_get(dimension, "rows");
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
          html_style_background_color(column, item);
        }
        each_range(columns, lambda2);
      }
      each_range(rows, lambda);
    }
    each(possbilities, lambda3);
  }
  each(dimensions, lambda4);
}
