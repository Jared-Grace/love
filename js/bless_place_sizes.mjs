import { fn_name } from "./fn_name.mjs";
export function bless_place_sizes() {
  "How many of each rung fit inside the one above it - three people to a household, two";
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
  ("The two BOTTOM rungs are the exception to that, and they are tuned by looking rather");
  ("than by travelling. Everybody who lives on a block is standing outside on it - there is");
  ("no indoors in this game - so household times building times block is not a population,");
  ("it is a count of people on one pavement, and the pavement is a fixed number of tiles.");
  ("A building held four households and so held twelve people. A block therefore held");
  ("sixty, and sixty people stood on the ninety-two tiles a block's pavement and alleys");
  ("come to: seven tiles in ten occupied. At that density a person is hemmed in on all four");
  ("sides often enough that the street reads as a crowd holding still, which is what a");
  ("player reported twice.");
  ("Two households to a building leaves thirty on those same ninety-two tiles - one tile in");
  ("three - and almost nobody with nowhere to step. It is the BUILDING that gives, rather");
  ("than the block, because the block is the rung the player is asked to cover and thinning");
  ("it would shorten the street itself: buildings-per-block sets the length of the pavement");
  ("as well as the size of the crowd, so cutting it moves both ends of the fraction and");
  ("changes the density not at all.");
  ("Six people to a building is also the truer number for what is DRAWN. A building here is");
  ("three tiles across and two deep; twelve people living in that was a claim the picture");
  ("never supported, and two households in it reads as the small house the row actually");
  ("looks like.");
  ("The cost is honest and it is that a building is now a thin rung - two of the thing");
  ("below it, where every other rung branches five or more ways. A rung that thin is close");
  ("to not being a rung at all, and if it is ever dropped, this is the number that says");
  ("why it could be. It is kept because a prayer that reaches your own building rather than");
  ("only your own household is a step the player can feel, and because widening the street");
  ("instead is not available: the ground is twenty-seven tiles across and a block is");
  ("already nineteen of them.");
  let sizes = {
    household: 3,
    building: 3,
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
