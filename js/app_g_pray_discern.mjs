import { app_g_pray_reveal } from "./app_g_pray_reveal.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function app_g_pray_discern(container, correct, effect, discern) {
  "add the 'Pray to God for discernment for what to say' button that marks `discern` prayed and, when answered, applies effect(correct) to reveal the discerned choice; shared by the opener menu (gold+glow) and the gospel-share quiz (glow)";
  let pray = text_combine(
    emoji_pray(),
    " Pray to God for discernment for what to say",
  );
  app_g_pray_reveal(container, correct, pray, effect, discern);
}
