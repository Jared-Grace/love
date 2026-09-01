import { arguments_assert } from "./arguments_assert.mjs";
import { bless_building_shape } from "./bless_building_shape.mjs";
import { property_get } from "./property_get.mjs";
import { bless_building_columns } from "./bless_building_columns.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { add } from "./add.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { and } from "./and.mjs";
import { less_than } from "./less_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_concat } from "./list_concat.mjs";
export function bless_building(x, y, families, storeys) {
  arguments_assert(arguments, 4);
  ("One building, given as its parts - the roof seen from above, the bands of front wall it");
  ("stands behind, the doors let into the bottom band and the windows let into the one above");
  ("it. The tile named is its north-west corner.");
  ("How many FAMILIES is handed in rather than looked up, because buildings differ. Two,");
  ("three or four families, according to where this one stands in the row. It is the street");
  ("that decides, so the street is what says.");
  ("How many FLOORS is handed in the same way and for the same reason. A building goes up as");
  ("well as along now, and how far up is another thing about this one that the row it stands");
  ("in decides rather than the picture of a house in general.");
  ("The front divides into one COLUMN per family per floor, three squares across, and the");
  ("building is exactly those columns laid side by side. A one-storey house needs a column");
  ("for every family and is as wide as it ever was; a two-storey house needs half as many");
  ("and is half as wide, which is the whole reason for building upwards. The same nine");
  ("people live behind either of them.");
  ("A door for each ground-floor family and a window for each family above, and that is the");
  ("point of this shape. The prayer works upwards through families to buildings to streets,");
  ("and a player who never sees that structure is praying one person at a time forever.");
  ("Openings in a row is the structure drawn on the street itself: this is one building, and");
  ("this many homes live behind it. Nothing has to be said in words, and nothing has to be");
  ("opened to be read - it is on the map the whole time.");
  ("Buildings of different widths and different heights say a second thing the same way. A");
  ("wide low house beside a narrow tall one is a row somebody could live in rather than a row");
  ("that was stamped out, and neither the width nor the height is decoration - nine tiles of");
  ("frontage on one floor and three tiles on two are both a house with three families in it.");
  ("The door is the middle square of its own column, so every door has a square of wall on");
  ("both sides of it, the ones at the two ends of the building included, and the two squares");
  ("of wall between neighbouring doors are one from each of them. A door hard against the");
  ("alley would read as the gap between two houses widening rather than as a way into this");
  ("one, and the player counting homes would count it as part of the street.");
  ("The window sits directly ABOVE the door of its own column, in the middle of the same");
  ("three squares, which is what marks it as belonging to that part of the house rather than");
  ("hanging on the wall somewhere. It is never at the left or right end of the building for");
  ("exactly the reason a door is never there.");
  ("There is a window for each family living UPSTAIRS and not one for each column, and the");
  ("two differ whenever the families do not divide evenly. The odd family lives on the ground");
  ("with nobody above it, so its column keeps its door and goes without a window - and that");
  ("blank stretch of upper wall is honest rather than untidy: it says this house has a floor");
  ("up there and nobody home on this side of it.");
  ("Nothing is left over, which is the other half of why the column is what decides the");
  ("width. A finished family lights its own share, so every finished family lights the whole");
  ("building and a half-prayed street can be read off at a glance. A spare square would");
  ("belong to no family and would sit dark in the middle of a finished house.");
  ("The roof is the rows BEHIND the walls, and it is given separately because it is not drawn");
  ("in the same material as the wall. Seen from above a building is a roof with its walls");
  ("showing, and painting both the same makes the whole thing read as flat ground of an odd");
  ("colour rather than as something standing up.");
  ("A building is the same DEPTH whether it has one floor or two, and what changes is how");
  ("much of that depth is wall and how much is roof. A tall house shows two bands of wall and");
  ("a thin strip of roof; a low one shows a single band of wall and a broad roof behind it.");
  ("That is how height is read from above, and it is why the depth may not vary: buildings");
  ("of different depths would leave the backs of the row ragged and the alleys between them");
  ("running different lengths, which is a great deal of arithmetic bought for a difference");
  ("nobody is looking at from the pavement.");
  ("The walls are the LAST rows, the ones nearest the pavement, because that is the side the");
  ("player is looking at, and the doors are in the last of those because a door meets the");
  ("ground.");
  ("Windows are counted as WALL and not as openings in it. A window is a hole you can see");
  ("through and not one you can walk through, so the square stays solid and stays painted in");
  ("the building's own material; the window itself is drawn over the top of it. Left out of");
  ("the wall, a window would be a gap in the front of the house with the field showing");
  ("through.");
  ("All of it is solid. There is no inside to any of this - a door is a place to stand");
  ("outside, not a way in - so `tiles` gives back every square of it for whoever needs to");
  ("know how much ground the building takes up.");
  let shape = bless_building_shape();
  let depth = property_get(shape, "depth");
  let slab = property_get(shape, "family_width");
  let columns = bless_building_columns(families, storeys);
  let width = multiply(columns, slab);
  let depth_roof = subtract(depth, storeys);
  let roof = bless_tiles_rectangle(x, y, width, depth_roof);
  let y_walls = add(y, depth_roof);
  let face = bless_tiles_rectangle(x, y_walls, width, storeys);
  let rows_back = subtract(depth, 1);
  let y_front = add(y, rows_back);
  let y_upper = subtract(y_front, 1);
  let middle = divide_floor(slab, 2);
  let upstairs = subtract(families, columns);
  function column_middle_is(tile) {
    let tile_x = property_get(tile, "x");
    let across = subtract(tile_x, x);
    let within = modulo(across, slab);
    let centred = equal(within, middle);
    return centred;
  }
  function tile_column(tile) {
    let tile_x = property_get(tile, "x");
    let across = subtract(tile_x, x);
    let column = divide_floor(across, slab);
    return column;
  }
  function door_is(tile) {
    let tile_y = property_get(tile, "y");
    let ground = equal(tile_y, y_front);
    let centred = column_middle_is(tile);
    let opening = and(ground, centred);
    return opening;
  }
  function window_is(tile) {
    let tile_y = property_get(tile, "y");
    let above = equal(tile_y, y_upper);
    let centred = column_middle_is(tile);
    let column = tile_column(tile);
    let lived_in = less_than(column, upstairs);
    let placed = and(above, centred);
    let glazed = and(placed, lived_in);
    return glazed;
  }
  let doorways = list_filter(face, door_is);
  let windows = list_filter(face, window_is);
  let walls = list_filter_not(face, door_is);
  let solid = list_concat(roof, walls);
  let built = list_concat(solid, doorways);
  let building = {
    roof: roof,
    walls: walls,
    doorways: doorways,
    windows: windows,
    columns: columns,
    storeys: storeys,
    families: families,
    tiles: built,
  };
  return building;
}
