export function app_g_day_guide_keyframe() {
  "the gold guide tile's PULSE: the box-shadow glows gold→white (the same 'correct answer' glow values) while the FILL fades INVERSELY — and the fill also LIGHTENS as it solidifies, so the near-solid state is a PALE gold (rgb 255,235,150) rather than a heavy saturated blob, easing toward the richer gold (rgb 255,214,51) as it fades to see-through. so the tile breathes between a soft pale-gold marker and a rich see-through glow";
  let keyframe =
    "@keyframes g_day_guide_pulse { 0% { box-shadow: 0 0 0.8em 0.3em #ffd633; background-color: rgba(255, 235, 150, 0.85); } 100% { box-shadow: 0 0 1.6em 0.7em #ffffff; background-color: rgba(255, 214, 51, 0.12); } }";
  return keyframe;
}
