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
  let r2 = {
    roof,
    doorways,
    windows,
    walls,
    built,
    columns,
    yard,
  };
  return r2;
}
