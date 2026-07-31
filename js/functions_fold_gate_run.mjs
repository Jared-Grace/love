import { functions_fold_pairs_soundable } from "./functions_fold_pairs_soundable.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_fold_gate_run() {
  "Gate: nothing in the repo writes out by hand what a function here already does. Throws so the dispatcher seam exits nonzero.";
  "It holds at none rather than at a baseline, and it can, because every site it names has a mechanical repair that preserves behaviour - so the answer is never a judgment somebody has to make and never a wider list. That is the whole difference between this and the gate on duplicate names, where collapsing a pair might be wrong.";
  "A one-time sweep was tried first and did not hold. Forty-two sites were folded flat, and a single afternoon of ordinary work by other hands put one back - which is the argument for a gate rather than a habit: nobody can remember to re-ask, and the writer of a new site is exactly the person who does not know the function already exists.";
  "Pairs that fold both ways round are left out here, because they are two definitions of one thing rather than one written twice, and folding either way leaves each calling the other.";
  let sites = await functions_fold_pairs_soundable();
  for (let site of sites) {
    let x = property_get(site, "x");
    let f = property_get(site, "f");
    console.log("hand-written  " + x + "  inside  " + f);
  }
  console.log("hand-written bodies: " + sites.length);
  let dirty = list_empty_not_is(sites);
  if (dirty) {
    let repair = fn_name("functions_fold_repair");
    let complaint = text_combine_multiple([
      "fold gate: ",
      sites.length,
      " places write out a function's body instead of calling it - ",
      repair,
      " folds every one of them and commits each under its own name",
    ]);
    throw new Error(complaint);
  }
  let r = {
    sites: 0,
  };
  return r;
}
