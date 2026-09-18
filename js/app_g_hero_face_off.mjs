import { app_shared_game_npc_face } from "./app_shared_game_npc_face.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_direction_toward } from "./g_direction_toward.mjs";
import { app_shared_game_character_turn_start } from "./app_shared_game_character_turn_start.mjs";
export function app_g_hero_face_off(hero, evil) {
  arguments_assert(arguments, 2);
  ("Turns the player and the killer to look at each other, each as squarely as four");
  ("directions allow.");
  ("A fight between two people who are both facing the wrong way is two people ignoring each");
  ("other while power flies between them. Everything else in the exchange already travels the");
  ("right way - the fire leaves her and arrives at them, the dark orb leaves them and breaks");
  ("on her - so the one thing saying it is not a fight is where the two of them are looking.");
  ("BOTH are turned, and by the same call, because facing is the one part of this that is");
  ("symmetrical. Turning only the attacker would leave whoever was struck looking away from");
  ("the thing that struck them, which reads worse than neither of them turning.");
  ("It is done BEFORE the power is gathered rather than when it lands. The gathering is the");
  ("longest act in the exchange and the one the player watches most closely, so a turn that");
  ("waited for the throw would spend the whole of it facing away and then snap round.");
  let player = property_get(hero, "player");
  let player_img_c = property_get(hero, "player_img_c");
  ("The killer's half of it is WRITTEN DOWN as a turn of theirs, and the player's is not. The rest between turns is a rule about people on the street, and squaring up is the one moment a person on the street is turned by something other than their own walking: unnoted, the step they took next found no turn to rest after and turned them again at once, and the two were drawn as one sweep right round.");
  let at_evil = g_direction_toward(player, evil);
  app_shared_game_character_turn_start(player, player_img_c, at_evil);
  let at_player = g_direction_toward(evil, player);
  app_shared_game_npc_face(evil, at_player);
}
