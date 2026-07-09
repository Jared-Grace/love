import { emoji_wave } from "../../../love/public/src/emoji_wave.mjs";
import { emoji_pray } from "../../../love/public/src/emoji_pray.mjs";
import { app_g_button_green } from "../../../love/public/src/app_g_button_green.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_g_button_conversation_end(overlay, conversation_end) {
  app_g_button_green(
    overlay,
    text_combine_multiple([
      emoji_pray(),
      emoji_wave(),
      " Pray and then politely end the conversation",
    ]),
    conversation_end,
  );
}
