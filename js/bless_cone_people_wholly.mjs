import { arguments_assert } from "./arguments_assert.mjs";
import { list_filter } from "./list_filter.mjs";
import { bless_cone_holds_person_wholly } from "./bless_cone_holds_person_wholly.mjs";
export function bless_cone_people_wholly(cone, people) {
  arguments_assert(arguments, 2);
  ("Everybody the cone holds whole - the crowd the player has plainly taken in, rather than");
  ("everybody any part of whom is inside it.");
  ("This is what the player KEEPS when they stop walking or turn. Handed the generous");
  ("answer instead, the set would quietly include people the player never really saw, and a");
  ("game that says you may pray for somebody has to be able to point at when you saw them.");
  function person_wholly(person) {
    let wholly = bless_cone_holds_person_wholly(cone, person);
    return wholly;
  }
  let people_wholly = list_filter(people, person_wholly);
  return people_wholly;
}
