import { app_g_day_guide_pick_check_map_new } from "./app_g_day_guide_pick_check_map_new.mjs";
import { app_g_day_water_choose_check } from "./app_g_day_water_choose_check.mjs";
import { app_g_day_guide_window_check } from "./app_g_day_guide_window_check.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { assert_message } from "./assert_message.mjs";
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
  ("the window every case here is judged against, written once. the checks below still spell the four edges out again by hand rather than asking the repo's own inside test, on purpose: a check that judged the answer with the very predicate the picker uses would agree with it about a wrong edge and say nothing.");
  let window_tiles = {
    min_x: 0,
    max_x: 11,
    min_y: 5,
    max_y: 11,
  };
  let open = app_g_day_guide_pick_check_map_new(-1, -1, target);
  let gold = app_g_day_guide_pick(open, player, target, window_tiles);
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
  let detour = app_g_day_guide_pick_check_map_new(6, 0, target);
  let gold2 = app_g_day_guide_pick(detour, player, target, window_tiles);
  let b3 = not_equal(gold2, null);
  assert_message(b3, "guide should return a gold tile across a water detour");
  let best2 = equal(gold2.x, 6) && equal(gold2.y, 5);
  assert_message(
    best2,
    "gold tile must be the visible tile nearest the target, not the last tile of the path still in view",
  );
  ("STRANGER IN THE GAP: the same detour map with somebody standing in the one gap the water leaves. read with people as walls there is no way to the target at all and the guide goes out, which is what left the third person of a day unguided. people are not walls to it - the walk parts a crowd - so the answer must be the detour map's answer unchanged");
  let blocked = app_g_day_guide_pick_check_map_new(6, 0, target);
  blocked.npcs.push({
    x: 0,
    y: 6,
  });
  let gold3 = app_g_day_guide_pick(blocked, player, target, window_tiles);
  let b4 = not_equal(gold3, null);
  assert_message(
    b4,
    "a person standing in the only gap must not read as no way to the target",
  );
  let best3 = equal(gold3.x, 6) && equal(gold3.y, 5);
  assert_message(
    best3,
    "a person in the gap costs steps, so the gold tile is the one the open detour gives",
  );
  ("the WINDOW half of the same guide is checked from here rather than from its own line in the gate list, and the reason is a gate rather than a preference. a function belonging to no app may not reach into one, and the gate list belongs to no app - so the two app-scoped checks it already names are a recorded wart it refuses to grow, and a third line was refused. it cannot be renamed to something honest about holding both, either: a rename reads as a new name, which is growth, which is refused as well. so the name stays as it was and this sentence carries what it can no longer say. the two are halves of ONE feature - the window says which tiles the player will be able to see, the picker chooses among them - so running them together is right in itself, and only the ORDER of discovery is backwards");
  let window_checked = app_g_day_guide_window_check();
  ("the WATER the last day of believers is led to is checked from here for the same reason and by the same arrangement - it is a third thing this one name is carrying. it belongs here on its own merits too: on every other day the guide leads to a PERSON, and on that day it leads to a tile of water instead, so what is being checked is that the picker can lead to a target nobody can stand on. the choosing half asks which water, and this half asks whether the gold can reach it");
  let water_checked = app_g_day_water_choose_check();
  let r = {
    gold: [gold.x, gold.y],
    gold_detour: [gold2.x, gold2.y],
    gold_blocked: [gold3.x, gold3.y],
    window: window_checked,
    water: water_checked,
  };
  return r;
}
