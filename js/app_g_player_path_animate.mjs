import { list_first } from "./list_first.mjs";
import { app_g_day_line_walked_through_is } from "./app_g_day_line_walked_through_is.mjs";
import { app_g_day_line_turn } from "./app_g_day_line_turn.mjs";
import { not } from "./not.mjs";
import { app_g_player_npc_swap_if } from "./app_g_player_npc_swap_if.mjs";
import { app_g_day_trail_add } from "./app_g_day_trail_add.mjs";
import { app_g_day_followers_settle } from "./app_g_day_followers_settle.mjs";
import { app_g_day_followers_step } from "./app_g_day_followers_step.mjs";
import { g_path_steps } from "./g_path_steps.mjs";
import { each_async } from "./each_async.mjs";
import { property_get } from "./property_get.mjs";
import { g_direction } from "./g_direction.mjs";
import { app_g_character_face } from "./app_g_character_face.mjs";
import { app_g_player_move_animate } from "./app_g_player_move_animate.mjs";
import { app_g_player_center } from "./app_g_player_center.mjs";
export async function app_g_player_path_animate(
  g,
  player,
  path,
  player_img_c,
  div_map,
) {
  "asked once before anybody has moved - afterwards the answer is always no";
  let line_walk = app_g_day_line_walked_through_is(path);
  let following = not(line_walk);
  let steps = g_path_steps(path);
  ("where the player has ACTUALLY got to, written down one step at a time and handed back at the end.");
  ("it starts as the tile they are standing on rather than as the tile they asked for, and it is only ever moved forward by a step that finished. today those two agree - the walk always runs to the end - and the whole point of writing it this way is the day they stop agreeing: ",
    each_async.name,
    " already breaks out of the walk when the body hands back true, so a walk becomes stoppable by one line inside this body, and everything downstream is already asking where the player IS instead of where they were sent.");
  let arrived = list_first(path);
  async function lambda(step) {
    let from = property_get(step, "from");
    let to = property_get(step, "to");
    let direction = g_direction(from, to);
    app_g_character_face(player, player_img_c, direction);
    ("the line walks with the player, one tile per tile, into the space the player is leaving. it is done HERE rather than once at the end of a tap because a line that teleported to the destination would not be a line");
    ("the tile being left is remembered FIRST and the line told to step second, because the line walks the remembered way - so a step that moved people before writing down where they were going would send each of them one tile short");
    ("somebody standing where the player is stepping trades places with them, so a player walled in by people can always walk out. on a way that goes AROUND everybody there is never anybody there, so this does nothing at all on an ordinary walk");
    app_g_player_npc_swap_if(g, from, to);
    app_g_day_trail_add(from);
    if (following) {
      app_g_day_followers_step(g);
    }
    await app_g_player_move_animate(to, player_img_c);
    app_g_player_center(to, player_img_c, div_map);
    await app_g_day_followers_settle();
    ("written after the step has finished, never before it, so a walk cut short leaves this naming the last tile the player really stood on");
    arrived = to;
  }
  await each_async(steps, lambda);
  if (line_walk) {
    app_g_day_line_turn(g, arrived);
  }
  return arrived;
}
