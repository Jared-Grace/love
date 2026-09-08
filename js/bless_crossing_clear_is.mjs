import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_crossing_look_tiles } from "./bless_crossing_look_tiles.mjs";
import { property_equals } from "./property_equals.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { and } from "./and.mjs";
import { list_any } from "./list_any.mjs";
import { not } from "./not.mjs";
export function bless_crossing_clear_is(world, at) {
  arguments_assert(arguments, 2);
  ("Whether the road is clear enough at one column to step out into - which it is when no car");
  ("in either lane is bearing down on that column from close by.");
  ("It asks about a COLUMN rather than about a square, because the walker is about to cross");
  ("both lanes and a car in the far one will be in the near one's place by the time they get");
  ("there. Looking only at the lane being entered is looking one way.");
  ("Only cars that are COMING count. A car that has already gone past the column is going");
  ("further away every step, and a walker who waited for the road behind them to empty would");
  ("be waiting on something that has nothing to do with them.");
  ("Distance rather than time, and the whole reason it can be that simple is that every car");
  ("on this street moves at one fixed pace. Where a car is IS how long it has to arrive.");
  ("This decides good manners, not safety. A car gives way to anybody already on the road, so");
  ("stepping out in front of one would stop it rather than hurt anybody; what this buys is a");
  ("street where the walker waits for a gap like a person, instead of walking out and making");
  ("the traffic deal with it.");
  let vehicles = property_get(world, "vehicles");
  let reach = bless_crossing_look_tiles();
  function bearing_down_is(vehicle) {
    let x = property_get(vehicle, "x");
    let east_is = property_equals(vehicle, "direction", "east");
    let gap = subtract(x, at);
    if (east_is) {
      gap = subtract(at, x);
    }
    let coming = greater_than_equal(gap, 0);
    let close = less_than_equal(gap, reach);
    let both = and(coming, close);
    return both;
  }
  let near = list_any(vehicles, bearing_down_is);
  let clear = not(near);
  return clear;
}
