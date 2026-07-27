import { g_gender_female } from "./g_gender_female.mjs";
import { g_gender_male } from "./g_gender_male.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_npc_color(npc) {
  "the NPC's CONVERSATION colour — the speech-bubble background tint keyed by gender (female pink / male blue). single-sourced so the day's talkable speech-bubble MARKER can match the very colour that NPC's real conversation bubble uses, for UI consistency";
  let gender = property_get(npc, "gender");
  let map = {
    [g_gender_female()]: "#ff80ea",
    [g_gender_male()]: "#acc1ff",
  };
  let color = property_get(map, gender);
  return color;
}
