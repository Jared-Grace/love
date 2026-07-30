import { functions_while_frozen } from "./functions_while_frozen.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map } from "./list_map.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_while_frozen_gate_run() {
  "QA gate: no loop waits forever on a condition that was settled before it started";
  "A loop asks its condition once each time round. The repo's ordinary tidying lifts a piece of an expression out into a name above it, which is safe everywhere else because the piece is read once either way - here it takes the answer before the work that would have changed it, and the loop then waits on that answer forever";
  "It is the worst way for this repo to break, because it does not break: the code parses, reads well, and passes review, and the only sign is that something never comes back. When it landed in a fold it hung the gate corpus, so every Claude's whole gate run stopped returning at once and the machine sat at full load while it read as the gates having got slow. Finding it took timing every gate and then every example, and the repair was one line";
  "The reader only speaks where never stopping can be shown rather than suspected, so there is nothing to weigh up and this asks for zero rather than for less than last time. The repair is to ask the question again at the end of the body";
  "Throws so the dispatcher seam exits nonzero";
  let offenders = await functions_while_frozen();
  for (let offender of offenders) {
    let f_name = property_get(offender, "f_name");
    let frozen = property_get(offender, "frozen");
    function condition_of(told) {
      let condition = property_get(told, "condition");
      return condition;
    }
    let conditions = list_map(frozen, condition_of);
    let joined = list_join_comma(conditions);
    console.log("WAITS FOREVER  " + f_name + "  -> " + joined);
  }
  console.log("\noffenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "stuck loop gate: " +
      offenders.length +
      " functions hold a loop whose condition can never change - ask it again at the end of the body";
    throw new Error(message);
  }
  let r = {
    offenders: 0,
  };
  return r;
}
