import { fn_name } from "./fn_name.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { g_water } from "./g_water.mjs";
export function g_coordinates_water(coordinates) {
  ("every tile of the map that IS water - the other half of ",
    fn_name("g_coordinates_land"),
    ", which is this same list with this same word asked the other way round");
  let water = g_water();
  let property_name = "item";
  let coordinates_water = list_filter_property(
    coordinates,
    property_name,
    water,
  );
  return coordinates_water;
}
