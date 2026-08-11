import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { app_g_day_guide_window } from "./app_g_day_guide_window.mjs";
export function app_g_day_guide_window_check() {
  ("deterministic REGRESSION check of the pure visible-tile window, on a map of measurements chosen so every answer can be worked out by hand: tiles 100 px, a viewport 500 wide and 400 tall, no bar, and the grid of tiles inset 1000 px inside a content 3000 by 3000. asserts, so it can join the qa gate — run: node scripts/ai.mjs ",
    fn_name("app_g_day_guide_window_check"));
  let tile = 100;
  let viewport = {
    width: 500,
    height: 400,
    bar: 0,
  };
  let inset = {
    left: 1000,
    top: 1000,
  };
  let content = {
    width: 3000,
    height: 3000,
  };
  ("MIDDLE: the player at (10,10) sits 1050 px into the grid, so the browser scrolls to 1000+1050-250 = 1800 and tile (0,0) lands 800 px to the LEFT of the viewport's left edge. eight whole tiles are behind it, so the first fully visible column is 8; the right edge falls at 500+800 = 1300 into the grid, which is 13 tiles, and the thirteenth is the first one PAST the edge, so the last full column is 12. the player must be inside his own window - the bug that hid the gold entirely was a window the player himself was outside of");
  let player = {
    x: 10,
    y: 10,
  };
  let middle = app_g_day_guide_window(player, tile, viewport, inset, content);
  let middle_x = equal(middle.min_x, 8) && equal(middle.max_x, 12);
  assert_message(middle_x, "centred window must be columns 8 through 12");
  let middle_y = equal(middle.min_y, 9) && equal(middle.max_y, 11);
  assert_message(middle_y, "centred window must be rows 9 through 11");
  let holds_player =
    greater_than_equal(player.x, middle.min_x) &&
    less_than_equal(player.x, middle.max_x) &&
    greater_than_equal(player.y, middle.min_y) &&
    less_than_equal(player.y, middle.max_y);
  assert_message(holds_player, "the player must stand inside his own window");
  ("EDGE: a player at (0,0) wants a scroll of 1000+50-250 = 800, and the browser cannot scroll past 0 in either direction, so it stops there and tile (0,0) sits 1000 px INTO the viewport - off the far side of a viewport only 500 wide. no column is visible at all, and the window says so by ending before it begins. the prediction has to hold the same bounds the browser holds, or the window drifts to one that will never be on screen");
  let corner = {
    x: 0,
    y: 0,
  };
  let held = app_g_day_guide_window(corner, tile, viewport, inset, content);
  let held_x = equal(held.min_x, 10) && equal(held.max_x, -6);
  assert_message(held_x, "at the near edge the scroll is held at nothing");
  ("BAR: the bottom bar eats 150 px of the 400, leaving 250 for whole tiles. the player at (10,10) has tile (0,0) 600 px above the top edge, so the first full row is 6 and the last full row is the one ending by 250+600 = 850, which is 8 rows, so 7. WITHOUT the bar it was 9 through 11 above - the bar must cost a row, or the guide offers a tile the player cannot see to tap");
  let barred = {
    width: 500,
    height: 400,
    bar: 150,
  };
  let under = app_g_day_guide_window(player, tile, barred, inset, content);
  let under_y = equal(under.min_y, 9) && equal(under.max_y, 10);
  assert_message(under_y, "the bar must take a row off the bottom");
  let r = {
    middle: [middle.min_x, middle.max_x, middle.min_y, middle.max_y],
    held: [held.min_x, held.max_x],
    barred: [under.min_y, under.max_y],
  };
  return r;
}
