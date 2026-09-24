import { arguments_assert } from "./arguments_assert.mjs";
import { bless_view_family_started } from "./bless_view_family_started.mjs";
import { bless_view_people } from "./bless_view_people.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { set_to_list } from "./set_to_list.mjs";
import { bless_person_place } from "./bless_person_place.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_min } from "./list_min.mjs";
import { bless_blessed_key } from "./bless_blessed_key.mjs";
import { set_includes } from "./set_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { equal } from "./equal.mjs";
import { bless_view_of_people } from "./bless_view_of_people.mjs";
export function bless_view_family_started_ordered(blessed, view) {
  arguments_assert(arguments, 2);
  ("Of everybody left in a house the player has started, just the ones in the house they");
  ("started FIRST - so the prayers after the first one lead back to the first family until");
  ("it is finished.");
  ("First by the ORDER OF THE RECORD, which remembers prayers in the order they were said.");
  ("Nearest finishing was tried first and it drifts: a tap that lands on a passer-by beside");
  ("the one being aimed at starts a second house, and when that house happens to be smaller");
  ("the aim jumps to it. Asked by order, a stray prayer changes nothing - the first house");
  ("stays first until it is done.");
  ("A house is as early as its earliest prayer. Only prayers over single people are asked");
  ("about, because a prayer over the house or anything larger finishes it, and a finished");
  ("house has nobody left to be handed back.");
  ("An empty answer is handed straight back: with nothing started there is no first house.");
  let remaining = bless_view_family_started(blessed, view);
  let people = bless_view_people(remaining);
  let none = list_empty_is(people);
  if (none) {
    return remaining;
  }
  let order = set_to_list(blessed);
  function person_household(person) {
    let household = bless_person_place(person, "family");
    return household;
  }
  function person_started_when(person) {
    let household = person_household(person);
    let members = bless_place_members("family", household);
    let keys = list_map(members, member_key);
    let said = list_filter(keys, key_said_is);
    let positions = list_map(said, key_position);
    let earliest = list_min(positions);
    return earliest;
  }
  function member_key(member) {
    let key = bless_blessed_key("person", member);
    return key;
  }
  function key_said_is(key) {
    let is = set_includes(blessed, key);
    return is;
  }
  function key_position(key) {
    let position = list_index_of(order, key);
    return position;
  }
  let starts = list_map(people, person_started_when);
  let first = list_min(starts);
  function person_first_is(person) {
    let when = person_started_when(person);
    let is = equal(when, first);
    return is;
  }
  let chosen = list_filter(people, person_first_is);
  let view_chosen = bless_view_of_people(chosen);
  return view_chosen;
}
