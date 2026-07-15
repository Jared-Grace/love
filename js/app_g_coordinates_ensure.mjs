import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { g_coordinates } from "./g_coordinates.mjs";
export function app_g_coordinates_ensure(g) {
  let has = property_exists(g, "coordinates");
  if (has) {
    return;
  }
  let rows = property_get(g, "rows");
  let coordinates = g_coordinates(rows);
  property_set(g, "coordinates", coordinates);
}
