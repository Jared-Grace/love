import { g_prayer_ask } from "./g_prayer_ask.mjs";
import { g_prayer_closing } from "./g_prayer_closing.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { g_prayer } from "./g_prayer.mjs";
import { emoji_bow } from "./emoji_bow.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function g_prayer_conversation() {
  "the player's randomized, grammared prayer asking God to bless the NEXT conversation before it begins (was one fixed 'Heavenly Father, please bless this next conversation, in Jesus name, amen' string). composed from the shared address grammar + a varied ask word + a varied blessing petition + a varied closing, wrapped in bow / pray emojis, so praying before each person never reads the same twice";
  let ask = g_prayer_ask();
  let petition = list_random_item([
    "bless this next conversation",
    "go before me into this conversation",
    "give me Your words for this conversation",
    "open this person's heart to You",
    "let Your love lead this conversation",
    "help me listen and love well",
  ]);
  let closing = g_prayer_closing();
  let petition2 = text_combine_multiple([ask, petition, closing]);
  let body = g_prayer(petition2);
  let v = emoji_bow();
  let v2 = emoji_pray();
  let line = text_combine_multiple([v, " ", body, " ", v2]);
  return line;
}
