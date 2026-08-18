import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { emoji_arrow_down } from "./emoji_arrow_down.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
export function app_g_bless_arrow(direction) {
  arguments_assert(arguments, 1);
  ("The arrow that shows a facing, for a button that turns the player that way.");
  ("An arrow rather than the word, because these four buttons sit along the bottom of the");
  ("screen where a word would either be too small to read or too wide to fit four of. An");
  ("arrow is read at a glance and in any language.");
  ("Down is south, because the grid's y grows the way the rows are drawn - the same");
  ("agreement g_direction_step is written to.");
  if (equal(direction, "north")) {
    let up = emoji_arrow_up();
    return up;
  }
  if (equal(direction, "south")) {
    let down = emoji_arrow_down();
    return down;
  }
  if (equal(direction, "east")) {
    let right = emoji_arrow_right();
    return right;
  }
  let left = emoji_arrow_left();
  return left;
}
