import { g_phase_color } from "./g_phase_color.mjs";
import { g_phase_brightness } from "./g_phase_brightness.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_sky_paint(element, phase, seed) {
  "paint the sky veil at a continuous PHASE using BOTH knobs, so the map's lights and darks always come through: the COLOUR grades via a soft-light blended tint (hue only), and the DARKNESS comes from a backdrop-filter brightness that SCALES luminance (lights stay relatively light, darks stay dark). an opaque veil would instead flatten highlights and shadows toward one colour. also stashes the phase on the element so a drift can resume from the LIVE value";
  element.sky_phase = phase;
  html_style_set(element, "background", g_phase_color(phase, seed));
  let brightness = text_combine_multiple([
    "brightness(",
    g_phase_brightness(phase),
    ")",
  ]);
  html_style_set(element, "backdrop-filter", brightness);
}
