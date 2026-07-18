import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { invoke_multiple_shuffle_2 } from "./invoke_multiple_shuffle_2.mjs";
import { app_g_pray_discern } from "./app_g_pray_discern.mjs";
import { app_g_reveal_scripture } from "./app_g_reveal_scripture.mjs";
export function app_g_turn_quiz(overlay, npc, npc_text, prompt, build_correct, build_wrong, discern) {
  "render a quiz turn: the NPC voices a need/objection, then the player's choice area (light green) holds a prompt + two SHUFFLED gold Scripture choices + a pray-for-discernment button that reveals the correct one. build_correct/build_wrong each take the container and return their passage button";
  app_g_npc_says(npc, overlay, npc_text);
  let container = app_g_container_player(overlay);
  app_g_p_text(container, prompt);
  let correct = null;
  function place_correct() {
    correct = build_correct(container);
  }
  function place_wrong() {
    build_wrong(container);
  }
  invoke_multiple_shuffle_2(place_correct, place_wrong);
  app_g_pray_discern(container, correct, app_g_reveal_scripture, discern);
}
