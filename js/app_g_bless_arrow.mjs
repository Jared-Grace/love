import { text_arrow_up } from "./text_arrow_up.mjs";
import { text_arrow_down } from "./text_arrow_down.mjs";
import { text_arrow_right } from "./text_arrow_right.mjs";
import { text_arrow_left } from "./text_arrow_left.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function app_g_bless_arrow(direction) {
  arguments_assert(arguments, 1);
  ("The arrow that shows a facing, for a button that turns the player that way.");
  ("An arrow rather than the word, because these four buttons sit along the bottom of the");
  ("screen where a word would either be too small to read or too wide to fit four of. An");
  ("arrow is read at a glance and in any language.");
  ("A written arrow and not the emoji one, which is the difference between a letter and a");
  ("picture. The emoji arrows are drawn by the phone as a white glyph on a coloured square");
  ("of the phone's own choosing, so four of them sitting on green buttons are four stickers");
  ("stuck over the buttons - the button's colour is hidden behind them, and the colour is");
  ("how this game says a thing may be pressed.");
  ("Written, they are text: they take the button's own letter colour, sit on its own");
  ("background, and change with it. They are also the same shape on every phone, which the");
  ("emoji ones are not.");
  ("Down is south, because the grid's y grows the way the rows are drawn - the same");
  ("agreement ", fn_name("g_direction_step"), " is written to.");
  if (equal(direction, "north")) {
    let up = text_arrow_up();
    return up;
  }
  if (equal(direction, "south")) {
    let down = text_arrow_down();
    return down;
  }
  if (equal(direction, "east")) {
    let right = text_arrow_right();
    return right;
  }
  let left = text_arrow_left();
  return left;
}
