import { app_g_button_conversation_end } from "./app_g_button_conversation_end.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { invoke_multiple_shuffle_2 } from "./invoke_multiple_shuffle_2.mjs";
import { app_g_pray_discern } from "./app_g_pray_discern.mjs";
import { app_g_reveal_scripture } from "./app_g_reveal_scripture.mjs";
export function app_g_turn_quiz(
  overlay,
  npc,
  npc_text,
  prompt,
  build_correct,
  build_wrong,
  discern,
  leave,
) {
  ("render a quiz turn: the NPC voices a need/objection, then the player's choice area (light green) holds a prompt + two SHUFFLED gold Scripture choices + the parting line + a pray-for-discernment button that reveals the correct one. build_correct/build_wrong each take the container and return their passage button.\n\nthe parting line (",
    app_g_button_conversation_end.name,
    ", running `leave`) is one of the CHOICES in the box, below the two passages and above the discernment prayer — the prompt asks what you would like to SAY, and saying goodbye is an answer to that. every caller used to append it to the overlay under the box instead, so this places it once for all of them.");
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
  app_g_button_conversation_end(container, leave);
  app_g_pray_discern(container, correct, app_g_reveal_scripture, discern);
}
