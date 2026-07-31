import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_fold_sites } from "./functions_fold_sites.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_join } from "./list_join.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function functions_fold_pairs_soundable() {
  "The fold sites it is safe to apply without a person reading them first.";
  "A pair that appears both ways round is dropped. Two functions each of which folds into the other are not one function hand-written inside another - they are two definitions of the same thing, and folding either direction leaves each one calling the other, which is a name that never finishes. Which of the two names survives is a judgment about what the thing is called, so it is left to whoever is reading.";
  arguments_assert(arguments, 0);
  let sites = await functions_fold_sites();
  function key_of(site) {
    let x = property_get(site, "x");
    let f = property_get(site, "f");
    let pair = [x, f];
    let key = list_join(pair, " ");
    return key;
  }
  let keys = list_map(sites, key_of);
  function one_way_is(site) {
    let x = property_get(site, "x");
    let f = property_get(site, "f");
    let reversed = [f, x];
    let key = list_join(reversed, " ");
    let mutual = list_includes(keys, key);
    let one_way = not(mutual);
    return one_way;
  }
  let soundable = list_filter(sites, one_way_is);
  return soundable;
}
