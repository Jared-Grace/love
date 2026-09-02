import { g_prayer_petitions_bowed } from "./g_prayer_petitions_bowed.mjs";
export function bless_prayer_discern() {
  "The player's randomized prayer asking God WHO to pray for next - the discernment prayer";
  "of the blessing street. Only the petitions live here; the address, the asking word, the";
  "closing and the bow and hands around them are the shared shape every tapped prayer wears.";
  "It is its own list and not the gospel game's, and that is a correction. This called the";
  "day walk's discernment prayer for a while, on the reasoning that both ask the same thing";
  "- who to go to next - and that one prayer said two ways would drift. The reasoning was";
  "wrong about what the two prayers ask. In the day walk the player SPEAKS with the person";
  "they are led to, so its petitions may say hear and say speak with; here the player never";
  "says a word to anybody, and prays FOR them instead. A player was shown make plain who";
  "needs to hear You today while standing on a street where nobody is ever spoken to, and";
  "reported the mismatch.";
  "So the two are the same prayer only down to the verb, and the verb is the whole of what";
  "each game is. Sharing everything above the verb is what the shared shape already does.";
  "Every petition here leaves the CHOOSING with God rather than asking Him to bless a choice";
  "already made. That is what this street acts out: the player does not pick who is next,";
  "and praying is how they find out.";
  "The word is PERSON, never 'the one'. 'The one' is the phrase English keeps for a romance,";
  "so a prayer asking God to lead you to the one He has prepared reads as a prayer about";
  "marriage - which is not what is being asked here.";
  let line = g_prayer_petitions_bowed([
    "show me who You would have me pray for next",
    "lead me to the person You would have lifted up",
    "open my eyes to the person You are bringing to mind",
    "make plain who needs prayer today",
    "guide my steps to the person You are holding out to me",
    "let Your Spirit choose who I pray for next",
  ]);
  return line;
}
