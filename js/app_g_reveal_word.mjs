import { app_shared_scripture_gold } from "./app_shared_scripture_gold.mjs";
import { app_g_reveal } from "./app_g_reveal.mjs";
export function app_g_reveal_word(correct) {
  "reveal a discerned OPENER: the player's option God is leading them to speak turns GOLD (God-led words = His word) + glow + raise";
  app_shared_scripture_gold(correct);
  app_g_reveal(correct);
}
