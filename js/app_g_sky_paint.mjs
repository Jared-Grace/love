import { g_phase_color } from "./g_phase_color.mjs";
import { g_phase_backdrop } from "./g_phase_backdrop.mjs";
import { g_sky_tone_write } from "./g_sky_tone_write.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_g_sky_paint(element, phase, seed) {
  "paint the sky's TWO veils at a continuous PHASE. `element` is the COLOUR veil (soft-light, on top, grades everyone the same hue); `element.ground` is the DARKENING veil (below the characters, dims only the tiles) which carries the SVG TONE CURVE (g_sky_tone_write sets its table, g_phase_backdrop references it). splitting them is what keeps CHARACTERS bright and visible while the GROUND goes dark. also stashes the phase on the element so a drift can resume from the LIVE value";
  element.sky_phase = phase;
  html_style_set(element, "background", g_phase_color(phase, seed));
  g_sky_tone_write(phase);
  html_style_set(element.ground, "backdrop-filter", g_phase_backdrop(phase));
}
