import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { less_than } from "./less_than.mjs";
export function fold_pairs_split(sites) {
  "Sorts fold sites into the two kinds they are, which want opposite answers.";
  "A site appearing only one way round is one function's body written out inside another, and folding it is mechanical - the work is already named, and the call replaces the copy. A site appearing both ways round is two definitions of one thing, and folding either direction leaves each calling the other, so the answer there is to keep one name and point everything at it.";
  "Both are read off one pass over the sites rather than two, because the reading costs a walk of every function in the repo and the gate wants both answers at once.";
  "A pair that goes both ways is given once, under the name that sorts first, since both directions are true by construction and two entries would read as two findings where there is one.";
  arguments_assert(arguments, 1);
  function key_of(site) {
    let x = property_get(site, "x");
    let f = property_get(site, "f");
    let pair = [x, f];
    let key = list_join(pair, " ");
    return key;
  }
  let keys = list_map(sites, key_of);
  let soundable = [];
  let mutual = [];
  for (let site of sites) {
    let x = property_get(site, "x");
    let f = property_get(site, "f");
    let reversed = [f, x];
    let key = list_join(reversed, " ");
    let both_ways = list_includes(keys, key);
    if (both_ways) {
      let once = less_than(x, f);
      if (once) {
        list_add(mutual, [x, f]);
      }
    } else {
      list_add(soundable, site);
    }
  }
  let split = {
    soundable,
    mutual,
  };
  return split;
}
