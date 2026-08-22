import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { bless_prayer_read_ms } from "./bless_prayer_read_ms.mjs";
export function app_g_bless_amen(container, prayer, on_amen) {
  arguments_assert(arguments, 3);
  ("The amen under a prayer: absent while the prayer is being read, and there once it has");
  ("been.");
  ("Every prayer in this game ends this way, at the door and on the street alike, so it is");
  ("written once. Two copies of it would be two waits that could drift apart, and the wait");
  ("is a rule the player learns at the door and expects everywhere after.");
  ("There is nothing to press until the prayer has been said, which is the only shape that");
  ("makes a speedrun and a devotion the same run: the fastest way through this game is to");
  ("pray.");
  ("The button is BUILT the moment the panel opens and only HIDDEN, rather than being made");
  ("later. Made later it arrives into a panel that was sized without it, so the panel grows");
  ("at the instant it appears and the prayer the player is still reading jumps up the screen");
  ("- the eye is pulled to the movement, and the last line of the prayer is lost exactly");
  ("when the player is deciding whether they have finished it.");
  ("Hidden, it holds its own space from the first frame: the panel is its final size before");
  ("the player has read a word, and the amen fades into a gap that was always there. Nothing");
  ("moves at all, which is better than moving smoothly.");
  ("Hidden is also unpressable, so the wait is real and not merely invisible - a button that");
  ("was only transparent could be pressed by somebody who guessed where it was.");
  ("This is the code lessons' own answer to the same problem, and the same two words for it.");
  ("There, the correction under a question is drawn in full and kept unseen so the slot is");
  ("always as tall as the taller of the two things that can fill it, and nothing shifts");
  ("under the learner when one replaces the other. Reserve the room, then reveal.");
  ("While it is hidden, three softly pulsing dots stand in its place, so the wait is");
  ("something the player can SEE rather than a screen that has stopped.");
  ("The door is where this matters. It is black, it holds one paragraph and nothing else,");
  ("and it says nothing at all for several seconds - which is what a page that failed to");
  ("load looks like. A player who reads it that way closes the tab before praying");
  ("anything, and that is the one outcome praying at the door was meant to prevent.");
  ("They are the gospel game's own dots, called and not copied, and they are the right");
  ("thing here for the reason they were the right thing there: they are IN-FICTION. A");
  ("technical spinner would say the app is working, which is a lie - nothing is loading,");
  ("and the only work being done is the player's own reading. Dots under a prayer say the");
  ("prayer is still being said, which is exactly true.");
  ("They stand ON the button rather than above it, laid over the space it is already");
  ("holding, so taking them away and showing it moves nothing. Put in the flow beside it,");
  ("they would add their own height to the panel and hand back the very jump the hidden");
  ("button was built to prevent.");
  let slot = html_div(container);
  html_style_relative(slot);
  let praying = emoji_pray();
  let label = text_combine(praying, " Amen");
  let button = app_shared_game_button_green(slot, label, on_amen);
  html_visibility_hidden(button);
  let waiting = html_div(slot);
  html_style_assign(waiting, {
    position: "absolute",
    inset: "0",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
  });
  app_g_typing_dots(waiting);
  function offer() {
    html_remove(waiting);
    html_visibility_visible(button);
  }
  let least = bless_prayer_read_ms(prayer);
  setTimeout(offer, least);
  return button;
}
