import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bless_blocks_road_shut_keys } from "./bless_blocks_road_shut_keys.mjs";
import { g_coordinates_key } from "./g_coordinates_key.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { list_filter } from "./list_filter.mjs";
export function bless_world_on_foot(world) {
  arguments_assert(arguments, 1);
  ("The street as somebody WALKING may use it: the same ground with the shut road taken out");
  ("of it, so that a way worked out over this one never runs down the middle of a lane.");
  ("It is how the player is kept out of the traffic, and the way it does it is the point. The");
  ("player is not stopped at the kerb, not warned, and not hit; the road simply is not");
  ("somewhere a route may be drawn through, so the route that comes back goes along the");
  ("pavement to the crossing and over. The lawful way is not the rewarded way here - it is");
  ("the ONLY way, and the player never has to be told off for taking another, because there");
  ("was not another to take.");
  ("The crossings stay in, so the street is still one street. Every block has the next one");
  ("below it with a road in between, and a walk from block to block has to get over that");
  ("road somewhere.");
  ("A COPY for the walk rather than a change to the street. The road is still road - cars");
  ("drive on it, it is drawn, it is what the block is built around - and it is only a");
  ("question about walking that it is shut. Taking those squares out of the street itself");
  ("would answer every other question wrongly.");
  ("It hands back the two things a way is worked out from and nothing else, matching what");
  ("the pathfinder is already handed when the crowd is taken out of the way. Two shapes with");
  ("the same job should be the same shape.");
  let coordinates = property_get(world, "coordinates");
  let npcs = property_get(world, "npcs");
  let blocks = property_get(world, "blocks");
  let shut = bless_blocks_road_shut_keys(blocks);
  function walkable_is(tile) {
    let key = g_coordinates_key(tile);
    let open = property_exists_not(shut, key);
    return open;
  }
  let ground = list_filter(coordinates, walkable_is);
  let on_foot = {
    coordinates: ground,
    npcs: npcs,
  };
  return on_foot;
}
