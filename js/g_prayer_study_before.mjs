import { list_random_item } from "./list_random_item.mjs";
import { g_prayer_petition } from "./g_prayer_petition.mjs";
export function g_prayer_study_before() {
  "the randomized PETITION the player prays BEFORE studying a passage — asking God to open eyes/ears and help them rightly apply His word (Ps 119:18 / 2 Tim 2:15 / James 1:22). DRY: composed via g_prayer_petition, only the study-specific asks live here";
  let petitions = [
    "open my eyes to see wonderful things in Your word",
    "open my ears to hear Your voice in Scripture",
    "help me rightly handle Your word of truth",
    "write Your word on my heart",
    "help me not only hear Your word but do it",
    "give me understanding, that I may keep Your word",
    "let Your word take root and bear fruit in me",
  ];
  let prayer = g_prayer_petition(list_random_item(petitions));
  return prayer;
}
