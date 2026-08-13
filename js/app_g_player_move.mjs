import { app_g_player_path_onscreen_is } from "./app_g_player_path_onscreen_is.mjs";
import { or } from "./or.mjs";
import { app_g_day_followers_face } from "./app_g_day_followers_face.mjs";
import { app_g_crowd_part } from "./app_g_crowd_part.mjs";
import { app_g_player_path_choose } from "./app_g_player_path_choose.mjs";
import { app_g_day_line_blocking_is } from "./app_g_day_line_blocking_is.mjs";
import { app_g_day_line_back_out } from "./app_g_day_line_back_out.mjs";
import { object_assign } from "./object_assign.mjs";
import { app_g_player_get } from "./app_g_player_get.mjs";
import { app_g_game_save_get } from "./app_g_game_save_get.mjs";
import { app_g_player_path_animate } from "./app_g_player_path_animate.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function app_g_player_move(
  coordinates_move_to,
  still,
  player_img_c,
  div_map,
) {
  "somebody is left standing where they are while the way opens: whoever was tapped, or nothing when the tap was on open ground. The whole point of walking up to a person is to arrive beside THAT person, so they are the one member of a crowd who must not be shuffled aside to make the way";
  "the people walking behind the player stand in the way like anybody else, so a player who walks into a dead end can be sealed in by their own line. when that is the only thing between them and where they want to go, the line backs down its own trail until the way is open - which is also what tapping somebody in your own line means: walk back down the line to them";
  let player = await app_g_player_get();
  let g = await app_g_game_save_get();
  let blocking = app_g_day_line_blocking_is(g, player, coordinates_move_to);
  if (blocking) {
    await app_g_day_line_back_out(
      player,
      coordinates_move_to,
      player_img_c,
      div_map,
    );
  }
  let path = app_g_player_path_choose(g, player, coordinates_move_to);
  ("a way there is not enough - it has to be a way the player could see when they tapped. the reason lives with the asking, next door");
  ("asked second and only when there is a path at all, because 'every tile of nothing is on screen' is true and would turn a tap that reaches nowhere into a walk of no steps");
  let walkable = list_empty_not_is(path);
  let reachable =
    walkable && app_g_player_path_onscreen_is(player, path, div_map);
  if (reachable) {
    ("the way opens before the player walks it: anybody standing on it steps aside first, and the few too hemmed in to have anywhere to go are passed one at a time by trading places as the walk reaches them");
    app_g_crowd_part(g, path, still);
    await app_g_player_path_animate(g, player, path, player_img_c, div_map);
    object_assign(player, coordinates_move_to);
  }
  ("everything has come to a stop, so the line stops facing the way it was going and each of them looks at whoever they are following");
  ("it is here rather than inside the walk because the player's own tile is written down at the end of it - turned any sooner, the one at the front of the line would be pointed at the tile the player has just left, which is the tile that person is now standing on themselves");
  ("a tap that reaches nowhere and moved nobody is not a stop, it is a refusal, and waiting out a slide before answering it would delay the answer for nothing");
  let moved = or(blocking, reachable);
  if (moved) {
    await app_g_day_followers_face(player);
  }
  return reachable;
}
