import { list_get_property } from "./list_get_property.mjs";
import { bless_places_ensure } from "./bless_places_ensure.mjs";
import { g_npcs_ids_ensure } from "./g_npcs_ids_ensure.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each_index } from "./each_index.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_remove_end } from "./list_remove_end.mjs";
import { list_size } from "./list_size.mjs";
import { list_without } from "./list_without.mjs";
import { mod } from "./mod.mjs";
import { property_set } from "./property_set.mjs";
import { property_transform_multiple } from "./property_transform_multiple.mjs";
import { g_genders_get } from "./g_genders_get.mjs";
import { app_g_bless_people_count } from "./app_g_bless_people_count.mjs";
export function app_g_bless_people(player_img, coordinates_land) {
  arguments_assert(arguments, 2);
  ("The people standing about the world - a tile to stand on, a picture, and a way they are");
  ("facing, and nothing else at all.");
  ("The gospel game's own people carry a name, a gender, a conversation and a record of");
  ("what has been said to them, because that game is a conversation. Nobody is spoken to");
  ("here. A person you pray for needs only to be somewhere and be seen, so giving them a");
  ("scripted conversation would be generating content the game can never reach.");
  ("Their pictures come from the same list the walking art is drawn from, so a person here");
  ("looks exactly like a person there - and the player's own picture is taken out of it, so");
  ("nobody in the crowd is the player's twin.");
  let genders = g_genders_get();
  function lambda$imgs(imgs) {
    let filtered = list_without(imgs, player_img);
    return filtered;
  }
  property_transform_multiple(genders, "imgs", lambda$imgs);
  let gender_count = list_size(genders);
  let count = app_g_bless_people_count();
  let people = list_remove_end(coordinates_land, count);
  function person_initialize(person, index) {
    let r = mod(index, gender_count);
    let imgs = list_get_property(genders, r, "imgs");
    let img = list_random_item(imgs);
    property_set(person, "img", img);
    property_set(person, "direction", "south");
  }
  each_index(people, person_initialize);
  ("Everybody is given the gospel game's own id before they are handed over, because that is");
  ("what a person's picture is filed under, and a person whose picture cannot be found again");
  ("is a person the crowd can never take a step for. The tile they were set down on is what");
  ("becomes the id, which is why this is asked here and not later: once they start walking,");
  ("where they are standing is no longer where they began.");
  g_npcs_ids_ensure(people);
  ("They are also given somewhere to belong, and for the same reason it is done HERE: an");
  ("address is worked out from a person's place in this line, so it has to be asked while");
  ("this is still the line the world was made from. It is what every rung above the lowest");
  ("is prayed over.");
  bless_places_ensure(people);
  return people;
}
