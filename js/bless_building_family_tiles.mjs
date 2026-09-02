import { bless_building_family_tiles_share } from "./bless_building_family_tiles_share.mjs";
import { bless_building_family_column } from "./bless_building_family_column.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { list_get_property } from "./list_get_property.mjs";
export function bless_building_family_tiles(building, index) {
  arguments_assert(arguments, 2);
  ("One family's share of a building, given as the ground it covers - the column of front");
  ("their door or window sits in the middle of, and whichever floors of it are theirs.");
  ("The building divides into these EXACTLY, nothing shared and nothing left over, and that");
  ("is what this is for. A family that has been prayed for lights its own share, so a house");
  ("with two of its three families done is two thirds lit and can be read as two thirds done");
  ("from across the street. Lighting only the door said the same thing in a mark too small");
  ("to see and too easily mistaken for the door simply being drawn.");
  ("A SLAB rather than a single square, because a lit slab reads as a part of the house and");
  ("a lit square reads as a mark hung on its wall. The player is being told how much of this");
  ("house is done, and a third of a house is a third of the shape of it.");
  ("Families are numbered along the GROUND FLOOR first and then along the floor above, so a");
  ("number below the column count is somebody living downstairs and a number at or above it");
  ("is somebody upstairs. That ordering is not free to change: the same numbers are the");
  ("households of this building in the order the ladder gives them, and a family lighting up");
  ("the wrong part of the house would be a wrong answer nothing reported.");
  ("Which column a family is in is found by ASKING the building where it put that column's");
  ("door, rather than by counting along the front. How wide a column is and where the doors");
  ("fall are both decided by the shape of a building, and a sum done here would be a second");
  ("copy of that decision - free to go quietly wrong the next time either number changed,");
  ("with the slabs still drawn and still the right size, just no longer over the doors they");
  ("belong to.");
  ("A family upstairs takes the FLOORS ABOVE the ground and the roof over them, and the");
  ("family below it takes the single row of front wall its door is in. Two families sharing");
  ("one column is exactly what a second storey is, so the column has to be cut somewhere,");
  ("and the only honest place to cut it is the floor between them: the ground family owns");
  ("the wall you can see their door in, and the family upstairs owns the wall you can see");
  ("their window in and the roof above their heads.");
  ("A column with NOBODY upstairs takes the whole of itself for its one family, which is what");
  ("every column did before there were two floors. The odd family that forces the rounding");
  ("up lives on the ground with an empty floor over it, and giving them that floor is what");
  ("keeps the building divided exactly - left out it would be a strip belonging to nobody,");
  ("permanently dark in the middle of a finished house.");
  ("The roof is never split between two families of the same column. It goes to whoever is");
  ("highest in it, because the roof is over their heads and not over anybody else's, and");
  ("because half a row is not a thing this map can draw.");
  ("How DEEP a column runs is asked of the BUILDING and not of the picture of a house in");
  ("general. A building is one row of roof with a row of wall under it for each floor, so a");
  ("low house is two rows deep and a tall one is three, while the slot every house stands in");
  ("is three rows whatever fills it. Measured off the slot, a low house would light a row");
  ("behind itself that belongs to its yard rather than to anybody living there.");
  let tiles = property_get(building, "tiles");
  let doorways = property_get(building, "doorways");
  let columns = property_get(building, "columns");
  let families = property_get(building, "families");
  let upstairs = subtract(families, columns);
  let ground_is = less_than(index, columns);
  let column = bless_building_family_column(index, columns);
  let x_door = list_get_property(doorways, column, "x");
  let share = bless_building_family_tiles_share({
    doorways,
    column,
    building,
    x_door,
    upstairs,
    ground_is,
    tiles,
  });
  return share;
}
