import { html_style_head } from "./html_style_head.mjs";
import { app_shared_glow_correct_keyframe } from "./app_shared_glow_correct_keyframe.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_g_player_style_initialize() {
  let pulse_and_up_down =
    "@keyframes pulseGlow {\n  0%,100% { \n    filter: \n      drop-shadow(0 0 1px rgba(255,255,255,1))\n      drop-shadow(0 0 2px rgba(255,255,255,1))\n      drop-shadow(0 0 4px rgba(255,255,255,0.9)); \n  }\n  50% { \n    filter: \n      drop-shadow(0 0 2px rgba(255,255,255,1))\n      drop-shadow(0 0 12px rgba(255,255,255,0.9))\n      drop-shadow(0 0 24px rgba(255,255,255,0.7)); \n  }\n}\n  @keyframes upDown {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); } /* move up 10px */\n}\n";
  let style_text = text_combine(pulse_and_up_down, app_shared_glow_correct_keyframe());
  html_style_head(style_text);
}
