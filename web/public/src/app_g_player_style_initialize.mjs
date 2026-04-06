import { html_style_head } from "../../../love/public/src/html_style_head.mjs";
export function app_g_player_style_initialize() {
  const style_text = `@keyframes pulseGlow {
  0%,100% { 
    filter: 
      drop-shadow(0 0 1px rgba(255,255,255,0.5))
      drop-shadow(0 0 3px rgba(255,255,255,0.3))
      drop-shadow(0 0 12px rgba(255,255,255,0.1)); 
  }
  50% { 
    filter: 
      drop-shadow(0 0 2px rgba(255,255,255,1))
      drop-shadow(0 0 12px rgba(255,255,255,0.9))
      drop-shadow(0 0 24px rgba(255,255,255,0.7)); 
  }
}
  @keyframes upDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); } /* move up 10px */
}`;
  html_style_head(style_text);
}
