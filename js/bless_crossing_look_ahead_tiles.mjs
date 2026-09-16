import { arguments_assert } from "./arguments_assert.mjs";
export function bless_crossing_look_ahead_tiles() {
  arguments_assert(arguments, 0);
  ("How far up the road the camera leans when the walker turns their head that way, counted");
  ("in squares.");
  ("It is the distance that puts the road the walker is looking at in the middle of the");
  ("screen while leaving the walker themselves plainly on it. Centred on the walker, both");
  ("directions look identical and a turned head is a few pixels nobody reads; centred far");
  ("enough up the road to lose the walker, the screen is looking at traffic on its own");
  ("behalf and the player has stopped being shown a person deciding something.");
  ("Three squares is about a third of what the close view holds, so the walker sits off to");
  ("one side and the road they are watching fills the rest. It also stays well inside the");
  ("distance they are actually checking, so the car they are waiting for comes into the");
  ("picture before it matters rather than arriving from off the edge.");
  let tiles = 3;
  return tiles;
}
