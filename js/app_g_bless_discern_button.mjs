import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_game_button_green } from "./app_shared_game_button_green.mjs";
export function app_g_bless_discern_button(bar, on_ask) {
  arguments_assert(arguments, 2);
  ("The button in the bottom strip that prays for discernment - the player asking God who");
  ("to go to next.");
  ("It is in the bar with the turning arrows because it is a thing the player DOES, and");
  ("every other thing the player does is there. Put on the map it would be a tile that");
  ("means please tell me, and there is no such tile; put on a menu it would be a feature");
  ("somebody has to go looking for, and a prayer nobody finds is a prayer nobody prays.");
  ("The gospel game refused a bottom bar for this same prayer, and refused it for a reason");
  ("that does not hold here: there the bar would have read as the main action of the whole");
  ("map, putting the walking second to a button. This game already HAS that bar - it is");
  ("how the player turns - so the button joins something rather than founding it, and the");
  ("walking is still a tap on the ground.");
  ("It is a wide row of its own ABOVE the arrows rather than a fifth arrow beside them.");
  ("The arrows are four of one thing and read as one control; a fifth button among them");
  ("would be pressed by a thumb aiming for a turn, and this one opens a panel and stops");
  ("the game.");
  ("It says what it is in WORDS and not only in a picture. A folded-hands picture alone is");
  ("read as pray, and praying over a person is already what a tap on that person does, so");
  ("a player would reasonably take this for a second way to do the thing they can already");
  ("do. Who next is the whole question it answers, and it is short enough to print.");
  let row = html_div(bar);
  html_style_assign(row, {
    display: "flex",
    "justify-content": "center",
  });
  let praying = emoji_pray();
  let label = text_combine(praying, " Who next?");
  let button = app_shared_game_button_green(row, label, on_ask);
  html_style_assign(button, {
    padding: "0.2rem 0.9rem",
    "font-size": "0.9rem",
    margin: "0",
    width: "auto",
    "min-width": "0",
  });
  return button;
}
