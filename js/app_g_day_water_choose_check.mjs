import { g_map_water_wall_pond_new } from "./g_map_water_wall_pond_new.mjs";
import { g_coordinates_walkable_adjascent_nearest_player } from "./g_coordinates_walkable_adjascent_nearest_player.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_g_day_water_choose } from "./app_g_day_water_choose.mjs";
import { app_g_day_guide_pick } from "./app_g_day_guide_pick.mjs";
import { assert_message } from "./assert_message.mjs";
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
  let ponds = g_map_water_wall_pond_new(-1, true);
  let chosen = app_g_day_water_choose(ponds, player);
  let b = not_equal(chosen, null);
  assert_message(b, "a map with water in it must name some water");
  let nearest = equal(chosen.x, 6) && equal(chosen.y, 3);
  assert_message(
    nearest,
    "the nearest water the player can walk up to is the one named",
  );
  let enclosed = equal(chosen.x, 1) && equal(chosen.y, 1);
  let b4 = not_equal(enclosed, true);
  assert_message(
    b4,
    "water with no land beside it can never be named - nobody can stand next to it",
  );
  let cut_off = g_map_water_wall_pond_new(6, true);
  let chosen_cut = app_g_day_water_choose(cut_off, player);
  let b2 = not_equal(chosen_cut, null);
  assert_message(
    b2,
    "a wall of water is still water the player can walk up to",
  );
  let wall_named = equal(chosen_cut.x, 6) && equal(chosen_cut.y, 6);
  assert_message(
    wall_named,
    "water walled off from the player must not be named, near as it looks",
  );
  let dry = g_map_water_wall_pond_new(-1, false);
  let chosen_dry = app_g_day_water_choose(dry, player);
  let none = equal(chosen_dry, null);
  assert_message(none, "a map with no water has no water to name");
  let gold = app_g_day_guide_pick(ponds, player, chosen, 0, 11, 5, 11);
  let b3 = not_equal(gold, null);
  assert_message(b3, "the gold guide must be able to lead to the water chosen");
  let toward = less_than(gold.y, player.y);
  assert_message(toward, "the gold guide must lead toward the water, not away");
  ("ARRIVING is the other half, and it is checked here because it is the same question asked one step later: the chooser says which water, and this says which tile the player is left standing on when they tap it. it must be LAND every time - the nearest tile beside a tile of sea is more sea, so the answer that ignores whether anybody can stand there walks the player into the water it was leading them to the edge of");
  let shore = g_coordinates_walkable_adjascent_nearest_player(
    ponds,
    player,
    chosen,
  );
  let dry_shore = equal(shore.x, 6) && equal(shore.y, 4);
  assert_message(
    dry_shore,
    "the tile the player is left on must be the nearest LAND beside the water, never the water",
  );
  let shore_cut = g_coordinates_walkable_adjascent_nearest_player(
    cut_off,
    player,
    chosen_cut,
  );
  let dry_shore_cut = equal(shore_cut.x, 6) && equal(shore_cut.y, 7);
  assert_message(
    dry_shore_cut,
    "the near side of a wall of water is the side the player is standing on",
  );
  let middle = {
    x: 1,
    y: 1,
  };
  let no_shore = g_coordinates_walkable_adjascent_nearest_player(
    ponds,
    player,
    middle,
  );
  let b5 = equal(no_shore, null);
  assert_message(
    b5,
    "water with nothing but water beside it leaves nowhere to stand, and must say so",
  );
  let r = {
    chosen: [chosen.x, chosen.y],
    shore: [shore.x, shore.y],
    shore_cut_off: [shore_cut.x, shore_cut.y],
    chosen_cut_off: [chosen_cut.x, chosen_cut.y],
    dry: chosen_dry,
    gold: [gold.x, gold.y],
  };
  return r;
}
