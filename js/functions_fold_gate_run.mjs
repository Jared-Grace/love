import { functions_fold_sites } from "./functions_fold_sites.mjs";
import { fold_pairs_split } from "./fold_pairs_split.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function functions_fold_gate_run() {
  "Gate: nothing in the repo writes out by hand what a function here already does, and nothing here is two functions writing out each other. Throws so the dispatcher seam exits nonzero.";
  "It holds at none rather than at a baseline, and it can, because the first kind has a mechanical repair that preserves behaviour and the second was cleared before this was written - so the answer is never a wider list.";
  "A one-time sweep was tried first and did not hold. Forty-two sites were folded flat, and a single afternoon of ordinary work by other hands put one back - which is the argument for a gate rather than a habit: nobody can remember to re-ask, and whoever writes a new site is exactly the person who does not know the function already exists.";
  "One walk of every function answers both, so both are asked here rather than in a gate each. The walk is the whole cost; splitting what it found is free.";
  let sites = await functions_fold_sites();
  let split = fold_pairs_split(sites);
  let soundable = property_get(split, "soundable");
  let mutual = property_get(split, "mutual");
  for (let site of soundable) {
    let x = property_get(site, "x");
    let f = property_get(site, "f");
    console.log("hand-written  " + x + "  inside  " + f);
  }
  for (let pair of mutual) {
    console.log("each other's definition  " + list_join_comma(pair));
  }
  console.log("hand-written bodies: " + soundable.length);
  console.log("pairs defining each other: " + mutual.length);
  let twinned = list_empty_not_is(mutual);
  if (twinned) {
    let replace = fn_name("function_replace");
    let complaint = text_combine_multiple([
      "fold gate: ",
      mutual.length,
      " pairs of functions are each other's definition - keep whichever name reads better, move any assert or prose the other carried onto it, and point everything at it with ",
      replace,
    ]);
    throw new Error(complaint);
  }
  let dirty = list_empty_not_is(soundable);
  if (dirty) {
    let repair = fn_name("functions_fold_repair");
    let complaint2 = text_combine_multiple([
      "fold gate: ",
      soundable.length,
      " places write out a function's body instead of calling it - ",
      repair,
      " folds every one of them and commits each under its own name",
    ]);
    throw new Error(complaint2);
  }
  let r = {
    soundable: 0,
    mutual: 0,
  };
  return r;
}
