import { app_g_view_kind_npc } from "./app_g_view_kind_npc.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_view_npc(npc, phase) {
  "the view that puts a person on the screen: which person, by the tile they stand on, and how far along the conversation with them has come.";
  "three places built this object by hand and spelled the same four fields - the tapped-npc path the player really walks, the one-slice day conversation, and the dev routes that open a person straight at a chosen phase. a field added to the view had to be added in all three, and a demo that was one field behind the game showed a screen the game could no longer produce.";
  "it hands back the view rather than setting it, because the three differ in what they do NEXT: the game renders it onto the map it already holds, and the two openers only set it. that difference is real, so it stays with the callers; the shape of the view is not, so it lives here.";
  let view = {
    kind: app_g_view_kind_npc(),
    x: property_get(npc, "x"),
    y: property_get(npc, "y"),
    phase,
  };
  return view;
}
