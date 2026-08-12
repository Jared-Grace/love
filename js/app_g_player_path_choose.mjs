import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_day_state_property } from "./app_g_day_state_property.mjs";
import { g_game_npcs_standing } from "./g_game_npcs_standing.mjs";
export function app_g_player_path_choose(g, player, to) {
  "the way the player walks somewhere: around everybody if there is a way around, and only if there is none, straight through the people in the way - each of whom trades places with the player as they meet.";
  "Around is asked first and kept whenever it exists, so people are still walked around politely and nobody is ever moved for a shortcut. Going through is the last answer, not the first, and it is only ever a shorter walk than no walk at all.";
  "Without it a player can be walled in by people and stay walled in for good. Strangers do not move, and the line that the player is walking is forgotten the moment the page is loaded again - so a player shut in by their own line and then reloading would find the line had become strangers standing in a wall, with nothing left that could ever open it.";
  "The player's OWN LINE is the one thing it will not go through, and stays standing for this question. A line is passed by backing it down its own trail, in order, which is a different move entirely - walking through it would trade places with a follower and leave the line in an order it was never walked in. Strangers stand aside or trade places; the line reverses. Each way past belongs to what is in the way.";
  "A stranger in the way does not stop being passable because somebody is walking behind the player. It used to: while a line existed this refused every way through, so one stranger across a narrow way sealed the player in with no line to back out of and no crowd to part. What the trade owes the line is paid where the line walks - each member trades with that same stranger in turn as they reach them, and the stranger comes out behind the whole line.";
  let around = g_coordinates_path_shortest(g, player, to);
  let open = list_empty_not_is(around);
  if (open) {
    return around;
  }
  let followers = app_g_day_state_property("followers");
  let line = g_game_npcs_standing(g, followers);
  let through = g_coordinates_path_shortest(line, player, to);
  let passed = list_empty_not_is(through);
  if (passed) {
    return through;
  }
  ("nothing is left standing at all: a way through the line itself, which is the only answer when the line is what is in the way and there is no room behind it to back the line into.");
  ("It is reached when a player has gathered more people than they have walked tiles - the trail is the room a line backs out into, and a line longer than the trail has none. Without this that player is walled in for the rest of the day by the very people following them, and no tap anywhere can ever free them.");
  ("Passing the line is not walking it. Each of them is traded with in turn as the player reaches them, they stand still rather than walking up behind, and once the walk is over the line is turned around into the order they are now standing in.");
  let nobody = g_game_npcs_standing(g, []);
  let past = g_coordinates_path_shortest(nobody, player, to);
  return past;
}
