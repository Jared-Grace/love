import { app_g_npc_property_set_generic } from "./app_g_npc_property_set_generic.mjs";
import { app_g_npc_cross_get } from "./app_g_npc_cross_get.mjs";
export function app_g_npc_cross_set(npc, cross) {
  "remember a person's believer cross under where they are standing NOW - written once when the cross is drawn, and written again after every step they take, because the place is the key";
  app_g_npc_property_set_generic(app_g_npc_cross_get, npc, cross);
}
