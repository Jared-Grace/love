import { arguments_assert } from "./arguments_assert.mjs";
import { bless_vehicles_per_lane } from "./bless_vehicles_per_lane.mjs";
import { bless_vehicle_colours } from "./bless_vehicle_colours.mjs";
import { bless_block_lanes } from "./bless_block_lanes.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { multiply } from "./multiply.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { add } from "./add.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { range_map } from "./range_map.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
export function bless_vehicles_new(blocks) {
  arguments_assert(arguments, 1);
  ("Every car in the world: where it starts, which way it is pointed, where its lane begins");
  ("and ends, and what colour it is.");
  ("Made from the BLOCKS, because a car belongs to a road and a road belongs to a block. Ask");
  ("the world for its roads and the two streets become one pool of traffic, and a car that");
  ("drove off the end of one street would be free to reappear on the other.");
  ("A car is a plain record and not a person. It has no home, no address, no family and no");
  ("prayer attached to it, and nothing about the blessing ever looks at one. That is the point");
  ("of keeping them in a list of their own rather than putting them among the people: every");
  ("count of who is on the street, every reach of a prayer, every crowd the camera follows");
  ("reads the people list, and none of them has to learn to skip the traffic.");
  ("It carries its own ENTRY and EXIT rather than the ends of the lane, and which is which");
  ("depends on the way it is pointed. Driving is then the same two lines whichever way a car");
  ("faces - step towards the exit, and when the exit is behind you appear at the entry - and");
  ("nothing that moves a car has to ask its direction again.");
  ("The track stops one square SHORT of the far kerb, and that is what keeps a car on the");
  ("road. A car is drawn two squares wide from the square it stands on, so a car standing on");
  ("the last square of the road has half of itself over the pavement beyond it. The picture is");
  ("wider than the thing that carries it, so the thing that carries it has to stop early.");
  ("SPREAD along the track rather than started together. Two cars a lane both starting at the");
  ("kerb would drive the whole street nose to tail as one pair; started an even share of the");
  ("way apart they are two separate cars from the first moment - and since every car in the");
  ("world goes at one speed and steps on one beat, that share is the gap between them for as");
  ("long as the game runs. No car can ever catch another one, so none can overlap.");
  ("The spread is measured along the ROAD and not along the way a car is driving, which comes");
  ("to the same arrangement and is a great deal easier to be sure of - a lane is a row of");
  ("squares and the cars are put evenly along it.");
  ("The colour is drawn per car rather than per lane, so the two cars on one lane are almost");
  ("always different and the street never looks like it has one car repeated on it.");
  let per_lane = bless_vehicles_per_lane();
  let colours = bless_vehicle_colours();
  function block_vehicles(block) {
    let lanes = bless_block_lanes(block);
    function lane_vehicles(lane) {
      let y = property_get(lane, "y");
      let left = property_get(lane, "left");
      let right = property_get(lane, "right");
      let direction = property_get(lane, "direction");
      let far = subtract(right, 1);
      let span = subtract(right, left);
      let east_is = equal(direction, "east");
      let entry = far;
      let finish = left;
      if (east_is) {
        entry = left;
        finish = far;
      }
      function vehicle_at(index) {
        let reached = multiply(span, index);
        let along = divide_floor(reached, per_lane);
        let x = add(left, along);
        let colour = list_random_item(colours);
        let vehicle = {
          x: x,
          y: y,
          entry: entry,
          exit: finish,
          direction: direction,
          colour: colour,
          element: null,
        };
        return vehicle;
      }
      let made = range_map(per_lane, vehicle_at);
      return made;
    }
    let lanes_made = list_map(lanes, lane_vehicles);
    let block_made = list_flat(lanes_made);
    return block_made;
  }
  let blocks_made = list_map(blocks, block_vehicles);
  let vehicles = list_flat(blocks_made);
  return vehicles;
}
