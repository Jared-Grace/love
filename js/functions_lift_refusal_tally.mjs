import { arguments_assert } from "./arguments_assert.mjs";
import { functions_lift_refusal_rows } from "./functions_lift_refusal_rows.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
export async function functions_lift_refusal_tally() {
  arguments_assert(arguments, 0);
  ("How many functions written inside an oversize one are held there by each reason, commonest first.");
  ("This is what counting them was for. One reason standing far above the rest is a category worth naming and making an exception of, because naming it takes a whole shape out of the work at once; reasons spread evenly are not a category at all, and the difference between those two cannot be seen by reading the rows one at a time.");
  ("A function turned down for two reasons at once is counted under both. The question is how much of the repo each shape accounts for, not how the functions divide up between shapes, and a shape that shares its ground with another is still the whole of its own ground.");
  let rows = await functions_lift_refusal_rows();
  let listed = list_map_property(rows, "reasons");
  let flat = list_flat(listed);
  let ranked = list_tally_ranked(flat);
  return ranked;
}
