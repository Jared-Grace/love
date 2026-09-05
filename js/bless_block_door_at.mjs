import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_map } from "./list_map.mjs";
export function bless_block_door_at(r, x) {
  arguments_assert(arguments, 2);
  ("Where the doorsteps of one building are - the squares of ground directly in front of its");
  ("doors, one for each family living behind them.");
  ("A LIST rather than a single step, because a building has a door for every family in it.");
  ("It used to be one step in front of one middle door, so nine people shared a doorstep and");
  ("the crowd outside a building was a heap rather than three households. Each family");
  ("standing at its own door is the same fact the three doors say, said again by where");
  ("people are - and the two cannot disagree, because the steps are measured off the doors");
  ("themselves rather than worked out a second time.");
  ("The step is on the GROUND and not on the door, because a door here is a wall square and");
  ("nobody stands inside a wall. It shares the door's column, so it is the square a person");
  ("would be standing on if they had just come out.");
  ("It is the square one row in FRONT OF THE DOOR, rather than a row of the block worked out");
  ("here. For a house standing flush in its slot those are the same square, and for a house");
  ("set back in its slot they are not: its forecourt lies between its door and the street,");
  ("and a step taken on a fixed row would leave the household of a set-back house standing a");
  ("square away from the door they came out of. Measured off the door, it follows the house");
  ("wherever the street decides to put it.");
  let sidewalk_y = property_get(r, "sidewalk_y");
  let block_width = property_get(r, "block_width");
  let sidewalk_depth = property_get(r, "sidewalk_depth");
  let alleys = property_path_get_2(r, "r2", "alleys");
  let yard_y = property_path_get_2(r, "r2", "yard_y");
  let road_y = property_path_get_2(r, "r2", "road_y");
  let road_depth = property_path_get_2(r, "r2", "road_depth");
  let sidewalk = bless_tiles_rectangle(
    x,
    sidewalk_y,
    block_width,
    sidewalk_depth,
  );
  ("The GRASS comes back as two bands with the pavement between them, rather than as one band the pavement is drawn over. The two say the same thing to look at, and only this one can be counted: a single band overlapping the pavement would list the same square twice, and the count of ground a person can stand on is read straight off these lists.");
  ("Both bands are measured from where the pavement is rather than from how deep the verges are, so neither can drift away from it. The top band runs from the fronts down to the pavement and the bottom band from the pavement down to the kerb; move the pavement a row and both follow it, and no row is left over between them.");
  let front_depth = subtract(sidewalk_y, yard_y);
  let back_y = add(sidewalk_y, sidewalk_depth);
  let back_depth = subtract(road_y, back_y);
  let yard_front = bless_tiles_rectangle(x, yard_y, block_width, front_depth);
  let yard_back = bless_tiles_rectangle(x, back_y, block_width, back_depth);
  let yard = list_concat(yard_front, yard_back);
  let road = bless_tiles_rectangle(x, road_y, block_width, road_depth);
  function door_at(building) {
    let doorways = property_get(building, "doorways");
    function doorstep(doorway) {
      let at = property_get(doorway, "x");
      let door_y = property_get(doorway, "y");
      let ahead = add(door_y, 1);
      let step = {
        x: at,
        y: ahead,
      };
      return step;
    }
    let steps = list_map(doorways, doorstep);
    return steps;
  }
  ("The YARD and the ROAD are given back from here alongside the pavement, because all three are the same kind of thing: a band running the whole length of the block at a row this block knows and nobody else does. Named here, whoever lays the block down lays them without having to work out where any of them starts.");
  let r3 = {
    alleys,
    sidewalk,
    yard,
    road,
    road_y,
    door_at,
  };
  return r3;
}
