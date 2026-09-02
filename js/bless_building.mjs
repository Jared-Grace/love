import { property_get } from "./property_get.mjs";
import { bless_building_yard } from "./bless_building_yard.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bless_building(x, y, families, storeys, set_back) {
  arguments_assert(arguments, 5);
  ("One building, given as its parts - the roof seen from above, the bands of front wall it");
  ("stands behind, the doors let into the bottom band, the windows let into the one above it");
  ("and the spare ground of its slot that it does not cover. The tile named is the north-west");
  ("corner of the SLOT, which is the building's own corner only when it stands as far back as");
  ("it can.");
  ("How many FAMILIES is handed in rather than looked up, because buildings differ. Two,");
  ("three or four families, according to where this one stands in the row. It is the street");
  ("that decides, so the street is what says.");
  ("How many FLOORS is handed in the same way and for the same reason. A building goes up as");
  ("well as along now, and how far up is another thing about this one that the row it stands");
  ("in decides rather than the picture of a house in general.");
  ("How far BACK is handed in for a third time and for the third same reason. Where in its");
  ("slot a house stands is drawn when the street is laid out, and it arrives already cut down");
  ("to what this building has room for, so nothing here has to check it. It is the only thing");
  ("about a house that differs between one visit to the street and the next.");
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
  ("The roof is the row BEHIND the walls, and it is given separately because it is not drawn");
  ("in the same material as the wall. Seen from above a building is a roof with its walls");
  ("showing, and painting both the same makes the whole thing read as flat ground of an odd");
  ("colour rather than as something standing up.");
  ("ONE ROW OF ROOF, AND ONE ROW OF WALL FOR EVERY FLOOR. So a two-storey house is three rows");
  ("deep and a one-storey house is two, and the difference is what a player reads height off");
  ("from above: a low house is a thin building, a tall one is a thicker one with a second");
  ("band of wall. Both used to be three rows deep, the low one making up the difference with");
  ("a second row of roof, and a broad roof over a single band of wall reads as a bungalow");
  ("with a large loft rather than as a small house.");
  ("What stays the same for every building is the SLOT and not the building. Three rows of");
  ("ground are set aside per house whatever stands in them, so the backs of the row stay");
  ("level, the alleys between houses run the same length, and every sum done outside this");
  ("function - where the pavement goes, how deep a block is, where a doorstep is - is");
  ("unchanged by a house being shorter than its slot.");
  ("The spare row of a low house is its YARD, and it is handed back because somebody has to");
  ("cover it. It was building before, so whatever the world generated underneath was buried;");
  ("left alone now it is whatever the ground happened to be, which on a freshly made world is");
  ("as readily a lake behind the houses as grass. It is not part of `tiles` and so is not");
  ("solid - it is ground the street lays over, in the same material as the pavement it");
  ("adjoins.");
  ("WHICH SIDE the yard falls on is what the set-back moves. Standing flush with the pavement");
  ("the spare row is behind the house; stepped back one square it is in front, and the house");
  ("has a forecourt. That is the whole of what a set-back does, and it is worth doing because");
  ("a row of low houses all flush with the pavement draws one long straight edge, which the");
  ("eye reads as a single front with doors in it rather than as separate houses.");
  ("The walls are the LAST rows of the building, the ones nearest the pavement, because that");
  ("is the side the player is looking at, and the doors are in the last of those because a");
  ("door meets the ground.");
  ("Windows are counted as WALL and not as openings in it. A window is a hole you can see");
  ("through and not one you can walk through, so the square stays solid and stays painted in");
  ("the building's own material; the window itself is drawn over the top of it. Left out of");
  ("the wall, a window would be a gap in the front of the house with the field showing");
  ("through.");
  ("All of it is solid. There is no inside to any of this - a door is a place to stand");
  ("outside, not a way in - so `tiles` gives back every square of it for whoever needs to");
  ("know how much ground the building takes up.");
  let r = bless_building_yard(families, storeys, y, set_back, x);
  let yard = property_get(r, "yard");
  let columns = property_get(r, "columns");
  let built = property_get(r, "built");
  let walls = property_get(r, "walls");
  let windows = property_get(r, "windows");
  let doorways = property_get(r, "doorways");
  let roof = property_get(r, "roof");
  let building = {
    roof: roof,
    walls: walls,
    doorways: doorways,
    windows: windows,
    yard: yard,
    columns: columns,
    storeys: storeys,
    families: families,
    tiles: built,
  };
  return building;
}
