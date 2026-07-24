import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
export function g_sky_phase_get(g) {
  "the continuous day PHASE (0 = morning … 4 = night, 5 = sunrise) from the game save, defaulting to 0 (morning). the sky tint is a pure function of this; an unbeliever conversation walks it from morning to night in step with its parts (0 at start, the night index when all parts are done — see app_g_conversation, which targets g_time_index(\"night\") so the count is never hardcoded)";
  let phase = 0;
  if (property_exists(g, "sky_phase")) {
    phase = property_get(g, "sky_phase");
  }
  return phase;
}
