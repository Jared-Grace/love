import { g_water } from "./g_water.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function g_coordinates_water_is(coordinates) {
  "whether this ONE thing is a water tile. a tile carries what it is in its own item, so a tile that has been kept somewhere else - the day's target, say - can still be asked long after the map list it came from is out of reach";
  "a person has no item at all, and a thing with no item is not water. that is the whole reason the property is asked for BEFORE it is read: the callers hand over a target that is a person on most days and a tile on the last of them, and reading a property nobody put there is an error rather than a no";
  let property_name = "item";
  let told = property_exists(coordinates, property_name);
  if (not(told)) {
    return false;
  }
  let item = property_get(coordinates, property_name);
  let water = g_water();
  let same = equal(item, water);
  return same;
}
