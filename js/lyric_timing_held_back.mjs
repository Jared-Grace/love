import { less_than_equal } from "./less_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function lyric_timing_held_back(held) {
  arguments_assert(arguments, 1);
  ("$plain held");
  ("Steps the cursor back one line and says which moment of the song to listen again from, or nothing if there is no earlier moment recorded.");
  ("STEPPING BACK LEAVES THE TIME IT STEPPED OVER IN PLACE. A tap that was a little out is corrected by tapping again, which overwrites it; clearing it here would mean that stepping back to check a line and finding it right had thrown it away.");
  ("It hands back a moment rather than moving the player itself, because it is the state of the tapping and knows nothing about a player. A person stepping back nearly always wants to hear that line again, and the caller holding the player is the one who can arrange it.");
  let first = less_than_equal(held.cursor, 0);
  if (first) {
    return null;
  }
  held.cursor = subtract(held.cursor, 1);
  let start = held.starts[held.cursor];
  let untimed = equal(start, null) || equal(start, undefined);
  let r = untimed ? null : start;
  return r;
}
