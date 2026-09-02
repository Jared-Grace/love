import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_overlay_container } from "./app_shared_game_overlay_container.mjs";
import { app_shared_game_container_player } from "./app_shared_game_container_player.mjs";
import { app_shared_game_p_text } from "./app_shared_game_p_text.mjs";
import { html_remove } from "./html_remove.mjs";
import { app_g_bless_amen } from "./app_g_bless_amen.mjs";
export function app_g_bless_pray_words(container_map, prayer, shown, on_amen) {
  arguments_assert(arguments, 4);
  ("A prayer held up over the world while the player reads it aloud, with its amen under it.");
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
  ("The words are handed in TWICE, once as they are printed and once bare. What is printed");
  ("may carry things that are not words to be read, and the wait before the amen is timed");
  ("off the bare form, because holding the button back for decoration would be charging the");
  ("player for it.");
  ("Every prayer said on this street is put up through here: the one over a person, and the");
  ("one asking who to go to next. They differ only in where their words come from, and a");
  ("second copy of this panel would be a second answer to how a prayer is read - free to");
  ("drift, and this game is the reading.");
  let overlay = app_shared_game_overlay_container(container_map);
  let container = app_shared_game_container_player(overlay);
  app_shared_game_p_text(container, shown);
  function amen() {
    html_remove(overlay);
    on_amen();
  }
  app_g_bless_amen(container, prayer, amen);
  return overlay;
}
