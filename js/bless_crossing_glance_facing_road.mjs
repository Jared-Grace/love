import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_game_character_turn_held } from "./app_shared_game_character_turn_held.mjs";
import { bless_crossing_glance } from "./bless_crossing_glance.mjs";
export async function bless_crossing_glance_facing_road(
  player,
  player_img_c,
  toward,
  facing,
  div_map,
) {
  arguments_assert(arguments, 5);
  ("One look up the road that swings the head round through the ROAD rather than behind it.");
  ("Looking one way and then the other is exactly half a turn, and half a turn has two ways");
  ("round that are equally short. Left to the turn, one of the two went through the front and");
  ("the other through the back, so a walker checking both lanes turned her back on the road");
  ("she was about to cross - and seen from above, the pair of looks was a full spin.");
  ("So she faces the road first, holds it for a frame, and only then looks up the lane. The");
  ("way round is decided by the crossing rather than by the order the eight facings happen to");
  ("be listed in, and every picture on the way is one an eighth of a turn from the last.");
  ("Already facing the road, the first half costs nothing.");
  await app_shared_game_character_turn_held(player, player_img_c, toward);
  await bless_crossing_glance(player, player_img_c, facing, div_map);
}
