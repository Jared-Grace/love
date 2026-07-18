import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { invoke_multiple_shuffle_2 } from "./invoke_multiple_shuffle_2.mjs";
export function app_g_turn_quiz(overlay, npc, npc_text, prompt, correct, wrong) {
  "render a quiz turn: the NPC voices a need/objection (npc_text), then a prompt, then two SHUFFLED Bible-passage choices (gold Scripture) — `correct` and `wrong` each build their own passage button";
  app_g_npc_says(npc, overlay, npc_text);
  app_g_container_text(overlay, prompt);
  invoke_multiple_shuffle_2(correct, wrong);
}
