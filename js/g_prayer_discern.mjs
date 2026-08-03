import { g_prayer_petitions_bowed } from "./g_prayer_petitions_bowed.mjs";
export function g_prayer_discern() {
  "the player's randomized, grammared prayer asking God WHO to go to next - the discernment prayer of the day walk. only the petitions live here; the address, the asking word, the closing and the bow-and-hands around them are the shared shape every tapped prayer wears.";
  "it asks about a PERSON, not about words. the discernment prayer inside a conversation asks what to SAY to somebody already in front of you; this one is prayed with nobody in front of you at all, and what it asks for is the somebody.";
  "every petition here leaves the choosing with God rather than asking Him to bless a choice already made. that is what the day walk acts out: the player does not pick who is next, and praying is how they find out.";
  "the word is PERSON, never 'the one'. 'the one' is the phrase English keeps for a romance, so a prayer asking God to lead you to the one you have already been prepared for reads as a prayer about marriage - which is not what is being asked here, and is a whole other prayer somebody may one day really want to pray. 'person' says exactly and only what this asks for.";
  let line = g_prayer_petitions_bowed([
    "show me who You would have me go to next",
    "lead me to the person You have already prepared",
    "open my eyes to the person You are sending me to",
    "make plain who needs to hear You today",
    "guide my steps to the person You have in mind",
    "let Your Spirit choose who I speak with next",
  ]);
  return line;
}
