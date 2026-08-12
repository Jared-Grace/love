import { fn_name } from "./fn_name.mjs";
import { app_g_day_water_choose } from "./app_g_day_water_choose.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { assert_message } from "./assert_message.mjs";
import { g_water } from "./g_water.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
export function app_g_day_water_choose_check() {
  ("deterministic REGRESSION check of the water the day's believers are walked to (",
    fn_name("app_g_day_water_choose"),
    ") on synthetic 12x12 maps, with the player at the bottom (6,10). run: node scripts/ai.mjs ",
    fn_name("app_g_day_water_choose_check"));
  ("PONDS: one tile of water at (6,3) and a 3x3 block of it in the corner. the single tile is the nearest one that can be walked up to, so it is the one named - and the block's middle (1,1), which is the nearest water there is to nothing but more water, is never named, because nobody can stand next to it. that is the whole difference between water and water somebody can be baptized in");
  ("CUT OFF: a wall of water all the way across y=6, with the pond left where it was on the far side of it. the pond is now unreachable, so the wall itself - the nearest water the player can walk up to - is named instead, at (6,6), straight up the player's own column. a chooser that measured in a straight line would still name the pond and lead the day into a wall");
  ("DRY: a map with no water at all has no answer, and says so with null rather than with a tile that is not water");
  ("and the last case is the join between the two halves: the gold guide has to be able to LEAD to whatever was chosen. water cannot be stood on, so the tile itself is never walkable - what makes it leadable is that some land beside it is, which is exactly what the chooser promised. asking the picker here is what checks the promise was kept");
  let player = {
    x: 6,
    y: 10,
  };
  function map_new(wall_row, pond_wanted) {
    let size = 12;
    let coordinates = [];
    for (let y = 0; less_than(y, size); y++) {
      for (let x = 0; less_than(x, size); x++) {
        let wall_here = equal(y, wall_row);
        let pond_here = pond_wanted && equal(x, 6) && equal(y, 3);
        let block_here = pond_wanted && less_than(x, 3) && less_than(y, 3);
        let water_here = wall_here || pond_here || block_here;
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
      npcs: [],
    };
    return g;
  }
  let ponds = map_new(-1, true);
  let chosen = app_g_day_water_choose(ponds, player);
  let b = not_equal(chosen, null);
  assert_message(b, "a map with water in it must name some water");
  let nearest = equal(chosen.x, 6) && equal(chosen.y, 3);
  assert_message(nearest, "the nearest water the player can walk up to is the one named");
  let enclosed = equal(chosen.x, 1) && equal(chosen.y, 1);
  assert_message(
    not_equal(enclosed, true),
    "water with no land beside it can never be named - nobody can stand next to it",
  );
  let cut_off = map_new(6, true);
  let chosen_cut = app_g_day_water_choose(cut_off, player);
  let b2 = not_equal(chosen_cut, null);
  assert_message(b2, "a wall of water is still water the player can walk up to");
  let wall_named = equal(chosen_cut.x, 6) && equal(chosen_cut.y, 6);
  assert_message(
    wall_named,
    "water walled off from the player must not be named, near as it looks",
  );
  let dry = map_new(-1, false);
  let chosen_dry = app_g_day_water_choose(dry, player);
  let none = equal(chosen_dry, null);
  assert_message(none, "a map with no water has no water to name");
  let gold = app_g_day_guide_pick(ponds, player, chosen, 0, 11, 5, 11);
  let b3 = not_equal(gold, null);
  assert_message(b3, "the gold guide must be able to lead to the water chosen");
  let toward = less_than(gold.y, player.y);
  assert_message(toward, "the gold guide must lead toward the water, not away");
  let r = {
    chosen: [chosen.x, chosen.y],
    chosen_cut_off: [chosen_cut.x, chosen_cut.y],
    dry: chosen_dry,
    gold: [gold.x, gold.y],
  };
  return r;
}
