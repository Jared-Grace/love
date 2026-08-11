import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { app_g_day_guide_window } from "./app_g_day_guide_window.mjs";
export function app_g_day_guide_window_check() {
  ("deterministic REGRESSION check of the pure visible-tile window, on measurements chosen so every answer can be worked out by hand: tiles 100 px, a viewport 500 wide and 400 tall, and a content 3000 by 3000, which is exactly 30 by 30 tiles. asserts, so it can join the qa gate — run: node scripts/ai.mjs ",
    fn_name("app_g_day_guide_window_check"));
  let tile = 100;
  let viewport = {
    width: 500,
    height: 400,
    bar: 0,
  };
  let content = {
    width: 3000,
    height: 3000,
  };
  let inset_none = {
    left: 0,
    top: 0,
  };
  let inset_wide = {
    left: 1000,
    top: 1000,
  };
  ("MIDDLE, the ordinary case: the player at (10,10) stands 1050 px into the grid, which is inset 1000, so the browser scrolls to 1000 + 1050 - 250 = 1800 and tile (0,0) lands 800 px LEFT of the viewport's left edge. eight whole columns are behind it, so the first fully visible column is 8; the right edge falls 1300 px into the grid, and the thirteenth tile is the first one PAST it, so the last full column is 12. downward the half-viewport is 200 rather than 250, so the scroll is 1850, tile (0,0) is 850 px above, and the rows are 9 through 11. the player must stand inside his own window - a window he was OUTSIDE of is what hid the gold entirely");
  let player = {
    x: 10,
    y: 10,
  };
  let middle = app_g_day_guide_window(
    player,
    tile,
    viewport,
    inset_wide,
    content,
  );
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
  ("NEAR EDGE: with no inset, a player at (0,0) wants a scroll of 50 - 250 = -200, and a browser will not scroll to less than nothing. held at 0, tile (0,0) sits exactly at the viewport's corner, so the window starts at 0 and runs as far as whole tiles reach: five across and four down. predicting a NEGATIVE scroll here would move the window off the map in the one direction there is nothing to see");
  let corner = {
    x: 0,
    y: 0,
  };
  let near = app_g_day_guide_window(
    corner,
    tile,
    viewport,
    inset_none,
    content,
  );
  let near_x = equal(near.min_x, 0) && equal(near.max_x, 4);
  assert_message(near_x, "at the near edge the window must start at column 0");
  let near_y = equal(near.min_y, 0) && equal(near.max_y, 3);
  assert_message(near_y, "at the near edge the window must start at row 0");
  ("FAR EDGE, the same clamp from the other side: a player at (29,29) wants a scroll of 2950 - 250 = 2700, but the content runs out at 3000 and the viewport is 500 wide, so the browser stops at 2500. the window is then the last five columns and the last four rows, and the player is in the CORNER of it rather than the middle - which is the whole reason the far bound has to be held too");
  let far = {
    x: 29,
    y: 29,
  };
  let edge = app_g_day_guide_window(far, tile, viewport, inset_none, content);
  let edge_x = equal(edge.min_x, 25) && equal(edge.max_x, 29);
  assert_message(edge_x, "at the far edge the window must end at column 29");
  let edge_y = equal(edge.min_y, 26) && equal(edge.max_y, 29);
  assert_message(edge_y, "at the far edge the window must end at row 29");
  ("BAR: the bottom bar eats 150 px, so the 1250 px of grid below the top edge becomes 1100, which is eleven whole tiles rather than twelve. the rows were 9 through 11 in the MIDDLE case above and must now be 9 through 10 - the bar has to cost a row, or the guide offers a tile sitting underneath it that the player cannot see to tap");
  let barred = {
    width: 500,
    height: 400,
    bar: 150,
  };
  let under = app_g_day_guide_window(player, tile, barred, inset_wide, content);
  let under_y = equal(under.min_y, 9) && equal(under.max_y, 10);
  assert_message(under_y, "the bar must take a row off the bottom");
  let under_x = equal(under.min_x, 8) && equal(under.max_x, 12);
  assert_message(under_x, "the bar must not move the columns");
  let r = {
    middle: [middle.min_x, middle.max_x, middle.min_y, middle.max_y],
    near: [near.min_x, near.max_x, near.min_y, near.max_y],
    far: [edge.min_x, edge.max_x, edge.min_y, edge.max_y],
    barred: [under.min_y, under.max_y],
  };
  return r;
}
