import { app_shared_glow_shadow } from "./app_shared_glow_shadow.mjs";
import { app_shared_glow_shadow_peak } from "./app_shared_glow_shadow_peak.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
export function app_g_day_guide_keyframe() {
  "the gold guide tile's PULSE: the box-shadow glows gold→white (the same 'correct answer' glow values) while the FILL fades INVERSELY — and the fill also LIGHTENS as it solidifies, so the near-solid state is a PALE gold (rgb 255,235,150) rather than a heavy saturated blob, easing toward the richer gold (rgb 255,214,51) as it fades to see-through. so the tile breathes between a soft pale-gold marker and a rich see-through glow";
  let gold = app_shared_color_gold_glow();
  let rest = app_shared_glow_shadow(gold);
  let peak = app_shared_glow_shadow_peak();
  let keyframe = `@keyframes g_day_guide_pulse { 0% { box-shadow: ${rest}; background-color: rgba(255, 235, 150, 0.85); } 100% { box-shadow: ${peak}; background-color: ${gold}1f; } }`;
  return keyframe;
}
