import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export function bless_building_family_column(index, columns) {
  arguments_assert(arguments, 2);
  ("Which column of a building a family lives in, given their place in the building and how");
  ("many columns it has. A column is one door and the strip of house above and behind it.");
  ("Families are numbered along the GROUND FLOOR first and then along the floor above, so a");
  ("number below the column count is somebody living downstairs in that column, and a number");
  ("at or above it is somebody living upstairs over the family that many places back.");
  ("A second storey is exactly two families sharing one column, and that is why this exists");
  ("at all. While every building was one floor high a family WAS its column and the two");
  ("numbers were the same, so nothing had to say so; now a house can hold more families than");
  ("it has doors, and reading a family number as a column number walks off the end of the");
  ("building.");
  ("The upstairs family shares the DOOR of the family below them, which is what a shared");
  ("front door means. So this is what says where an upstairs person stands when they come");
  ("out, as well as which strip of wall lights up when they are prayed for - and the two");
  ("cannot disagree, because both ask here.");
  ("Asked with the COLUMN COUNT handed in rather than the building, so that whoever holds a");
  ("row of doors and no building can still ask. The count is how many doors there are, and");
  ("that is a thing the pavement knows about a house without knowing anything else about it.");
  let ground_is = less_than(index, columns);
  if (ground_is) {
    return index;
  }
  let above = subtract(index, columns);
  return above;
}
