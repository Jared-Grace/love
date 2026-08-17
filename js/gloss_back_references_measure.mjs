import { gloss_chapters_back_references } from "./gloss_chapters_back_references.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_size } from "./property_list_size.mjs";
export async function gloss_back_references_measure() {
  "How many explanations in each gloss store point the reader further up instead of saying the thing itself, and which stores could not be read at all.";
  "A store that is not on the disk is reported as missing rather than counted as clean. The stores live on a drive that is sometimes not mounted, and a sweep that answered nothing found there would hand back a zero - which reads exactly like a store somebody has finished repairing. Not looked at and nothing wrong are different answers and must not share one.";
  async function store_ask(fn) {
    let found = await gloss_chapters_back_references(fn);
    let offenders = property_get(found, "offenders");
    return offenders;
  }
  let asked = await gloss_stores_offenders_generic(store_ask);
  let answers = property_get(asked, "counts");
  let missing = property_get(asked, "missing");
  function pointing_size(chapter) {
    let size = property_list_size(chapter, "pointing");
    return size;
  }
  function count_make(answer) {
    let store = property_get(answer, "store");
    let offenders = property_get(answer, "found");
    let sites = list_map_sum(offenders, pointing_size);
    let count = {
      store,
      sites,
    };
    return count;
  }
  let counts = list_map(answers, count_make);
  let r = {
    counts,
    missing,
  };
  return r;
}
