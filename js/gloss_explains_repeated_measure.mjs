import { gloss_chapters_explains_repeated } from "./gloss_chapters_explains_repeated.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { divide } from "./divide.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { list_map } from "./list_map.mjs";
export async function gloss_explains_repeated_measure() {
  "How much of each gloss store hands one word's explanation to another word in the same chapter as well, given as how many out of every thousand explanations stand in a repeated group - beside the plain counts it was worked out from, and which stores could not be read at all.";
  "A store that is not on the disk is reported as missing rather than counted as clean. These stores live on a drive that is sometimes not mounted, and a sweep that answered nothing found there would hand back a zero - which reads exactly like a store somebody has finished repairing. Not looked at and nothing wrong are different answers and must not share one.";
  "Every word standing in a repeated group is counted, not the wordings. A sentence handed to eight words is eight words the reader learns nothing from, and it is eight explanations that have to be written before that is no longer true, so eight is the honest size of the work. Counting the wording once would say one.";
  "The share is what the ratchet is kept on and the counts travel with it because a share on its own cannot be checked. Out of a thousand rather than a hundred, because a hundredth of these stores is several hundred explanations and a gate that cannot see a chapter's worth of repair is not watching the work being done.";
  "A store holding nothing at all is nought rather than a division by nothing, which would be written into the record as a number no comparison can read.";
  async function store_ask(fn) {
    let found = await gloss_chapters_explains_repeated(fn);
    return found;
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
    let found = property_get(answer, "found");
    let offenders = property_get(found, "offenders");
    let entries = property_get(found, "entries");
    let repeated = list_map_sum(offenders, repeated_chapter_sites);
    let empty = equal(entries, 0);
    let share = 0;
    if (not(empty)) {
      let part = divide(repeated, entries);
      share = multiply_round(part, 1000);
    }
    let count = {
      store,
      share,
      repeated,
      entries,
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
