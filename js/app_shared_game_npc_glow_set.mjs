import { app_shared_game_npc_property_set_generic } from "./app_shared_game_npc_property_set_generic.mjs";
import { app_shared_game_npc_glow_get } from "./app_shared_game_npc_glow_get.mjs";
export function app_shared_game_npc_glow_set(npc, glow) {
  "remember the light drawn under a person under who they are - written once, when the light is first drawn, and not again, because the mark it stands for is never taken back";
  app_shared_game_npc_property_set_generic(
    app_shared_game_npc_glow_get,
    npc,
    glow,
  );
}
