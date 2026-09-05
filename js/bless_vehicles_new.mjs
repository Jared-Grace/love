import { arguments_assert } from "./arguments_assert.mjs";
import { bless_vehicles_per_lane } from "./bless_vehicles_per_lane.mjs";
import { bless_vehicle_colours } from "./bless_vehicle_colours.mjs";
import { bless_block_lanes } from "./bless_block_lanes.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { random } from "./random.mjs";
import { bless_vehicle_pace_ms } from "./bless_vehicle_pace_ms.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { range_map } from "./range_map.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
export function bless_vehicles_new(blocks) {
  arguments_assert(arguments, 1);
  ("Every car in the world: where it starts, which way it is pointed, how fast it goes and");
  ("what colour it is.");
  ("Made from the BLOCKS, because a car belongs to a road and a road belongs to a block. Ask");
  ("the world for its roads and the two streets become one pool of traffic, and a car that");
  ("drove off the end of one street would be free to reappear on the other.");
  ("A car is a plain record and not a person. It has no home, no address, no family and no");
  ("prayer attached to it, and nothing about the blessing ever looks at one. That is the point");
  ("of keeping them in a list of their own rather than putting them among the people: every");
  ("count of who is on the street, every reach of a prayer, every crowd the camera follows");
  ("reads the people list, and none of them has to learn to skip the traffic.");
  ("It carries its own ends. A car knows the left and right of the lane it is on, so driving");
  ("is a question it can answer by itself without going back to the block it came from - which");
  ("is what lets a car be handed to a loop and left alone.");
  ("SPREAD along the lane rather than started together. Two cars a lane both starting at the");
  ("kerb would drive the whole street nose to tail as one pair; started an even share of the");
  ("way apart they are two separate cars from the first moment, and they stay apart because");
  ("they are going at nearly the same speed.");
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
      let span_below = subtract(right, left);
      let span = add(span_below, 1);
      function vehicle_at(index) {
        let reached = multiply(span, index);
        let along = divide_floor(reached, per_lane);
        let x = add(left, along);
        let fraction = random();
        let pace = bless_vehicle_pace_ms(fraction);
        let colour = list_random_item(colours);
        let vehicle = {
          x: x,
          y: y,
          left: left,
          right: right,
          direction: direction,
          pace: pace,
          colour: colour,
          waiting: false,
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
