import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { bless_tiles_rectangle } from "./bless_tiles_rectangle.mjs";
import { list_map } from "./list_map.mjs";
export function bless_block_door_at(r, x) {
  arguments_assert(arguments, 2);
  ("Where the doorsteps of one building are - the pavement squares directly in front of its");
  ("doors, one for each family living behind them.");
  ("A LIST rather than a single step, because a building has a door for every family in it.");
  ("It used to be one step in front of one middle door, so nine people shared a doorstep and");
  ("the crowd outside a building was a heap rather than three households. Each family");
  ("standing at its own door is the same fact the three doors say, said again by where");
  ("people are - and the two cannot disagree, because the steps are measured off the doors");
  ("themselves rather than worked out a second time.");
  ("The step is on the PAVEMENT and not on the door, because a door here is a wall square");
  ("and nobody stands inside a wall. It shares the door's column, so it is the square a");
  ("person would be standing on if they had just come out.");
  let sidewalk_y = property_get(r, "sidewalk_y");
  let block_width = property_get(r, "block_width");
  let sidewalk_depth = property_get(r, "sidewalk_depth");
  let alleys = property_path_get_2(r, "r2", "alleys");
  let sidewalk = bless_tiles_rectangle(
    x,
    sidewalk_y,
    block_width,
    sidewalk_depth,
  );
  function door_at(building) {
    let doorways = property_get(building, "doorways");
    function doorstep(doorway) {
      let at = property_get(doorway, "x");
      let step = {
        x: at,
        y: sidewalk_y,
      };
      return step;
    }
    let steps = list_map(doorways, doorstep);
    return steps;
  }
  let r3 = {
    alleys,
    sidewalk,
    door_at,
  };
  return r3;
}
