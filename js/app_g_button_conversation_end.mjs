import { emoji_wave } from "./emoji_wave.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_goodbye } from "./g_goodbye.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_button_conversation_end(overlay, conversation_end) {
  "the end-conversation choice, worded as the player's own randomized PARTING line (g_goodbye) so leaving reads as one of the things you choose to SAY, not a mechanical 'end' action";
  app_g_button_green(
    overlay,
    text_combine_multiple([emoji_wave(), " ", g_goodbye()]),
    conversation_end,
  );
}
