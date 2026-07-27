export function app_g_day_guide_keyframe() {
  "the gold guide tile's PULSE: the box-shadow glows gold→white (the same 'correct answer' glow values) while the FILL fades INVERSELY — near-solid gold when the glow is smallest, nearly transparent (the terrain shows through) when the glow is widest. so the tile breathes between a solid gold marker and a soft see-through glow";
  let keyframe =
    "@keyframes g_day_guide_pulse { 0% { box-shadow: 0 0 0.8em 0.3em #ffd633; background-color: rgba(255, 214, 51, 0.85); } 100% { box-shadow: 0 0 1.6em 0.7em #ffffff; background-color: rgba(255, 214, 51, 0.12); } }";
  return keyframe;
}
