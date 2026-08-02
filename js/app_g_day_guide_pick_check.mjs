import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
export function app_g_day_guide_pick_check() {
  ("deterministic REGRESSION check of the pure gold-guide picker on a synthetic 12x12 all-land map (no water): player at the BOTTOM (6,10), target at the TOP (6,1), only the bottom half 'visible' (window y 5..11). the gold tile MUST be a real tile inside the window and closer to the target than the player (it caught the neighbours-are-wrapped bug where guide returned null). asserts, so it can join the qa gate — run: node scripts/ai.mjs ",
    fn_name("app_g_day_guide_pick_check"));
  let size = 12;
  let coordinates = [];
  for (let y = 0; less_than(y, size); y++) {
    for (let x = 0; less_than(x, size); x++) {
      coordinates.push({
        x,
        y,
        item: "grass",
      });
    }
  }
  let target = {
    x: 6,
    y: 1,
  };
  let player = {
    x: 6,
    y: 10,
  };
  let g = {
    coordinates,
    npcs: [target],
  };
  let gold = app_g_day_guide_pick(g, player, target, 0, 11, 5, 11);
  let b = not_equal(gold, null);
  assert_message(b, "guide should return a gold tile for an off-screen target");
  let in_window =
    greater_than_equal(gold.y, 5) &&
    less_than_equal(gold.y, 11) &&
    greater_than_equal(gold.x, 0) &&
    less_than_equal(gold.x, 11);
  assert_message(in_window, "gold tile must be inside the visible window");
  let b2 = less_than(gold.y, player.y);
  assert_message(b2, "gold tile must lead toward the target (upward)");
  let r = {
    gold: [gold.x, gold.y],
  };
  return r;
}
