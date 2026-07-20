import { list_random_item } from "./list_random_item.mjs";
import { text_combine } from "./text_combine.mjs";
import { g_thanks } from "./g_thanks.mjs";
export function g_prayer_study_after() {
  "the randomized THANKSGIVING the player prays AFTER studying a passage — thanking God for Scripture and for what He showed them. DRY: composed via g_thanks, only the study-specific objects live here";
  let thank_things = [
    "Your word",
    "this time in Your word",
    "a Bible to read",
    "the truth of Scripture",
    "Your word that lights my path",
    "the gift of being able to study Your word",
    "what You showed me in Your word",
  ];
  let prayer = text_combine(g_thanks(list_random_item(thank_things)), ", Amen");
  return prayer;
}
