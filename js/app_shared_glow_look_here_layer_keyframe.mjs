import { app_shared_color_brand_blue } from "./app_shared_color_brand_blue.mjs";
import { app_shared_glow_shadow } from "./app_shared_glow_shadow.mjs";
import { app_shared_glow_shadow_peak } from "./app_shared_glow_shadow_peak.mjs";
import { app_shared_glow_look_here_layer_animation_name } from "./app_shared_glow_look_here_layer_animation_name.mjs";
export function app_shared_glow_look_here_layer_keyframe() {
  "the keyframe of the look-here layer: from no light at all up to the full glow, which the lit state runs back and forth";
  "Starting from nothing rather than from the resting glow, so every cycle goes all the way out and all the way up. A pulse that never went dark read as a light stuck half on.";
  "Full strength by half way, while the light is still blue, and only then the swell to the peak. Fading across the whole cycle left the blue half dimmed and full strength only at the peak, which is white and barely shows on a pale page - the glow read as faint.";
  let color = app_shared_color_brand_blue();
  let rest = app_shared_glow_shadow(color);
  let peak = app_shared_glow_shadow_peak();
  let name_animation = app_shared_glow_look_here_layer_animation_name();
  let keyframe = `@keyframes ${name_animation} { 0% { opacity: 0; box-shadow: ${rest}; } 50% { opacity: 1; box-shadow: ${rest}; } 100% { opacity: 1; box-shadow: ${peak}; } }`;
  return keyframe;
}
