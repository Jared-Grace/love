import { app_g_pray_reveal } from "./app_g_pray_reveal.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function app_g_pray_discern(container, correct) {
  "add the 'Pray to God for discernment for what to say' button (in the player's choice area) that reveals the correct choice; shared by the opener menu and the gospel-share quiz";
  let pray = text_combine(
    emoji_pray(),
    " Pray to God for discernment for what to say",
  );
  app_g_pray_reveal(container, correct, pray);
}
