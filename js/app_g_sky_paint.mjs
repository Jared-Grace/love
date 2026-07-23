import { g_phase_color } from "./g_phase_color.mjs";
import { g_phase_backdrop } from "./g_phase_backdrop.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_g_sky_paint(element, phase, seed) {
  "paint the sky veil at a continuous PHASE using BOTH knobs, so the map's lights and darks always come through: the COLOUR grades via a soft-light blended tint (hue only), and the DARKNESS comes from a backdrop-filter that scales luminance and expands contrast (lights stay bright, mid-tones and shadows sink). an opaque veil would instead flatten highlights and shadows toward one colour. also stashes the phase on the element so a drift can resume from the LIVE value";
  element.sky_phase = phase;
  html_style_set(element, "background", g_phase_color(phase, seed));
  html_style_set(element, "backdrop-filter", g_phase_backdrop(phase));
}
