import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
import { app_g_player_move_animate } from "./app_g_player_move_animate.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
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
  ("A tap on ground there is no way to - across water, or onto somebody standing still -");
  ("simply does nothing. Refusing out loud would be scolding the player for a guess the map");
  ("invited, and the map already tells the truth: they can see the water.");
  ("The caller is told after every step rather than at the end, because what the player can");
  ("see changes with each one - the cone travels with them, and a readout that only caught");
  ("up on arrival would spend the whole walk lying.");
  let player = property_get(world, "player");
  let path = g_coordinates_path_shortest(world, player, target);
  if (not(path)) {
    return;
  }
  let steps = g_path_steps(path);
  for (let step of steps) {
    let to = property_get(step, "to");
    let direction = g_direction(player, to);
    app_g_character_face(player, player_img_c, direction);
    let x = property_get(to, "x");
    let y = property_get(to, "y");
    object_merge_set(player, {
      x: x,
      y: y,
    });
    app_g_player_center(player, player_img_c, div_map);
    await app_g_player_move_animate(player, player_img_c);
    on_arrive();
  }
}
