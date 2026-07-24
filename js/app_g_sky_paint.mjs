import { g_phase_color } from "./g_phase_color.mjs";
import { g_phase_backdrop } from "./g_phase_backdrop.mjs";
import { g_sky_tone_write } from "./g_sky_tone_write.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_g_sky_paint(element, phase, seed) {
  "paint the sky veil at a continuous PHASE using both knobs, so the map's lights and darks always come through: the COLOUR grades via a soft-light blended tint (hue only), and the DARKNESS comes from an SVG TONE CURVE behind the veil (g_sky_tone_write sets its table, g_phase_backdrop references it) — which darkens the mids, keeps the darks distinguishable, and blooms the lights to full white. also stashes the phase on the element so a drift can resume from the LIVE value";
  element.sky_phase = phase;
  html_style_set(element, "background", g_phase_color(phase, seed));
  g_sky_tone_write(phase);
  html_style_set(element, "backdrop-filter", g_phase_backdrop(phase));
}
