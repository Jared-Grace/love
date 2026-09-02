import { fn_name } from "./fn_name.mjs";
export function bless_place_sizes() {
  "How many of each rung fit inside the one above it - three people to a household, five";
  "buildings to a block, and so on up. The building is the exception and says so below.";
  "The household number is the only AVERAGE here and every other one is exact. A family is";
  "two to five people, arranged so that its building still holds nine - so three is what a";
  "family comes to on average and is the right number for working a building out with, and";
  "the wrong number for asking who lives in one. That question goes to the function that";
  "knows how a building shares its nine out, and this number is never the answer to it.";
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
  ("is three tiles deep and three tiles wide per home, so a house with three households in");
  ("it is a small terrace, which is what the row looks like.");
  ("How WIDE that comes to is no longer one number, and neither is how tall. A house with");
  ("two floors puts half its homes over the other half, so it is half as wide and shows two");
  ("bands of wall where a low one shows one. Nine people still live behind either of them.");
  ("Three is also what keeps the building a rung at all. At two it branched fewer ways than");
  ("anything else on the ladder - every other rung goes five or more - and a rung that thin");
  ("is close to being a relabelling of the one below it rather than a step up from it. Three");
  ("is still the narrowest rung here, and it is narrow for a reason the picture agrees with:");
  ("a building really is a small thing next to a block. Widening the street instead is not");
  ("available - the ground is only as wide as the row of buildings needs it to be, and the");
  ("row is nearly all of it.");
  ("THE BUILDING NUMBER IS NO LONGER A COUNT. A building has two, three or four doors in it, chosen by where it stands on the street, so there is no one number of families in a building to write here. What this number is now is the NUMBERING STRIDE - the most doors any building can have, and therefore how many family numbers each building is given. A building with two doors uses the first two of its four and leaves the other two unused, which costs nothing at all, because a family is a number that gets worked out and never a row that gets stored.");
  ("Keeping it a stride is what keeps every address a division. Which building a family belongs to is still its number divided by this, and where it sits inside that building is still the remainder - both of them the same reading as before. Numbered end to end instead, with no gaps, a family would have to be found by adding up every building before it, and a world that has to be counted through from the beginning is a world that has to be stored.");
  ("It is the one entry here that does NOT say how many people are held below it, so the people in a building are asked for by name instead of multiplied out. Four times three is twelve and a building holds nine.");
  let sizes = {
    family: 3,
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
