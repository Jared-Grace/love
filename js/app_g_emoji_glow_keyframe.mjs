import { html_style_head } from "./html_style_head.mjs";
import { app_shared_color_gold_glow } from "./app_shared_color_gold_glow.mjs";
export function app_g_emoji_glow_keyframe() {
  ("the breathing gold→white glow keyframe (@keyframes emojiGlow) for a sacred emoji — praying hands, dove; inject via ",
    html_style_head.name,
    ", apply as 'animation: emojiGlow 1.6s ease-in-out infinite alternate'");
  let gold = app_shared_color_gold_glow();
  let keyframe = `@keyframes emojiGlow { 0% { text-shadow: 0 0 0.15em ${gold}; transform: scale(1); } 100% { text-shadow: 0 0 0.4em #ffffff; transform: scale(1.08); } }`;
  return keyframe;
}
