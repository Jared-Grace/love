import { gloss_chapters_explains_repeated } from "./gloss_chapters_explains_repeated.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_map } from "./list_map.mjs";
export async function gloss_explains_repeated_measure() {
  "How many word explanations in each gloss store were handed to a word after some other word in the same chapter had already been given them word for word, and which stores could not be read at all.";
  "A store that is not on the disk is reported as missing rather than counted as clean. These stores live on a drive that is sometimes not mounted, and a sweep that answered nothing found there would hand back a zero - which reads exactly like a store somebody has finished repairing. Not looked at and nothing wrong are different answers and must not share one.";
  "Every word standing in a repeated group is counted, not the wordings. A sentence handed to eight words is eight words the reader learns nothing from, and it is eight explanations that have to be written before that is no longer true, so eight is the honest size of the work. Counting the wording once would say one.";
  async function store_ask(fn) {
    let found = await gloss_chapters_explains_repeated(fn);
    let offenders = property_get(found, "offenders");
    return offenders;
  }
  let asked = await gloss_stores_offenders_generic(store_ask);
  let answers = property_get(asked, "counts");
  let missing = property_get(asked, "missing");
  function repeated_row_count(row) {
    let count = property_get(row, "count");
    return count;
  }
  function repeated_chapter_sites(chapter) {
    let repeated = property_get(chapter, "repeated");
    let sites = list_map_sum(repeated, repeated_row_count);
    return sites;
  }
  function count_make(answer) {
    let store = property_get(answer, "store");
    let offenders = property_get(answer, "found");
    let sites = list_map_sum(offenders, repeated_chapter_sites);
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
