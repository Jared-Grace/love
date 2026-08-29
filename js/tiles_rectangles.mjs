import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { tiles_sides } from "./tiles_sides.mjs";
import { tiles_rectangles_row_scan } from "./tiles_rectangles_row_scan.mjs";
import { each_range_from } from "./each_range_from.mjs";
export function tiles_rectangles(tiles) {
  arguments_assert(arguments, 1);
  ("A patch of ground given as loose squares, handed back as the fewest whole rectangles");
  ("that cover exactly the same ground and no more.");
  ("What this is for is drawing. A mark laid down one square at a time is drawn as squares:");
  ("every square carries its own edge, its own inner light, its own faint seam against the");
  ("one beside it, and a house comes out looking like a grid of tiles that happen to share a");
  ("colour rather than like one lit building. Laid down as rectangles, the seams inside a");
  ("solid block simply do not exist - there is nothing there to draw an edge on - and the");
  ("only edges left are the edges the shape really has.");
  ("Squares touching at a CORNER are not joined, because a rectangle cannot hold them;");
  ("squares touching along a SIDE are. That is the same rule the player reads off the screen");
  ("- ground you could walk along without stepping diagonally is one piece of ground.");
  ("Greedy, and greedy is enough. Starting at the top left of what is left, it takes the");
  ("widest run of squares it can reach along that row and then pushes that run down as far");
  ("as every row underneath is just as wide. A block of any size comes back as ONE rectangle,");
  ("which is the case this exists for and the shape almost every house on this map is. A");
  ("stranger shape - two houses meeting at an angle - comes back as a handful rather than as");
  ("the one a cleverer search would find, and the difference between those two answers is a");
  ("single seam in the middle of an odd corner, which is not worth an algorithm.");
  ("The order it works in is what makes it total and repeatable: rows from the top, squares");
  ("from the left, and every square it uses is struck off as it goes, so nothing is covered");
  ("twice and nothing is left behind. The same patch always comes back the same way, which");
  ("matters because the answer is redrawn on every step and a shape that reshuffled itself");
  ("would flicker.");
  let left = new Set();
  function key_of(x, y) {
    let key = text_combine_multiple([x, ",", y]);
    return key;
  }
  function tile_note(tile) {
    let x = property_get(tile, "x");
    let y = property_get(tile, "y");
    let key = key_of(x, y);
    left.add(key);
  }
  each(tiles, tile_note);
  let sides = tiles_sides(tiles);
  let x_least = property_get(sides, "left");
  let x_most = property_get(sides, "right");
  let y_least = property_get(sides, "top");
  let y_most = property_get(sides, "bottom");
  let rectangles = [];
  function row_scan(y) {
    let r = tiles_rectangles_row_scan(
      y,
      key_of,
      left,
      rectangles,
      x_least,
      x_most,
    );
    return r;
  }
  each_range_from(y_least, y_most, row_scan);
  return rectangles;
}
