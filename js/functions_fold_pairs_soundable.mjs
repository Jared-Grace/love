import { arguments_assert } from "./arguments_assert.mjs";
import { functions_fold_sites } from "./functions_fold_sites.mjs";
import { fold_pairs_split } from "./fold_pairs_split.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_fold_pairs_soundable() {
  "The fold sites it is safe to apply without a person reading them first.";
  "A pair that appears both ways round is left out. Two functions each of which folds into the other are not one function hand-written inside another - they are two definitions of the same thing, and folding either direction leaves each one calling the other, which is a name that never finishes.";
  arguments_assert(arguments, 0);
  let sites = await functions_fold_sites();
  let split = fold_pairs_split(sites);
  let soundable = property_get(split, "soundable");
  return soundable;
}
