import { text_combine } from "./text_combine.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { g_prayer } from "./g_prayer.mjs";
export function g_prayer_petition(petition) {
  "compose a petition prayer DRY: '<address>, <ask> <petition>, Amen' — e.g. petition 'comfort them in their grief' → 'God, please comfort them in their grief, Amen'. builds on g_prayer (the varied address); the ASK word is randomized too (please / would You / …) so prayers don't all read the same. this is the shape a conversation turn's `prayer_text` becomes in the closing prayer";
  let ask = list_random_item([
    "please ",
    "I ask You to ",
    "would You ",
    "I pray You would ",
  ]);
  let asked = g_prayer(text_combine(ask, petition));
  let full = text_combine(asked, ", Amen");
  return full;
}
