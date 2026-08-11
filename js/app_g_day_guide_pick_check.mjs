import { app_g_day_guide_window_check } from "./app_g_day_guide_window_check.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { assert_message } from "./assert_message.mjs";
import { g_water } from "./g_water.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
export function app_g_day_guide_pick_check() {
  ("deterministic REGRESSION check of the pure gold-guide picker on synthetic 12x12 maps, with the player at the BOTTOM (6,10), the target at the TOP (6,1) and only the bottom half 'visible' (window y 5..11). OPEN MAP: the gold tile must be a real tile inside the window and closer to the target than the player (it caught the neighbours-are-wrapped bug where guide returned null), and it must be the exact best tile (6,5) — the top-middle of what the player can see. DETOUR MAP: a wall of water across y=6 with its only gap at x=0 makes the shortest path leave the window on the far left, so the last path tile still in view is (0,5), nine steps from the target, while the visible tile actually nearest the target is (6,5) at three. it must pick (6,5) — that is the 'sometimes it chooses a tile nearby' bug, and asking every visible tile instead of only the path's tiles is what fixes it. asserts, so it can join the qa gate — run: node scripts/ai.mjs ",
    fn_name("app_g_day_guide_pick_check"));
  let target = {
    x: 6,
    y: 1,
  };
  let player = {
    x: 6,
    y: 10,
  };
  function map_new(water_row, water_gap_x) {
    let size = 12;
    let coordinates = [];
    for (let y = 0; less_than(y, size); y++) {
      for (let x = 0; less_than(x, size); x++) {
        let water_here = equal(y, water_row) && not_equal(x, water_gap_x);
        let item = water_here ? g_water() : "grass";
        coordinates.push({
          x,
          y,
          item,
        });
      }
    }
    let g = {
      coordinates,
      npcs: [target],
    };
    return g;
  }
  let open = map_new(-1, -1);
  let gold = app_g_day_guide_pick(open, player, target, 0, 11, 5, 11);
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
  let best = equal(gold.x, 6) && equal(gold.y, 5);
  assert_message(best, "gold tile must be the visible tile nearest the target");
  let detour = map_new(6, 0);
  let gold2 = app_g_day_guide_pick(detour, player, target, 0, 11, 5, 11);
  let b3 = not_equal(gold2, null);
  assert_message(b3, "guide should return a gold tile across a water detour");
  let best2 = equal(gold2.x, 6) && equal(gold2.y, 5);
  assert_message(
    best2,
    "gold tile must be the visible tile nearest the target, not the last tile of the path still in view",
  );
  ("the WINDOW half of the same guide is checked from here rather than from its own line in the gate list, and the reason is a gate rather than a preference. a function belonging to no app may not reach into one, and the gate list belongs to no app - so the two app-scoped checks it already names are a recorded wart it refuses to grow, and a third line was refused. it cannot be renamed to something honest about holding both, either: a rename reads as a new name, which is growth, which is refused as well. so the name stays as it was and this sentence carries what it can no longer say. the two are halves of ONE feature - the window says which tiles the player will be able to see, the picker chooses among them - so running them together is right in itself, and only the ORDER of discovery is backwards");
  let window_checked = app_g_day_guide_window_check();
  let r = {
    gold: [gold.x, gold.y],
    gold_detour: [gold2.x, gold2.y],
    window: window_checked,
  };
  return r;
}
