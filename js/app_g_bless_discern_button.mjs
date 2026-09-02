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
  ("There is a GAP under the row, and the gap is what keeps the row from being read as part");
  ("of the arrows. Two controls that touch are one control with a piece on top, and a thumb");
  ("reaching for the up arrow lands on the edge of whatever is directly above it. The space");
  ("is small enough that the two are plainly the same strip and large enough that they are");
  ("plainly two things in it.");
  ("It is printed LARGER than a button of its size would ordinarily be, because it is the");
  ("only thing in the bar with words on it. The arrows are read as shapes at any size; this");
  ("has to be read as a sentence, and a sentence set small in a corner is a thing a player");
  ("skips over - which for the one control that teaches the game is the whole failure.");
  ("It says what it is in WORDS and not only in a picture. A folded-hands picture alone is");
  ("read as pray, and praying over a person is already what a tap on that person does, so");
  ("a player would reasonably take this for a second way to do the thing they can already");
  ("do. Who next is the whole question it answers, and it is short enough to print.");
  ("WHO NEXT and not who is next, though the second is the ordinary English of the two. Who");
  ("is next is what is asked at a counter: it presumes a queue already in order and asks");
  ("only to be read the top of it. This game claims the opposite - that the answer is given");
  ("rather than looked up - and the clipped form is the shape of a thought half-said, which");
  ("is what a prayer in the middle of something actually sounds like.");
  let row = html_div(bar);
  html_style_assign(row, {
    display: "flex",
    "justify-content": "center",
    "margin-bottom": "0.55rem",
  });
  let praying = emoji_pray();
  let label = text_combine(praying, " Who next?");
  let button = app_shared_game_button_green(row, label, on_ask);
  html_style_assign(button, {
    padding: "0.3rem 1.1rem",
    "font-size": "1.15rem",
    margin: "0",
    width: "auto",
    "min-width": "0",
  });
  return button;
}
