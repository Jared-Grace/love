import { arguments_assert } from "./arguments_assert.mjs";
import { bless_family_width } from "./bless_family_width.mjs";
export function bless_building_shape() {
  arguments_assert(arguments, 0);
  ("What every building looks like from above except for how wide it is - how many tiles deep it stands, how wide the alley between it and the next one is, and how much of the front belongs to each family living behind it.");
  ("They belong together because they are one proportion rather than three settings. A building wider than it is deep reads as a frontage on a street, which is what a person walking past actually sees; make it square and the row stops looking like buildings and starts looking like a wall with notches in it.");
  ("The WIDTH is not here any more, and that is the whole of what changed. Buildings have two, three or four doors depending on where they stand in the row, so there is no one width for all of them; a building is asked for its own, and what is left here is everything that is the same whichever building it is.");
  ("The alley is a single tile, and it is what stops the row being one long building. It is deliberately too narrow to be somewhere anybody goes - a gap you could walk down would be a second street, and this game has one.");
  ("A family owns a SLAB of the front three squares wide with its own door in the middle of it, and a building is exactly its families laid side by side. Three is the smallest odd width there is above one, and it has to be odd for the door to sit in the middle of it rather than at one edge.");
  ("Everything about a width falls out of that. A width is the slab times the number of families, so a building divides into them EXACTLY with nothing left over - which is what lets a finished family light its own share of the house instead of only its door, and what makes a half-lit street readable at a glance as how far the praying has got. A width with a spare square in it would leave a strip belonging to nobody, permanently dark or else lit by whoever happened to be next to it.");
  ("Every door then has wall on both sides of it without that having to be arranged: the outer squares of a slab are wall, so a door at the very end of a building still has its own square of wall between it and the alley. Two families side by side put two squares of wall between their doors, one belonging to each of them, and that is the line where one home ends and the next begins.");
  ("Written the other way round - a width chosen and the doors fitted into it - the two numbers would drift the first time a building held a different number of homes, and the front row would go on being drawn while quietly no longer saying anything true about who lives behind it.");
  ("The depth is FOUR, and it is the same four whether a building has one floor or two. What varies is how much of it is wall and how much is roof: a two-storey house shows two bands of wall with a single strip of roof behind them, and a one-storey house shows one band of wall with a broad roof behind it. Seen from above that is the whole of what makes one house look taller than the next.");
  ("Whatever the house does not fill is YARD, and the row of it in FRONT of the doors belongs to the family behind them. That row is there so that no family owns a single square of ground and nothing else. A two-storey house divides its face between its floors, and the downstairs family is left holding the row its door is in - one deep and three across - which lights up as a stripe across the street rather than as a home. With the yard in front of it the smallest share anybody can own is two rows deep, and every celebration has a shape.");
  ("It was THREE while a two-storey house was the tallest thing on the street and every family still lit whatever it owned as one block. Three left a tall house filling its slot exactly, with no yard anywhere and nothing in front of a downstairs door but the pavement of the street itself.");
  ("It does not vary, and that is a decision rather than an oversight. Buildings of different depths would leave the backs of the row ragged and would make every alley between them a different length, which is a great deal of arithmetic bought for a difference nobody standing on the pavement is looking at. The height is read off the wall, and the wall is where it is drawn.");
  ("It was TWO while every building had one floor, and two was right then: only the front row was wall, and one row of roof was enough to say the building had a top without eating the street. A second floor needs a second band of wall to be drawn in, and it may not take the roof strip to get it - a house with no roof showing at all reads as a wall standing on the pavement rather than as a building.");
  let family_width = bless_family_width();
  let shape = {
    depth: 3,
    gap: 1,
    family_width: family_width,
  };
  return shape;
}
