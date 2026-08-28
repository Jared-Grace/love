import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_npc_property_set_generic } from "./app_shared_game_npc_property_set_generic.mjs";
import { app_g_bless_glow_mark_get } from "./app_g_bless_glow_mark_get.mjs";
export function app_g_bless_glow_mark_set(person, mark) {
  arguments_assert(arguments, 2);
  ("Remember the gold circle drawn inside a person's light under who that person is. Written");
  ("once, when the light is first drawn, and never again - the mark it stands for is never");
  ("taken back.");
  app_shared_game_npc_property_set_generic(
    app_g_bless_glow_mark_get,
    person,
    mark,
  );
}
