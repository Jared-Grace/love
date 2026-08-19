import { property_in_list_not } from "./property_in_list_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { g_tiles_unwalkable } from "./g_tiles_unwalkable.mjs";
export function g_coordinates_land(coordinates) {
  "The tiles of a world somebody could stand on - everything that is not one of the solids.";
  "Asked against the LIST of solids rather than against water alone, so a wall keeps people";
  "out for exactly the same reason a lake does. A world with no walls in it answers the same";
  "as it always did.";
  let unwalkable = g_tiles_unwalkable();
  function land_is(coordinate) {
    let standable = property_in_list_not(coordinate, "item", unwalkable);
    return standable;
  }
  let coordinates_land = list_filter(coordinates, land_is);
  return coordinates_land;
}
