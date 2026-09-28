import { app_shared_glow_shadow } from "./app_shared_glow_shadow.mjs";
import { app_shared_glow_shadow_peak } from "./app_shared_glow_shadow_peak.mjs";
export function app_shared_glow_keyframe_generic(name_animation, color) {
  "one pulsing glow keyframe, named and coloured by its caller: the colour spreading out of the element and fading to white at the peak";
  "The shape of a glow is the same whatever it is saying - it is the colour that says which thing it is. Written once, a second glow costs a colour and a name rather than a second copy of the box-shadow arithmetic, and the two cannot drift into pulsing at different sizes and reading as two unrelated effects.";
  "White at the peak whatever the colour, because a glow is light rather than paint and light of any colour goes white as it gets stronger. It is also what keeps a dark colour readable as a glow: the fade to white is the part the eye sees moving.";
  let rest = app_shared_glow_shadow(color);
  let peak = app_shared_glow_shadow_peak();
  let keyframe = `@keyframes ${name_animation} { 0% { box-shadow: ${rest}; } 100% { box-shadow: ${peak}; } }`;
  return keyframe;
}
