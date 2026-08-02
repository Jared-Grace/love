import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { g_water } from "./g_water.mjs";
export function g_coordinates_land(coordinates) {
  let water = g_water();
  let property_name = "item";
  let coordinates_land = list_filter_property_not(
    coordinates,
    property_name,
    water,
  );
  return coordinates_land;
}
