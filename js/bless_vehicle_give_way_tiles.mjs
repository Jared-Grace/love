import { arguments_assert } from "./arguments_assert.mjs";
import { bless_crossing_look_tiles } from "./bless_crossing_look_tiles.mjs";
import { bless_road_depth } from "./bless_road_depth.mjs";
import { subtract } from "./subtract.mjs";
export function bless_vehicle_give_way_tiles() {
  arguments_assert(arguments, 0);
  ("How close a walker on the road has to be before a driver gives way to them.");
  ("A driver used to give way to anybody ahead at ANY distance, and that is what made the");
  ("crossing read the wrong way round. The walker looked both ways, stepped off the kerb, and");
  ("the whole lane behind them stopped dead - so what a person watching saw was traffic");
  ("waiting for a walker, never a walker waiting for traffic. Played out against the real");
  ("rules, a car had to stop in every one of seventy-two crossings.");
  ("It is DERIVED from how far the walker looks rather than chosen, because the two numbers");
  ("are one decision seen from the two sides of it. A walker who has waited for a gap that");
  ("long is already far enough ahead of the traffic that nobody needs to brake for them; the");
  ("only cars left to give way to are the ones a walker could not have waited out - somebody");
  ("standing in the road, or crossing somewhere that is not a crossing.");
  ("The crossing's own DEPTH is what comes off, because that is the ground the walker still");
  ("has to cover after looking. A car may close that much while they are walking it, so a");
  ("driver's courtesy has to start nearer than the walker's look by exactly that, or the gap");
  ("the walker waited for would have a car braking at the end of it anyway.");
  ("Bounding it takes nothing away from safety. A car still never enters a square a walker is");
  ("standing in - it stops nearer instead of sooner, which is what a driver who has seen");
  ("somebody actually does. What it buys is a street that keeps moving behind them.");
  let looked = bless_crossing_look_tiles();
  let deep = bless_road_depth();
  let tiles = subtract(looked, deep);
  return tiles;
}
