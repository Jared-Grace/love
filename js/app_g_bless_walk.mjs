import { app_g_crowd_part } from "./app_g_crowd_part.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { g_coordinates_path_shortest_crowd } from "./g_coordinates_path_shortest_crowd.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { object_assign } from "./object_assign.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { app_g_player_move_animate } from "./app_g_player_move_animate.mjs";
import { g_direction } from "./g_direction.mjs";
import { g_path_steps } from "./g_path_steps.mjs";
export async function app_g_bless_walk(
  world,
  target,
  player_img_c,
  div_map,
  on_arrive,
) {
  arguments_assert(arguments, 5);
  ("Walks the player to a tile they tapped, a step at a time, turning to face each step as");
  ("it is taken.");
  ("Every rule in here is the gospel game's rule, called rather than copied: the way round");
  ("water, the way a path becomes single steps, the facing a step implies, the slide, and");
  ("keeping the player in the middle of the screen. Walking is the same act in both games,");
  ("so there is one implementation of it and this is the caller.");
  ("A tap on ground there is no way to - across water, or behind a wall - simply does");
  ("nothing. Refusing out loud would be scolding the player for a guess the map invited, and");
  ("the map already tells the truth: they can see the water.");
  ("A crowd is not one of those. The pavement here holds a whole block's worth of people, so");
  ("the way round somebody is often taken by somebody else, and treating that as no way at");
  ("all would leave the player standing still on a street they can plainly walk down.");
  ("The caller is told after every step rather than at the end, because what the player can");
  ("see changes with each one - the cone travels with them, and a readout that only caught");
  ("up on arrival would spend the whole walk lying.");
  let player = property_get(world, "player");
  let path = g_coordinates_path_shortest_crowd(world, player, target);
  let nowhere = list_empty_is(path);
  if (nowhere) {
    return;
  }
  ("The way opens before it is walked: anybody standing on it steps aside first, a crowd");
  ("several deep parting into a lane, and the few too hemmed in to have anywhere to go are");
  ("passed one at a time by trading places as the walk reaches them.");
  ("This is the gospel game's own parting, called and not copied, for the same reason every");
  ("other rule in here is. Both games put a player on a street among people who are");
  ("standing about, and making room is one act - written twice it would be two crowds that");
  ("part differently, and the second one would learn none of what the first already knows");
  ("about waves, corners and two people being sent to one tile.");
  ("Nobody is held still, because in this game a tap on a person is a prayer and never a");
  ("walk. The one who must not be shuffled out of reach is whoever was tapped, and here");
  ("that is nobody - the walk is always to open ground.");
  app_g_crowd_part(world, path, null);
  let steps = g_path_steps(path);
  for (let step of steps) {
    let from = property_get(step, "from");
    let to = property_get(step, "to");
    let direction = g_direction(from, to);
    app_g_character_face(player, player_img_c, direction);
    await app_g_player_move_animate(to, player_img_c);
    app_g_player_center(to, player_img_c, div_map);
    ("the player is written down on the tile they reached, the same way the gospel game writes it: everything the tile knows is copied onto them. Writing only the two numbers would be the smaller change and it is the wrong one - the tile carries what it is made of, and the player standing on it is standing on that.");
    object_assign(player, to);
    on_arrive();
  }
}
