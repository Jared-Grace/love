import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_npc_says } from "./app_g_npc_says.mjs";
import { app_shared_game_container_player } from "./app_shared_game_container_player.mjs";
import { app_g_ask_what_to_do_text } from "./app_g_ask_what_to_do_text.mjs";
import { app_shared_game_p_text } from "./app_shared_game_p_text.mjs";
export function app_g_npc_says_player_ask_what_to_do(npc, overlay, said) {
  arguments_assert(arguments, 3);
  ("One turn of a conversation as the player sees it: the person in front of them says a line, and the player's own side of the screen comes back asking what they want to do.");
  ("Hands back the player's panel, because whatever the player may do next is a button and the buttons go there. A caller that had to ask for the panel separately could be handed a different one from the one just written into, and then the question and the answers to it would be sitting in two places.");
  ("The two halves are one thing on purpose. A screen where somebody spoke and the player was not asked anything is a conversation that has stopped without saying so, and a screen where the player is asked twice over has the question above the last answer as well as above this one. Both were reachable while each half was written out by hand at every screen.");
  ("The line asking what to do is fetched rather than written here, so every screen in this conversation asks in the same words. A conversation whose prompt changes wording between screens reads as several different people asking.");
  app_g_npc_says(npc, overlay, said);
  let container = app_shared_game_container_player(overlay);
  let ask = app_g_ask_what_to_do_text();
  app_shared_game_p_text(container, ask);
  return container;
}
