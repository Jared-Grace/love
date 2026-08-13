import { app_g_player_walk_begin } from "./app_g_player_walk_begin.mjs";
import { app_g_player_walk_stopped_is } from "./app_g_player_walk_stopped_is.mjs";
import { object_assign } from "./object_assign.mjs";
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
  ("where the player has ACTUALLY got to, written down one step at a time.");
  ("it starts as the tile they are standing on rather than as the tile they asked for, and it is only ever moved forward by a step that finished - which is what makes it right on a walk that was stopped partway. ",
    each_async.name,
    " breaks out as soon as the body hands back true, so a walk ends here at the tile it had got to.");
  let arrived = list_first(path);
  ("said before a single step is taken, so that any walk already going is left behind from this moment on rather than from whenever the first slide of this one happens to finish");
  let walk = app_g_player_walk_begin();
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
    ("the player themself is moved a tile at a time, not once at the end. a walk is a long await, and a tap that lands in the middle of one reads where the player is BEFORE choosing a way there - so a player whose tile is only written at the finish is asked about while standing, on paper, on the tile they set off from, and the way chosen starts from a tile they left several seconds ago");
    object_assign(player, to);
    ("a tap during a walk sends the player somewhere else, and this is where the old walk lets go: it has just finished a step, the player is written down standing on a whole tile, and it simply stops rather than spending the rest of its path dragging them back the way they came");
    let stopped = app_g_player_walk_stopped_is(walk);
    return stopped;
  }
  await each_async(steps, lambda);
  if (line_walk) {
    app_g_day_line_turn(g, arrived);
  }
  ("nothing is handed back, because the answer is already written where everybody reads it: the player. a returned tile would be a second copy of that, and the day one of them was updated and the other was not is the day the player is in two places");
}
