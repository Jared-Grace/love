import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_overlay_container } from "./app_shared_game_overlay_container.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_game_container_player } from "./app_shared_game_container_player.mjs";
import { app_shared_game_p_text } from "./app_shared_game_p_text.mjs";
import { html_remove } from "./html_remove.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
export function app_g_bless_finished_modal(container_map, line, on_dismiss) {
  arguments_assert(arguments, 3);
  ("The news that a house has been finished, held up on a panel the player has to put down");
  ("themselves.");
  ("This used to be a pill that floated at the top of the screen for a few seconds and");
  ("then took itself away. It said the right words and it was missed anyway: it arrived at");
  ("the top of the screen while the player was looking at the middle of it, where the");
  ("thing they had just tapped was, and it was gone before their eyes got there. The two");
  ("rarest sentences in this game - a whole household covered at once, and a prayer from");
  ("now on reaching further than it did - were both being spent on a pill nobody read.");
  ("So it waits instead. There is one button and the panel stays until it is pressed,");
  ("which costs the player a tap and buys the certainty that the sentence was seen. That");
  ("is the same trade the prayer panel makes, and this game has already taught the player");
  ("to make it.");
  ("The backdrop is a warm light rather than the dark one every other panel here sits on.");
  ("Dark is for a panel that wants to be read INSTEAD of the world - the prayer, the door.");
  ("This panel is about the world: the house behind it has just been lit and the player");
  ("should be able to see it while they read what happened to it. Darkening the street at");
  ("the exact moment the street changed would hide the news to announce it.");
  ("The button says what the player is about to go back to doing rather than saying");
  ("nothing, or saying close. There is no state to leave here and nothing being agreed to");
  ("- the only thing on the other side of this button is more praying.");
  let overlay = app_shared_game_overlay_container(container_map);
  html_style_set(overlay, "background", "rgba(255, 232, 178, 0.3)");
  let container = app_shared_game_container_player(overlay);
  app_shared_game_p_text(container, line);
  function dismiss() {
    html_remove(overlay);
    on_dismiss();
  }
  let praying = emoji_pray();
  let label = text_combine(praying, " Keep praying");
  let button = app_shared_game_button_green(container, label, dismiss);
  return button;
}
