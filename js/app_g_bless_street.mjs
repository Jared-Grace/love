import { bless_street } from "./bless_street.mjs";
export function app_g_bless_street() {
  "The one street on the dev screen's little world - seven tiles of path running east, three";
  "tiles north of where the player starts.";
  "Those numbers are not decoration. A cone three tiles deep is exactly seven tiles wide at";
  "its far edge, so standing at the start and facing north puts this whole street in sight";
  "and nothing else does. The place rung is therefore reachable on the screen and reachable";
  "only by aiming, which is the thing the rung is meant to cost.";
  let street = bless_street(-3, -3, "east", 7);
  return street;
}
