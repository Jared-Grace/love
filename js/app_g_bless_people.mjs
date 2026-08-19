import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { set_add } from "./set_add.mjs";
import { set_new } from "./set_new.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { g_genders_without_img } from "./g_genders_without_img.mjs";
import { g_npcs_ids_ensure } from "./g_npcs_ids_ensure.mjs";
import { app_g_bless_people_count } from "./app_g_bless_people_count.mjs";
import { app_g_bless_people_place } from "./app_g_bless_people_place.mjs";
import { app_g_bless_person_new } from "./app_g_bless_person_new.mjs";
import { bless_homes_ensure } from "./bless_homes_ensure.mjs";
import { bless_places_ensure } from "./bless_places_ensure.mjs";
export function app_g_bless_people(
  player_img,
  coordinates_land,
  blocks,
  player,
) {
  arguments_assert(arguments, 4);
  ("Everybody in the world, made in one line and then given, in order, an address, a home,");
  ("and somewhere to stand.");
  ("The order is the whole of it, and each step needs the one before it. A person is made");
  ("from their place in the line; their address is that same place divided up; the door they");
  ("keep near is the building in their address; and where they are set down is a free tile");
  ("near that door. Do any of it earlier and it is being asked about something that does not");
  ("exist yet.");
  ("Their pictures come from the same list the gospel game's own people are drawn from, so a");
  ("person here looks exactly like a person there - and the player's own picture is taken out");
  ("of it, so nobody in the crowd is the player's twin.");
  ("The gospel game's people carry a name, a gender, a conversation and a record of what has");
  ("been said to them, because that game is a conversation. Nobody is spoken to here. A");
  ("person you pray for needs only to be somewhere and be seen, so giving them a scripted");
  ("conversation would be generating content the game can never reach.");
  ("Ids come LAST, because a person's id is the tile they were first standing on and that is");
  ("what their picture is filed under. Given out before they were placed, everybody would be");
  ("filed under nowhere and nobody could take a step.");
  ("The player's tile is spoken for before anybody is set down, so the crowd forms around the");
  ("player rather than on top of them.");
  let genders = g_genders_without_img(player_img);
  let count = app_g_bless_people_count();
  let indexes = range(count);
  function person_new(index) {
    let person = app_g_bless_person_new(index, genders);
    return person;
  }
  let people = list_map(indexes, person_new);
  bless_places_ensure(people);
  bless_homes_ensure(people, blocks);
  let taken = set_new();
  let key_player = g_coordinates_key(player);
  set_add(taken, key_player);
  app_g_bless_people_place(people, coordinates_land, taken);
  g_npcs_ids_ensure(people);
  return people;
}
