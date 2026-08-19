import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_size_ceiling } from "./functions_work_size_ceiling.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { property_get } from "./property_get.mjs";
import { property_greater_than } from "./property_greater_than.mjs";
export function functions_work_excuse_bulk_is(reading) {
  "Whether the one shape set aside inside a body carries that body: what is left over would pass the size ceiling on its own, and the shape is more of the body than everything else put together.";
  "Both excuses ask exactly this before they ask anything of their own, and the walk says so in its own words - the two things it needs are the same two the table asks. Written out twice, one of them could be tightened and the other left as it was, and nothing anywhere would say so.";
  "Set the shape aside and what is left must be a function anybody would accept, so what is left over is asked to pass the same ceiling. And the shape has to be the bulk of it, or the body is an ordinary one that happens to contain a table or a loop.";
  "No number of its own. It asks the one ceiling, which is why lowering that ceiling tightens every excuse at the same moment instead of leaving a second number behind still forgiving what the first no longer does.";
  arguments_assert(arguments, 1);
  let ceiling = functions_work_size_ceiling();
  let outside = property_get(reading, "outside");
  let rest_small_is = less_than_equal(outside, ceiling);
  if (not(rest_small_is)) {
    return false;
  }
  let mostly_is = property_greater_than(reading, "inside", outside);
  return mostly_is;
}
