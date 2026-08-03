import { g_prayer_petitions_bowed } from "./g_prayer_petitions_bowed.mjs";
export function g_prayer_conversation() {
  "the player's randomized, grammared prayer asking God to bless the NEXT conversation before it begins (was one fixed 'Heavenly Father, please bless this next conversation, in Jesus name, amen' string). only the petitions live here; the address, the asking word, the closing and the bow-and-hands around them are the shared shape every tapped prayer wears, so praying before each person never reads the same twice";
  let line = g_prayer_petitions_bowed([
    "bless this next conversation",
    "go before me into this conversation",
    "give me Your words for this conversation",
    "open this person's heart to You",
    "let Your love lead this conversation",
    "help me listen and love well",
  ]);
  return line;
}
