import { g_prayer_ask } from "./g_prayer_ask.mjs";
import { g_prayer_closing } from "./g_prayer_closing.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { g_prayer } from "./g_prayer.mjs";
import { emoji_bow } from "./emoji_bow.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function g_prayer_discern() {
  "the player's randomized, grammared prayer asking God WHO to go to next - the discernment prayer of the day walk, built the same way as the one that asks Him to bless a conversation: the shared address, a varied ask word, a varied petition, a varied closing, bow and praying hands around it.";
  "it asks about a PERSON, not about words. the discernment prayer inside a conversation asks what to SAY to somebody already in front of you; this one is prayed with nobody in front of you at all, and what it asks for is the somebody.";
  "every petition here leaves the choosing with God rather than asking Him to bless a choice already made. that is what the day walk acts out: the player does not pick who is next, and praying is how they find out.";
  let ask = g_prayer_ask();
  let petition = list_random_item([
    "show me who You would have me go to next",
    "lead me to the one You have already prepared",
    "open my eyes to the person You are sending me to",
    "make plain who needs to hear You today",
    "guide my steps to the one You have in mind",
    "let Your Spirit choose who I speak with next",
  ]);
  let closing = g_prayer_closing();
  let petition2 = text_combine_multiple([ask, petition, closing]);
  let body = g_prayer(petition2);
  let v = emoji_bow();
  let v2 = emoji_pray();
  let line = text_combine_multiple([v, " ", body, " ", v2]);
  return line;
}
