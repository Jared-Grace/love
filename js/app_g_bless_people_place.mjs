import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { set_add } from "./set_add.mjs";
import { set_includes_not } from "./set_includes_not.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { bless_home_reaches } from "./bless_home_reaches.mjs";
export function app_g_bless_people_place(people, coordinates_land, taken) {
  arguments_assert(arguments, 3);
  ("Set everybody down somewhere they belong - a walker anywhere along the pavement, anybody");
  ("else within a few steps of their own door - and never two people on one tile.");
  ("Placed near home rather than anywhere on the map, and that is the difference between a");
  ("world and a scattering. An address worked out from a person's place in the line means");
  ("nothing while the people sharing it are stood a hundred paces apart; put them at the");
  ("same door and the block the prayer names is a thing the player can see.");
  ("The tiles already spoken for are carried in and added to as they go, so nobody is set");
  ("down on the player and nobody is set down on somebody already placed. It is the same");
  ("set throughout, which is why the last person placed is refused every tile the first");
  ("sixty took.");
  ("Somebody with nowhere left near home is set down anywhere free rather than left without");
  ("a tile at all. A person with no tile has no picture and no id, so they would be counted");
  ("by every prayer and seen by nobody - a whole household could be earned by praying for a");
  ("crowd the player was never shown. Standing in the wrong street is a far smaller wrong");
  ("than that, and it can only happen when a doorstep is genuinely full.");
  function free_is(tile) {
    let key = g_coordinates_key(tile);
    let free = set_includes_not(taken, key);
    return free;
  }
  function person_place(person) {
    let home = property_get(person, "home");
    let roam = property_get(person, "roam");
    let free = list_filter(coordinates_land, free_is);
    function near_is(tile) {
      let close = bless_home_reaches(home, roam, tile);
      return close;
    }
    let near = list_filter(free, near_is);
    let nowhere = list_empty_is(near);
    let choices = near;
    if (nowhere) {
      choices = free;
    }
    let tile = list_random_item(choices);
    let x = property_get(tile, "x");
    let y = property_get(tile, "y");
    property_set(person, "x", x);
    property_set(person, "y", y);
    let key = g_coordinates_key(tile);
    set_add(taken, key);
  }
  each(people, person_place);
}
