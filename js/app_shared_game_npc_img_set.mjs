import { app_shared_game_npc_property_set_generic } from "./app_shared_game_npc_property_set_generic.mjs";
import { app_shared_game_npc_img_get } from "./app_shared_game_npc_img_get.mjs";
export function app_shared_game_npc_img_set(npc, img) {
  "remember a person's picture under who they are - written once, when they are drawn, and not again, because walking does not change who somebody is";
  app_shared_game_npc_property_set_generic(
    app_shared_game_npc_img_get,
    npc,
    img,
  );
}
