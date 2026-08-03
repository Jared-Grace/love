import { fn_name } from "./fn_name.mjs";
export function g_directions_all() {
  "Every facing that exists as a PNG under characters/<img>/rotations/, in ring order.";
  ("There are eight of them. The game itself walks on four, which is what ",
    fn_name("g_directions"),
    " returns, so the two lists differ on purpose: this one says what the art HOLDS and that one says what the game USES.");
  ("Ring order, not alphabetical. Each name is one eighth turn from the one before it, so the list read straight through is the character turning once all the way round - which is how a contact sheet shows whether a rotation is broken.");
  let r = [
    "south",
    "south-east",
    "east",
    "north-east",
    "north",
    "north-west",
    "west",
    "south-west",
  ];
  return r;
}
