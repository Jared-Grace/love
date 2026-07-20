import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function g_sky_phase_get(g) {
  "the continuous day PHASE (0 = morning … 3 = evening) from the game save, defaulting to 0 (morning). the sky tint is a pure function of this; an unbeliever conversation walks it from morning to evening in step with its parts (0 at start, 3 when all parts are done)";
  let phase = 0;
  if (property_exists(g, "sky_phase")) {
    phase = property_get(g, "sky_phase");
  }
  return phase;
}
