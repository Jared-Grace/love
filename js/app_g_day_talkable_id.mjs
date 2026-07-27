import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_g_day_talkable_id(npc) {
  "the DOM id of a talkable NPC's speech-bubble marker — `day-talkable-<x>-<y>`. single source so the marker that SETS it (app_g_day_talkable_marker) and the convert that REMOVES it by id (app_g_day_convert) can never disagree on the format — a silent drift would strand the bubble on a converted NPC";
  let x = property_get(npc, "x");
  let y = property_get(npc, "y");
  let id = text_combine_multiple(["day-talkable-", x, "-", y]);
  return id;
}
