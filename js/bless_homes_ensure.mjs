import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { bless_resident_roam } from "./bless_resident_roam.mjs";
export function bless_homes_ensure(people, block) {
  arguments_assert(arguments, 2);
  ("Give everybody the place they keep near and how far from it they will go - the pavement");
  ("itself for the people out walking it, their own front door for everybody else.");
  ("Asked AFTER addresses are handed out, because which door is a person's own is read off");
  ("the building in their address. That is what finally ties the arithmetic to the ground:");
  ("up to here a person's building was a number that meant nothing on the map, and now the");
  ("people the prayer counts as living together are the people the player can see standing");
  ("together.");
  ("A walker's home is the WHOLE pavement and their roam is nothing, which reads as 'may be");
  ("anywhere along it and nowhere off it'. Everybody walking shares one list rather than a");
  ("copy each, because it is one pavement.");
  ("A resident's home is a list of one, their doorstep, so that both kinds answer the same");
  ("question about being near enough to home and the walking never has to ask which kind it");
  ("is moving.");
  let sidewalk = property_get(block, "sidewalk");
  let doors = property_get(block, "doors");
  let roam_resident = bless_resident_roam();
  function person_home(person) {
    let walker = property_get(person, "walker");
    if (walker) {
      property_set(person, "home", sidewalk);
      property_set(person, "roam", 0);
      return;
    }
    let places = property_get(person, "places");
    let building = property_get(places, "building");
    let door = list_get(doors, building);
    property_set(person, "home", [door]);
    property_set(person, "roam", roam_resident);
  }
  each(people, person_home);
}
