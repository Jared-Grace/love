import { app_g_npc_property_set_generic } from "./app_g_npc_property_set_generic.mjs";
import { app_g_npc_cross_get } from "./app_g_npc_cross_get.mjs";
export function app_g_npc_cross_set(npc, cross) {
  "remember a person's believer cross under who they are - written once, when the cross is drawn, and not again, because walking does not change who somebody is";
  app_g_npc_property_set_generic(app_g_npc_cross_get, npc, cross);
}
