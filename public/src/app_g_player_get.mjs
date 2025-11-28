import { marker } from "../../../love/public/src/marker.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_g } from "../../../love/public/src/app_g.mjs";
import { storage_local_get } from "../../../love/public/src/storage_local_get.mjs";
export function app_g_player_get() {
  marker("1");
  let game = storage_local_get(app_g, "game");
  let player = object_property_get(game, "player");
  return player;
}
