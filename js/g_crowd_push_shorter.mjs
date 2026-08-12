import { g_direction_sides } from "./g_direction_sides.mjs";
import { list_get } from "./list_get.mjs";
import { g_crowd_push_chain } from "./g_crowd_push_chain.mjs";
import { null_is } from "./null_is.mjs";
import { and } from "./and.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
export function g_crowd_push_shorter(
  land_index,
  npc_index,
  kept_index,
  tile,
  direction,
) {
  "which way the crowd should shuffle to let a walk coming this way through, and who has to shuffle - the shorter of the two runs to either side, or nothing when neither side can give.";
  "The shorter run is taken because it is the fewest people disturbed, and because it is the nearer edge of the crowd - so a crowd standing across a way opens toward whichever edge of it is closer, which is what makes the opening look like the crowd making room rather than being shoved.";
  let sides = g_direction_sides(direction);
  let side_a = list_get(sides, 0);
  let side_b = list_get(sides, 1);
  let chain_a = g_crowd_push_chain(
    land_index,
    npc_index,
    kept_index,
    tile,
    side_a,
  );
  let chain_b = g_crowd_push_chain(
    land_index,
    npc_index,
    kept_index,
    tile,
    side_b,
  );
  let none_a = null_is(chain_a);
  let none_b = null_is(chain_b);
  if (and(none_a, none_b)) {
    return null;
  }
  if (none_a) {
    let push_b = {
      side: side_b,
      chain: chain_b,
    };
    return push_b;
  }
  if (none_b) {
    let push_a = {
      side: side_a,
      chain: chain_a,
    };
    return push_a;
  }
  let size_a = list_size(chain_a);
  let size_b = list_size(chain_b);
  let b_shorter = less_than(size_b, size_a);
  if (b_shorter) {
    let push_nearer = {
      side: side_b,
      chain: chain_b,
    };
    return push_nearer;
  }
  let push = {
    side: side_a,
    chain: chain_a,
  };
  return push;
}
