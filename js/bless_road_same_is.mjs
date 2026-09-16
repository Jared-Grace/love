import { arguments_assert } from "./arguments_assert.mjs";
import { bless_road_depth } from "./bless_road_depth.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { and } from "./and.mjs";
export function bless_road_same_is(row, other) {
  arguments_assert(arguments, 2);
  ("Whether two rows of road belong to the SAME road.");
  ("The world has more than one street in it, and every rule about traffic is really a rule");
  ("about one road - the one being crossed, or the one being driven along. Without this, a");
  ("car two streets away counts as traffic, and a walker waits at the kerb for something");
  ("they could not see and would never meet.");
  ("A road is its rows and they touch, so two rows are the same road when they are closer");
  ("together than a whole road is deep. Any two rows of one road are at most one apart and a");
  ("road is two deep, so the test is exact rather than a tolerance - and it stays exact if");
  ("the depth ever changes, which is the reason the depth is asked for instead of spelled.");
  let deep = bless_road_depth();
  let low = subtract(row, deep);
  let high = add(row, deep);
  let below = greater_than(other, low);
  let above = less_than(other, high);
  let same = and(below, above);
  return same;
}
