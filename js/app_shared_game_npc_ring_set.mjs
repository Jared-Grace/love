import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_npc_property_set_generic } from "./app_shared_game_npc_property_set_generic.mjs";
import { app_shared_game_npc_ring_get } from "./app_shared_game_npc_ring_get.mjs";
export function app_shared_game_npc_ring_set(npc, ring) {
  arguments_assert(arguments, 2);
  ("Remember the ring drawn under a person under who they are - written once, when the ring");
  ("is first drawn, and not again.");
  ("Every person on the street gets one, whether or not anything is true of them yet,");
  ("because a ring that does not exist yet cannot be carried by a step. What changes as the");
  ("game goes on is whether it can be seen, and that is decided somewhere else.");
  app_shared_game_npc_property_set_generic(
    app_shared_game_npc_ring_get,
    npc,
    ring,
  );
}
