import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_g_button_green } from "./app_g_button_green.mjs";
import { app_g_container_player } from "./app_g_container_player.mjs";
import { app_g_overlay_container } from "./app_g_overlay_container.mjs";
import { app_g_p_text } from "./app_g_p_text.mjs";
import { bless_prayer_rung } from "./bless_prayer_rung.mjs";
import { bless_prayer_read_ms } from "./bless_prayer_read_ms.mjs";
export function app_g_bless_pray_overlay(container_map, rung, on_amen) {
  arguments_assert(arguments, 3);
  ("The prayer itself, held up over the world while the player reads it aloud.");
  ("It is a panel and not a label on a button, because the praying is the game. A prayer");
  ("printed beside something to press is read in the same glance as the pressing and then");
  ("skipped; a prayer that is the only thing on the screen is read.");
  ("The world shows through it and keeps moving behind - the crowd walks, the ground stays");
  ("lit. That is the see-through wash every other g screen uses, and it is right here for");
  ("the same reason: this interrupts a game the player is already inside, and the world");
  ("showing through is what says the game is still there. The one solid panel in this game");
  ("is the prayer at the door, which is not an interruption but the door itself.");
  ("The amen is not there when the panel opens and arrives a moment later, timed from the");
  ("length of the words. There is nothing to press until the prayer has been said, so the");
  ("fastest possible way through this game is to pray - which is the only shape that makes");
  ("a speedrun and a devotion the same run.");
  let overlay = app_g_overlay_container(container_map);
  let container = app_g_container_player(overlay);
  let prayer = bless_prayer_rung(rung);
  app_g_p_text(container, prayer);
  function amen() {
    html_remove(overlay);
    on_amen();
  }
  function offer() {
    let praying = emoji_pray();
    let label = text_combine(praying, " Amen");
    app_g_button_green(container, label, amen);
  }
  let least = bless_prayer_read_ms(prayer);
  setTimeout(offer, least);
  return overlay;
}
