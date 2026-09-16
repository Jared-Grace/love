import { arguments_assert } from "./arguments_assert.mjs";
export function bless_crossing_look_tiles() {
  arguments_assert(arguments, 0);
  ("How many squares of clear road a walker wants to see before they step off the kerb.");
  ("FOUR, and it is a number of squares rather than of seconds on purpose, because that is");
  ("what a person actually judges. Nobody times a car; they look at how far away it is and");
  ("at how fast the traffic is going, and here every car goes at exactly one speed, so the");
  ("distance is the whole of the judgement.");
  ("Four squares is a little over a second at the pace the cars keep, which is about as long");
  ("as somebody would want to be standing in a lane. It is also more than the two squares the");
  ("crossing is deep, so the gap being waited for is long enough to walk the whole way over");
  ("and not merely to get started.");
  ("Not longer, because a walker who waits for an empty street never crosses at all, and");
  ("waiting is the least interesting thing this game can ask anybody to watch. The cars give");
  ("way to somebody already on the crossing, so this number decides how POLITE the crossing");
  ("looks and not whether it is safe - safety is settled on the driver's side.");
  let tiles = 4;
  return tiles;
}
