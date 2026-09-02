import { add } from "./add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_concat } from "./list_concat.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { bless_building_roof } from "./bless_building_roof.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
export function bless_building_yard(families, storeys, y, set_back, x) {
  arguments_assert(arguments, 5);
  let shape = bless_building_shape();
  let r = bless_building_roof(shape, families, storeys, y, set_back, x);
  let roof = property_get(r, "roof");
  let doorways = property_get(r, "doorways");
  let windows = property_get(r, "windows");
  let walls = property_get(r, "walls");
  let built = property_get(r, "built");
  let slot = property_get(r, "slot");
  let built_on_is = property_get(r, "built_on_is");
  let columns = property_get(r, "columns");
  let yard = list_filter_not(slot, built_on_is);
  ("GROUND is everything a family living here may light: the house itself, and the one row of yard immediately in FRONT of its doors. It is a second list rather than a wider `tiles` because `tiles` is what the street is built out of - a walker treats every square of it as solid, and a yard that joined it would wall the doors off from the pavement they open onto.");
  ("Only the row in front, and only one of it. A yard row behind the roof belongs to the back of the house and would light as a stripe of its own with two rows of building between it and the family it was meant to belong to; a second row in front would spread a family halfway across the street. What is wanted is the step outside the door, which is the ground a household actually stands on.");
  ("A house standing flush with the pavement has no such row and gets none - its yard is all behind it - and that is allowed here because a low house gives its one family the whole face already. It is the TALL house that needs the step, and a tall house is set back on purpose so that it always has one.");
  let y_front = property_get(r, "y_front");
  let step = add(y_front, 1);
  function tile_on_step_is(tile) {
    let tile_y = property_get(tile, "y");
    let on = equal(tile_y, step);
    return on;
  }
  let front = list_filter(yard, tile_on_step_is);
  let ground = list_concat(built, front);
  let r2 = {
    roof,
    doorways,
    windows,
    walls,
    built,
    columns,
    yard,
    ground,
  };
  return r2;
}
