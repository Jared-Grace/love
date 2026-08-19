import { property_list_get } from "./property_list_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { bless_place_within } from "./bless_place_within.mjs";
import { bless_resident_roam } from "./bless_resident_roam.mjs";
export function bless_homes_ensure(people, blocks) {
  arguments_assert(arguments, 2);
  ("Give everybody the place they keep near and how far from it they will go - the pavement");
  ("of their own block for the people out walking it, their own front door for everybody");
  ("else.");
  ("Asked AFTER addresses are handed out, because which block and which door are a person's");
  ("own is read off their address. That is what finally ties the arithmetic to the ground:");
  ("up to here a person's building was a number that meant nothing on the map, and now the");
  ("people the prayer counts as living together are the people the player can see standing");
  ("together.");
  ("A building's number counts from the beginning of the world and a block is built knowing");
  ("only its own five doors, so the number has to be taken back down to where it sits");
  ("inside its block before a door can be found by it. Handed over whole, everybody on the");
  ("second block would be sent to a door that does not exist.");
  ("A walker's home is the WHOLE pavement of their own block and their roam is nothing,");
  ("which reads as 'may be anywhere along it and nowhere off it'. Everybody walking one");
  ("pavement shares its one list rather than a copy each, because it is one pavement - and");
  ("it is theirs rather than any pavement, so the crowd a prayer names is the crowd stood");
  ("in front of the player rather than one scattered over the whole world.");
  ("A resident's home is a list of one, their doorstep, so that both kinds answer the same");
  ("question about being near enough to home and the walking never has to ask which kind it");
  ("is moving.");
  let roam_resident = bless_resident_roam();
  function person_home(person) {
    let places = property_get(person, "places");
    let index_block = property_get(places, "block");
    let block = list_get(blocks, index_block);
    let sidewalk = property_get(block, "sidewalk");
    let walker = property_get(person, "walker");
    if (walker) {
      property_set(person, "home", sidewalk);
      property_set(person, "roam", 0);
      return;
    }
    let building = property_get(places, "building");
    let within = bless_place_within("building", building);
    let door = property_list_get(block, "doors", within);
    property_set(person, "home", [door]);
    property_set(person, "roam", roam_resident);
  }
  each(people, person_home);
}
