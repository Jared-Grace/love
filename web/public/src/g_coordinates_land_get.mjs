import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
import { list_filter_property_not } from "../../../love/public/src/list_filter_property_not.mjs";
import { app_a_water } from "../../../love/public/src/app_a_water.mjs";
export function g_coordinates_land_get(coordinates) {
  let w = app_a_water();
  const property_name = "item";
  let coordinates_land = list_filter_property_not(
    coordinates,
    property_name,
    w,
  );
  list_shuffle(coordinates_land);
  return coordinates_land;
}
