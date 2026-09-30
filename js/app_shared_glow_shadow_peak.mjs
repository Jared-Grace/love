import { app_shared_color_white } from "./app_shared_color_white.mjs";
export function app_shared_glow_shadow_peak() {
  "the top of every pulsing glow: twice the resting glow's reach, and white whatever colour it rose from, because light of any colour goes white as it gets stronger";
  let white = app_shared_color_white();
  let shadow = "0 0 1.6em 0.7em " + white;
  return shadow;
}
