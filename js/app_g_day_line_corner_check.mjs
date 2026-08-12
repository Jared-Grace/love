import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { app_g_day_state } from "./app_g_day_state.mjs";
import { property_set } from "./property_set.mjs";
import { app_g_day_line_back_step_room_is } from "./app_g_day_line_back_step_room_is.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
import { g_game_npcs_standing } from "./g_game_npcs_standing.mjs";
import { g_coordinates_path_shortest } from "./g_coordinates_path_shortest.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_g_player_path_choose } from "./app_g_player_path_choose.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_g_day_line_walked_through_is } from "./app_g_day_line_walked_through_is.mjs";
export function app_g_day_line_corner_check() {
  ("deterministic REGRESSION check that a player can never be walled in by their own line. run: node scripts/ai.mjs ",
    fn_name("app_g_day_line_corner_check"));
  ("a corridor, two followers between the player and the way out, and a trail no longer than the line - so there is no way around, no way past while it stands, and no room to back it out.");
  let state = app_g_day_state();
  let coordinates = [];
  for (let x = 0; less_than(x, 7); x++) {
    coordinates.push({
      x,
      y: 0,
      item: "grass",
    });
  }
  let player = {
    x: 3,
    y: 0,
  };
  let first = {
    x: 4,
    y: 0,
    name: "first",
  };
  let second = {
    x: 5,
    y: 0,
    name: "second",
  };
  let followers = [first, second];
  let g = {
    coordinates,
    npcs: followers,
  };
  let trail = [
    {
      x: 4,
      y: 0,
    },
    {
      x: 5,
      y: 0,
    },
  ];
  property_set(state, "followers", followers);
  property_set(state, "trail", trail);
  let to = {
    x: 6,
    y: 0,
  };
  let room = app_g_day_line_back_step_room_is();
  let b = equal(room, false);
  assert_message(
    b,
    "a trail no longer than the line has no room to back the line out",
  );
  let line = g_game_npcs_standing(g, followers);
  let standing = g_coordinates_path_shortest(line, player, to);
  let b2 = list_empty_is(standing);
  assert_message(b2, "the line standing leaves no way past it");
  let path = app_g_player_path_choose(g, player, to);
  let b3 = list_empty_not_is(path);
  assert_message(b3, "the last resort finds a way through the line itself");
  let through = app_g_day_line_walked_through_is(path);
  let b4 = equal(through, true);
  assert_message(
    b4,
    "the walk knows it is passing the line, not being followed by it",
  );
  property_set(state, "followers", []);
  property_set(state, "trail", []);
  let r = {
    ok: true,
  };
  return r;
}
