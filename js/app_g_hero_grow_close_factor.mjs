import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_hero_grow_close_factor() {
  arguments_assert(arguments, 0);
  ("How much larger a square is drawn while the player is growing - the close view is this");
  ("many times the distance the game is ordinarily played at.");
  ("It is its own number rather than the shared one because the two close-ups are looking at");
  ("different things. At a kerb what is being watched is the ROAD, so the camera may only");
  ("come in as far as still leaves the traffic on the screen; here what is being watched is");
  ("the PLAYER HERSELF, and everything else on the screen is in the way.");
  ("So this one goes much further in. What she gains is a fraction of the height of a figure");
  ("the size of a thumbnail - a pixel or two - and at anything less than this the growth is");
  ("something the player is told about rather than something they see. Brought in this far,");
  ("she is a large figure standing in the middle of the screen and the change in her is the");
  ("only thing moving.");
  let factor = 3.2;
  return factor;
}
