import { arguments_assert } from "./arguments_assert.mjs";
import { functions_fold_sites } from "./functions_fold_sites.mjs";
import { property_get } from "./property_get.mjs";
import { list_join } from "./list_join.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_map } from "./list_map.mjs";
import { less_than } from "./less_than.mjs";
export async function functions_fold_pairs_mutual() {
  "Two functions that are each other's definition - each one folds into the other, which is only true when both write out the same work.";
  "This is the one kind of duplicate the question about shapes cannot ask. Shape keeps the whole body, so a single line of ceremony in one twin and not the other makes the two come out unlike and the pair goes unreported. Folding filters that ceremony away on purpose, which is exactly why it sees them - so the two readings are complements rather than one checking the other. A real pair sat here unnoticed until this was written: everything in a list from one place onward, spelled twice, alike apart from one line asserting how many arguments were named.";
  "Each pair is given once. Both directions are true by construction, and reporting both would read as two findings where there is one.";
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
  let pairs = [];
  for (let site of sites) {
    let x = property_get(site, "x");
    let f = property_get(site, "f");
    let reversed = [f, x];
    let key = list_join(reversed, " ");
    let mutual = list_includes(keys, key);
    let once = less_than(x, f);
    if (mutual && once) {
      list_add(pairs, [x, f]);
    }
  }
  return pairs;
}
