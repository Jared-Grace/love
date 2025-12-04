import { emoji_wave } from "../../../love/public/src/emoji_wave.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
export function app_g_button_conversation_end(overlay, overlay_close) {
  app_g_button_green(
    overlay,
    emoji_pray() +
      emoji_wave() +
      " Pray and then politely end the conversation",
    overlay_close,
  );
}
