import { fn_name } from "./fn_name.mjs";
export function bless_place_sizes() {
  "How many of each rung fit inside the one above it - three people to a household, four";
  "households to a building, and so on up.";
  "Keyed by the CONTAINER, and the number is how many of the rung below it holds. Read";
  ("against `",
    fn_name("bless_rungs"),
    "`, that is the branching of the whole world in one object: the");
  ("product of every number is how many people a world with one of everything would hold.");
  ("These are the numbers the ladder's own rule is checked against - no rung should hold");
  ("much more than about fifty of the rung below, because a rung that holds more is a rung");
  ("that failed to factor and hands its travel to the player as a list of chores.");
  ("They are ROUND rather than true. A real block holds an uneven number of buildings and a");
  ("real household is sometimes one person; taking an average here keeps the world");
  ("arithmetic and keeps a person's address derivable from their position rather than");
  ("stored, which is what lets a world be generated without being written down. Variety");
  ("belongs to what a place LOOKS like, not to how many of them there are.");
  ("There is no entry for a person, because a person is the bottom and holds nobody.");
  ("They were chosen for BRANCHING and not for population, and above a county they get the");
  ("population plainly wrong - multiplied out, a country here holds over a billion people");
  ("and the world holds three hundred billion. That is the wrong thing to tune them by:");
  ("what these numbers actually decide is how many stops the player must travel to at each");
  ("rung, and every one of them sits under the fifty the ladder asks for. A world is");
  ("generated from an index rather than written down, so an oversized upper rung costs");
  ("nothing but a number nobody counts. Tune them by playing the journey, not by");
  ("multiplying them out.");
  let sizes = {
    household: 3,
    building: 4,
    block: 5,
    neighborhood: 12,
    district: 8,
    settlement: 8,
    county: 20,
    state: 30,
    region: 8,
    country: 6,
    continent: 40,
    world: 6,
  };
  return sizes;
}
