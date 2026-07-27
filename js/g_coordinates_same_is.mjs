import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
export function g_coordinates_same_is(a, b) {
  "true when two coordinates occupy the SAME tile — x AND y equal. one place for the tile-identity test that tap handling keeps needing: is this the player's OWN tile (open the self/prayer menu)? the discerned target? the one allowed guide tile?";
  let same_x = equal(property_get(a, "x"), property_get(b, "x"));
  let same_y = equal(property_get(a, "y"), property_get(b, "y"));
  return and(same_x, same_y);
}
