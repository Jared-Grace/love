import { assert_message } from "./assert_message.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
export function app_g_day_guide_pick_check() {
  "deterministic REGRESSION check of the pure gold-guide picker on a synthetic 12x12 all-land map (no water): player at the BOTTOM (6,10), target at the TOP (6,1), only the bottom half 'visible' (window y 5..11). the gold tile MUST be a real tile inside the window and closer to the target than the player (it caught the neighbours-are-wrapped bug where guide returned null). asserts, so it can join the qa gate — run: node scripts/ai.mjs app_g_day_guide_pick_check";
  const size = 12;
  const coordinates = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      coordinates.push({
        x,
        y,
        item: "grass",
      });
    }
  }
  const target = {
    x: 6,
    y: 1,
  };
  const player = {
    x: 6,
    y: 10,
  };
  const g = {
    coordinates,
    npcs: [target],
  };
  const gold = app_g_day_guide_pick(g, player, target, 0, 11, 5, 11);
  assert_message(
    gold !== null,
    "guide should return a gold tile for an off-screen target",
  );
  const in_window = gold.y >= 5 && gold.y <= 11 && gold.x >= 0 && gold.x <= 11;
  assert_message(in_window, "gold tile must be inside the visible window");
  assert_message(
    gold.y < player.y,
    "gold tile must lead toward the target (upward)",
  );
  return {
    gold: [gold.x, gold.y],
  };
}
