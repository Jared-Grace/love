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
  ("The depth is two because only the front row is wall the player looks at; the row behind it is roof, and one row of roof is enough to say the building has a top without eating the street.");
  let family_width = bless_family_width();
  let shape = {
    depth: 2,
    gap: 1,
    family_width: family_width,
  };
  return shape;
}
