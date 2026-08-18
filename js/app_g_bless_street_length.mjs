import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { bless_depth_start } from "./bless_depth_start.mjs";
export function app_g_bless_street_length() {
  "How many tiles long the first street is - exactly as wide as the cone is at its far edge.";
  "Derived from how far the player can see rather than written down, because that is the";
  "whole reason for the number. The street is the first place rung, and a rung is earned by";
  "seeing every tile of a place at once: one tile longer and it could never be seen, one";
  "shorter and it would be seen without aiming carefully. Written as a plain seven, it would";
  "quietly stop being either the day somebody changed how far a person can see.";
  "The cone widens by a tile for every tile of distance, a quarter turn either side of";
  "straight ahead - so at its furthest it spans the depth to the left, the depth to the";
  "right, and the tile straight in front.";
  let depth = bless_depth_start();
  let sides = multiply(depth, 2);
  let length = add(sides, 1);
  return length;
}
