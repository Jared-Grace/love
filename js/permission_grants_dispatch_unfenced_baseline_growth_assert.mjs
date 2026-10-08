import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { permission_grants_dispatch_unfenced_baseline_path } from "./permission_grants_dispatch_unfenced_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function permission_grants_dispatch_unfenced_baseline_growth_assert(
  known,
) {
  "Refuse to record an offender the baseline did not already hold. A ratchet that can be rewritten in both directions is not a ratchet, and the rewrite would be reached for at exactly the moment the gate went red, which is the moment it was doing its job.";
  "The first seeding has no file to compare against and is allowed, and so is any rewrite that only drops names.";
  let path = permission_grants_dispatch_unfenced_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    text_combine_multiple([
      "recording these as known would bless a new offence rather than repair it - a granted function takes arguments and reaches a dispatcher with no fence in front - so one standing approval lets an argument choose which repo function runs - take the grant away with ",
      fn_name("permission_grant_remove"),
      " or fix the name inside the function; only if you read the chain and the name is fixed after all run the baseline writer",
    ]),
  );
}
