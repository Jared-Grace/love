import { list_single } from "./list_single.mjs";
import { app_g_day_convert_tap_if } from "./app_g_day_convert_tap_if.mjs";
import { app_g_day_collect_tap_if } from "./app_g_day_collect_tap_if.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_shared_game_npc_face } from "./app_shared_game_npc_face.mjs";
import { app_shared_game_character_turn_start } from "./app_shared_game_character_turn_start.mjs";
import { app_g_npc_phase_get } from "./app_g_npc_phase_get.mjs";
import { app_g_view_npc } from "./app_g_view_npc.mjs";
import { app_g_view_set_render } from "./app_g_view_set_render.mjs";
export async function app_g_click_npc(div_map, npcs_matched, player_img_c) {
  let npc = list_single(npcs_matched);
  let converted = await app_g_day_convert_tap_if(div_map, npc);
  if (converted) {
    return;
  }
  ("a believer the player has come back for is GATHERED by the tap rather than talked to - the day is past talking with them, and the group is on its way to the water");
  let collected = await app_g_day_collect_tap_if(npc);
  if (collected) {
    return;
  }
  let player = await app_g_player_get();
  ("The person looks round at whoever tapped them, and that turn is WRITTEN DOWN like every other turn of theirs. Turned here by hand, it was a turn nobody knew had happened: their own next step found no turn to rest after and turned them again at once, so the two were drawn as one sweep - a look round to face the player, carried straight on the same way round into the step, which is three quarters of a circle in one movement and reads as a person spun round.");
  ("The look itself is never held back, only noted. Somebody shuffled aside or traded places with keeps their facing until they have rested, because whoever moved them will move them again; a person spoken to has no second chance to look round, and one who does not is a person ignoring you.");
  let direction_npc = g_direction(npc, player);
  app_shared_game_npc_face(npc, direction_npc);
  let direction_player = g_direction(player, npc);
  app_shared_game_character_turn_start(player, player_img_c, direction_player);
  let phase = app_g_npc_phase_get(player);
  let view = app_g_view_npc(npc, phase);
  await app_g_view_set_render(view, div_map);
}
