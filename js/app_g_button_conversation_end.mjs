import { app_g_button_green } from "./app_g_button_green.mjs";
import { g_goodbye } from "./g_goodbye.mjs";
export function app_g_button_conversation_end(overlay, conversation_end) {
  "the end-conversation choice, worded as the player's own randomized WARM parting line (g_goodbye, which carries its own emojis) so leaving reads as one of the warm things you choose to SAY, not a mechanical 'end' action";
  app_g_button_green(overlay, g_goodbye(), conversation_end);
}
