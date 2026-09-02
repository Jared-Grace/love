import { add } from "./add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { and } from "./and.mjs";
export function bless_building_family_tiles_tile_in_share(
  ground_is,
  alone_is,
  y_top,
  y_front,
  x_least,
  x_most,
) {
  "Works out the band of rows one family holds in a building, and hands back the test for whether a tile falls inside their share of it.";
  arguments_assert(arguments, 6);
  ("A family on the GROUND reaches one row PAST its doors, onto the step of yard outside them. Without it, a downstairs family with somebody living above owns the single row its door is in - one square tall and three across - which lights as a thin white strip rather than as a part of a house. The step belongs to them by the same reasoning that gives the roof to the family upstairs: it is the piece of the ground nobody else stands on.");
  ("The row is asked for whether or not it is there. A house standing flush with the pavement has no step and the ask finds nothing, which is right - that house gives its one family the whole face already, and a family alone in its column owns every row of it from the roof down.");
  function y_least_get() {
    if (ground_is) {
      if (alone_is) {
        return y_top;
      }
      return y_front;
    }
    return y_top;
  }
  function y_most_get() {
    if (ground_is) {
      let step = add(y_front, 1);
      return step;
    }
    let below = subtract(y_front, 1);
    return below;
  }
  let y_least = y_least_get();
  let y_most = y_most_get();
  function tile_in_share(tile) {
    let x = property_get(tile, "x");
    let y = property_get(tile, "y");
    let after = greater_than_equal(x, x_least);
    let before = less_than_equal(x, x_most);
    let below = greater_than_equal(y, y_least);
    let over = less_than_equal(y, y_most);
    let across = and(after, before);
    let down = and(below, over);
    let within = and(across, down);
    return within;
  }
  return tile_in_share;
}
