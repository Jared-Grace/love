import { fn_name } from "./fn_name.mjs";
export function bless_place_sizes() {
  "How many of each rung fit inside the one above it - three people to a household, three";
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
  ("It is the BUILDING that gives, rather than the block, because the block is the rung the");
  ("player is asked to cover and thinning it would shorten the street itself:");
  ("buildings-per-block sets the length of the pavement as well as the size of the crowd, so");
  ("cutting it moves both ends of the fraction and changes the density not at all.");
  ("It went to two first and that was too far. Thirty on a block is one tile in three and");
  ("about one person in twenty with nowhere to step, which is a pavement anybody can walk");
  ("but is thin enough that the player asked for the crowd back. Three is where it stands:");
  ("forty-five to a block, four tiles in seven, and about one person in seven momentarily");
  ("boxed in. That last number is the one to read, and it is read on a world the instant it");
  ("is built, before anybody has taken a step - the walkers spread out afterwards, so it is");
  ("the worst the street ever is rather than the way it looks. Against it, sixty to a block");
  ("stranded one person in four and never recovered, because the crowd that would have to");
  ("move to free somebody was itself stuck.");
  ("Nine people to a building is also nearer what is DRAWN than twelve was. A building here");
  ("is three tiles across and two deep, and three households in that is a small terrace,");
  ("which is what the row looks like.");
  ("Three is also what keeps the building a rung at all. At two it branched fewer ways than");
  ("anything else on the ladder - every other rung goes five or more - and a rung that thin");
  ("is close to being a relabelling of the one below it rather than a step up from it. Three");
  ("is still the narrowest rung here, and it is narrow for a reason the picture agrees with:");
  ("a building really is a small thing next to a block. Widening the street instead is not");
  ("available - the ground is twenty-seven tiles across and a block is already nineteen of");
  ("them.");
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
