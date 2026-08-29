import { arguments_assert } from "./arguments_assert.mjs";
import { tiles_sides } from "./tiles_sides.mjs";
import { property_get } from "./property_get.mjs";
import { g_z } from "./g_z.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function g_tiles_ground_tint_depth(tiles) {
  arguments_assert(arguments, 1);
  ("How far forward a patch of ground stands, given as the depth a single wrapper holding the whole patch should be placed at.");
  ("The depth of the LOWEST of its squares, which is where the last of them would have stood had each been placed on its own. Gathered under one wrapper they can only be at one depth, and taking the deepest keeps the patch in front of everything it was in front of before.");
  ("Taking the shallowest instead would put a house behind the pale light of the cone the player is looking down, and a prayed-for building sliding under the thing that pointed at it is the one arrangement this must never produce.");
  ("Written as a sum for the stylesheet to work out rather than as a number worked out here, so the layer it is measured from stays a single named thing. A number baked in at this end would be that layer copied, and a copy is free to be left behind when the layer moves.");
  let sides = tiles_sides(tiles);
  let y_most = property_get(sides, "bottom");
  let layer = g_z("ground_tint");
  let depth = text_combine_multiple(["calc(", layer, " + ", y_most, ")"]);
  return depth;
}
