import { app_g_bless_amen } from "./app_g_bless_amen.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_shared_game_container_player } from "./app_shared_game_container_player.mjs";
import { app_shared_game_overlay_container } from "./app_shared_game_overlay_container.mjs";
import { app_shared_game_p_text } from "./app_shared_game_p_text.mjs";
import { bless_prayer_rung } from "./bless_prayer_rung.mjs";
import { bless_prayer_rung_shown } from "./bless_prayer_rung_shown.mjs";
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
  ("length of the words - the one amen of this game, put up the same way it is put up at");
  ("the door.");
  let overlay = app_shared_game_overlay_container(container_map);
  let container = app_shared_game_container_player(overlay);
  ("The words are the same every single time and the two little pictures either side of");
  ("them are not, so the panel is never quite the page it was last time. This prayer is");
  ("said thousands of times in a sitting, and a screen that is identical on the thousandth");
  ("showing has stopped being read - the eye knows the shape of it and skips to the");
  ("button. Changing the words to fix that would be changing the prayer, which is the one");
  ("thing here that must not move; changing what stands around them costs nothing and");
  ("makes the reader look.");
  ("The panel prints the shown form and times its amen from the bare prayer, because the");
  ("pictures are not words to be read and holding the button back for them would be");
  ("charging the player for decoration.");
  let prayer = bless_prayer_rung(rung);
  let shown = bless_prayer_rung_shown(prayer);
  app_shared_game_p_text(container, shown);
  function amen() {
    html_remove(overlay);
    on_amen();
  }
  app_g_bless_amen(container, prayer, amen);
  return overlay;
}
