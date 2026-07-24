import { g_sky_tone_ensure } from "./g_sky_tone_ensure.mjs";
import { g_phase_curve } from "./g_phase_curve.mjs";
import { each } from "./each.mjs";
export function g_sky_tone_write(phase) {
  "write the interpolated tone-curve tableValues (g_phase_curve) onto the shared SVG filter's R/G/B funcs — the DARKNESS knob for the given phase. the sky backdrop references this filter by url, so mutating the table live re-renders the map (verified in Chrome), which is what lets the tone drift smoothly toward night";
  let funcs = g_sky_tone_ensure();
  let values = g_phase_curve(phase);
  function set(fn) {
    fn.setAttribute("tableValues", values);
  }
  each(funcs, set);
}
