import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_sidewalk_depth } from "./bless_sidewalk_depth.mjs";
export function bless_block_sidewalk_depth(r) {
  arguments_assert(arguments, 1);
  ("How wide the block is, is the row's own length and nothing has to be taken off it. It used to be the fronts plus one trailing alley, less that alley again - an arithmetic that only ever made sense because the fronts were counted a stride at a time and the last stride carried a gap nobody wanted.");
  let span = property_get(r, "span");
  let alleys = property_get(r, "alleys");
  let walls = property_get(r, "walls");
  let buildings = property_get(r, "buildings");
  ("Where the ROAD begins is read here too, because the road starts exactly where the pavement stops and there is nowhere else that knows both of those. Kept anywhere else it would be the pavement line plus the pavement depth worked out a second time, and the day the pavement grows a row the road would be laid across it.");
  ("The road is on the SOUTH side of the pavement, so the order walking north off it is road, pavement, yard, front door. That is the order somebody arrives in, and it is the order that lets the player see the whole street at once: the fronts stand furthest from the camera and nothing wide is drawn in front of them.");
  let sidewalk_y = property_get(r, "sidewalk_y");
  let yard_y = property_get(r, "yard_y");
  let yard_depth = property_get(r, "yard_depth");
  let block_width = span;
  let sidewalk_depth = bless_sidewalk_depth();
  let road_y = add(sidewalk_y, sidewalk_depth);
  let road_depth = bless_road_depth();
  let r2 = {
    alleys,
    walls,
    buildings,
    yard_y,
    yard_depth,
    sidewalk_y,
    block_width,
    sidewalk_depth,
    road_y,
    road_depth,
  };
  return r2;
}
