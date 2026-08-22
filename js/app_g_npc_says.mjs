import { app_g_words_glossed } from "./app_g_words_glossed.mjs";
import { app_g_npc_bubble } from "./app_g_npc_bubble.mjs";
export function app_g_npc_says(npc, overlay, npc_says) {
  "the words are drawn one span each rather than as one run of text, so a player can tap a word the game means to teach and be told what it means without leaving the conversation. the sentence wraps exactly as it did before - a reader cannot tell it was cut up until they touch it.";
  let container = app_g_npc_bubble(npc, overlay);
  app_g_words_glossed(container, npc_says);
}
