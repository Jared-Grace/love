import { html_style_head } from "./html_style_head.mjs";
export function app_g_player_style_initialize() {
  let style_text =
    "@keyframes pulseGlow {\n  0%,100% { \n    filter: \n      drop-shadow(0 0 1px rgba(255,255,255,1))\n      drop-shadow(0 0 2px rgba(255,255,255,0.9))\n      drop-shadow(0 0 4px rgba(255,255,255,0.5)); \n  }\n  50% { \n    filter: \n      drop-shadow(0 0 2px rgba(255,255,255,1))\n      drop-shadow(0 0 12px rgba(255,255,255,0.9))\n      drop-shadow(0 0 24px rgba(255,255,255,0.7)); \n  }\n}\n  @keyframes upDown {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); } /* move up 10px */\n}";
  html_style_head(style_text);
}
