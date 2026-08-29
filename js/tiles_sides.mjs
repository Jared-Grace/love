import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_min } from "./list_min.mjs";
import { list_max } from "./list_max.mjs";
export function tiles_sides(tiles) {
  arguments_assert(arguments, 1);
  ("The four edges of the smallest box that holds a patch of ground given as loose squares.");
  ("The edges and not the middle, and not how big the box is either, because both of those are one step away from the edges and every caller wants a different one of them. A caller that worked out its own would be reading the same four numbers a second time, and two readings of the same four numbers are two chances to disagree.");
  ("The edges of the BOX, which is not the average of the squares, and the two part company the moment the patch is not a rectangle. A shape with one strip counted three times drags an average towards that strip; the far edges have no such lean, being decided by the outermost squares and by nothing in between.");
  ("Named for the record it hands back rather than for what anybody does with it, so it reads as the sides a box has and can be handed straight to anything that already asks for sides.");
  ("An empty patch has no edges, and this does not pretend otherwise - it asks the least and the greatest of nothing and hands back whatever that comes to. Every caller here is given a patch that exists, so an answer for the empty case would be an answer nobody reads and a claim nobody checked.");
  function tile_x(tile) {
    let x = property_get(tile, "x");
    return x;
  }
  function tile_y(tile) {
    let y = property_get(tile, "y");
    return y;
  }
  let xs = list_map(tiles, tile_x);
  let ys = list_map(tiles, tile_y);
  let left = list_min(xs);
  let right = list_max(xs);
  let top = list_min(ys);
  let bottom = list_max(ys);
  let sides = {
    left,
    top,
    right,
    bottom,
  };
  return sides;
}
