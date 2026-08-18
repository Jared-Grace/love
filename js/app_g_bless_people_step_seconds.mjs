import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_bless_people_step_seconds() {
  arguments_assert(arguments, 0);
  ("How long the crowd stands still between one step and the next, in seconds.");
  ("Slower than a slide takes and slower than a person reads. A crowd that stepped every");
  ("half second would make the readout change under the player while they were still reading");
  ("the line that counted them, and the game would feel like it was arguing with them.");
  ("Two seconds is long enough that a number on the screen is true for as long as it takes to");
  ("believe it, and short enough that the street is plainly alive rather than a photograph.");
  let seconds = 2;
  return seconds;
}
