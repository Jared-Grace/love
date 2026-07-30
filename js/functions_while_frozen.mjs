import { functions_code_offenders_generic } from "./functions_code_offenders_generic.mjs";
import { js_code_while_frozen_conditions } from "./js_code_while_frozen_conditions.mjs";
export async function functions_while_frozen() {
  "Every function holding a loop that can never stop, with the conditions it waits forever on";
  "The repo's ordinary tidying lifts a piece of an expression out into a name above it, which changes nothing anywhere except here: a loop asks its condition once each time round, so lifting it out takes the answer before the work that would have changed it and then waits on that answer forever. Nothing about the code looks wrong, and the only sign is that something never comes back";
  "This has happened here once. It landed in a fold and hung the gate corpus, so every Claude's whole gate run stopped returning at once, runs piled up until the machine was at full load, and it read as the gates having got slow rather than as one of them never finishing. Finding it took timing every gate and then every example; the repair was one line";
  let offenders = await functions_code_offenders_generic(
    js_code_while_frozen_conditions,
    "frozen",
  );
  return offenders;
}
