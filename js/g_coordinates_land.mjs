import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { app_a_water } from "./app_a_water.mjs";
export function g_coordinates_land(coordinates) {
  let water = app_a_water();
  let property_name = "item";
  let coordinates_land = list_filter_property_not(
    coordinates,
    property_name,
    water,
  );
  return coordinates_land;
}
