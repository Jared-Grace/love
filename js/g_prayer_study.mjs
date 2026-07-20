import { list_random_item } from "./list_random_item.mjs";
import { text_combine } from "./text_combine.mjs";
import { g_thanks } from "./g_thanks.mjs";
import { g_prayer_petition } from "./g_prayer_petition.mjs";
export function g_prayer_study() {
  "a randomized short prayer shown when the player finishes studying a passage — either THANKING God for Scripture (g_thanks) or ASKING Him to open eyes/ears and rightly apply it (g_prayer_petition). structured + DRY: it reuses the shared prayer composers, so only the study-specific objects live here";
  let thank_things = [
    "Your word",
    "this time in Your word",
    "a Bible to read",
    "the truth of Scripture",
    "Your word that lights my path",
    "the gift of being able to study Your word",
  ];
  let petitions = [
    "open my eyes to see wonderful things in Your word",
    "open my ears to hear Your voice in Scripture",
    "help me rightly handle Your word of truth",
    "write Your word on my heart",
    "help me not only hear Your word but do it",
    "give me understanding, that I may keep Your word",
    "let Your word take root and bear fruit in me",
  ];
  let thank = text_combine(g_thanks(list_random_item(thank_things)), ", Amen");
  let ask = g_prayer_petition(list_random_item(petitions));
  let prayer = list_random_item([thank, ask]);
  return prayer;
}
