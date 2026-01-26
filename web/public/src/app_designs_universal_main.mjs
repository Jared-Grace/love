import { html_span } from "../../../love/public/src/html_span.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_background_color } from "../../../love/public/src/html_style_background_color.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_cartesian_product_self } from "../../../love/public/src/list_cartesian_product_self.mjs";
export function app_designs_universal_main(context) {
  let root = object_property_get(context, "root");
  html_style_background_color(root, "gray");
  let colors = ["black", "white"];
  let columns = 3;
  let rows = 2;
  let slots = rows * columns;
  let possbilities = list_cartesian_product_self(colors, slots);
  let shape = html_div(root);
  function lambda(i) {
    let row = html_div(shape);
    function lambda2(i2) {
      let column = html_span(row);
      let index = html_style_background_color(root, "gray");
    }
    each_range(columns, lambda2);
  }
  each_range(rows, lambda);
  return possbilities;
}
