import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_hero_fire_glow() {
  arguments_assert(arguments, 0);
  ("The light the player's fire gives off: gold at the heart of it and red further out.");
  ("It is one function because the fire is thrown, held, and shoved back and forth against");
  ("the killer's power, and a fire that changed colour between the throwing and the holding");
  ("would read as two different powers rather than one carried through.");
  let glow =
    "drop-shadow(0 0 0.15em rgba(255, 200, 0, 1)) drop-shadow(0 0 0.5em rgba(255, 60, 0, 1))";
  return glow;
}
