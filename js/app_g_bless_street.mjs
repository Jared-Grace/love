import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { bless_street } from "./bless_street.mjs";
export function app_g_bless_street(player) {
  "The one street laid into the world so far - seven tiles of path running east, three tiles";
  "north of wherever the player is first set down.";
  "Those numbers are not decoration. A cone three tiles deep is exactly seven tiles wide at";
  "its far edge, so standing where you began and facing north puts this whole street in";
  "sight and nothing else does. The place rung is therefore reachable, and reachable only by";
  "aiming, which is the thing the rung is meant to cost.";
  "Placed against the player rather than against the world's corner, because the world is";
  "generated now and the player is set down somewhere different every time. A street at a";
  "fixed corner would be a street most players never find.";
  arguments_assert(arguments, 1);
  let x = property_get(player, "x");
  let y = property_get(player, "y");
  let start_x = subtract(x, 3);
  let start_y = subtract(y, 3);
  let street = bless_street(start_x, start_y, "east", 7);
  return street;
}
