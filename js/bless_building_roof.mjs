import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_building_columns } from "./bless_building_columns.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { bless_building_built_on_is } from "./bless_building_built_on_is.mjs";
export function bless_building_roof(shape, families, storeys, y, set_back, x) {
  arguments_assert(arguments, 6);
  let depth = property_get(shape, "depth");
  let slab = property_get(shape, "family_width");
  let columns = bless_building_columns(families, storeys);
  let width = multiply(columns, slab);
  let rows_slot = subtract(depth, 1);
  let y_flush = add(y, rows_slot);
  let r = bless_building_built_on_is({
    y_flush,
    set_back,
    storeys,
    x,
    width,
    slab,
    families,
    columns,
    y,
    depth,
  });
  let built_on_is = property_get(r, "built_on_is");
  let slot = property_get(r, "slot");
  let built = property_get(r, "built");
  let walls = property_get(r, "walls");
  let windows = property_get(r, "windows");
  let doorways = property_get(r, "doorways");
  let roof = property_get(r, "roof");
  let r2 = {
    columns,
    built_on_is,
    slot,
    built,
    walls,
    windows,
    doorways,
    roof,
  };
  return r2;
}
