import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { each_range_from } from "./each_range_from.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { multiply } from "./multiply.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_bless_cell } from "./app_g_bless_cell.mjs";
export function app_g_bless_grid(parent, world) {
  arguments_assert(arguments, 2);
  "The ground around the player, drawn from above, with the cone they are looking down washed";
  "lighter and everybody standing about shown where they stand.";
  "Hands back the markers of everybody the player can see. That list IS the visible set the";
  "prayer covers, so a caller can light exactly those up and the player watches the blessing";
  "land on the people it was counted from.";
  "Drawn around the player rather than around the world's middle, because what a player can";
  "see has to follow them - a fixed frame would let them walk out of their own view.";
  let cone = property_get(world, "cone");
  let span = property_get(world, "span");
  let middle_x = property_get(cone, "x");
  let middle_y = property_get(cone, "y");
  let both_sides = multiply(span, 2);
  let across = add(both_sides, 1);
  let grid = html_div(parent);
  let columns = text_combine_multiple(["repeat(", across, ", max-content)"]);
  html_style_assign(grid, {
    display: "grid",
    "grid-template-columns": columns,
    "justify-content": "center",
  });
  let seen = [];
  function lambda$y(y) {
    function lambda$x(x) {
      let here = app_g_bless_cell(grid, world, x, y);
      list_add_multiple(seen, here);
    }
    let west = subtract(middle_x, span);
    let east = add(middle_x, span);
    each_range_from(west, east, lambda$x);
  }
  let north = subtract(middle_y, span);
  let south = add(middle_y, span);
  each_range_from(north, south, lambda$y);
  return seen;
}
