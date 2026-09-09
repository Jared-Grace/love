import { gloss_chapters_explains_repeated } from "./gloss_chapters_explains_repeated.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { property_get } from "./property_get.mjs";
import { share_out_of_thousand } from "./share_out_of_thousand.mjs";
import { list_map } from "./list_map.mjs";
export async function gloss_explains_repeated_measure() {
  "How much of each gloss store hands one explanation to more than one word, given as two numbers out of every thousand explanations - one for a wording worn by genuinely different words and one for a wording handed to the same word met again - beside the plain counts they were worked out from, and which stores could not be read at all.";
  "A store that is not on the disk is reported as missing rather than counted as clean. These stores live on a drive that is sometimes not mounted, and a sweep that answered nothing found there would hand back a zero - which reads exactly like a store somebody has finished repairing. Not looked at and nothing wrong are different answers and must not share one.";
  "The two are kept apart because only one of them is a fault. A wording worn by different words teaches the reader nothing about the word in front of them, and every one of them has to be written again. The same word told the same thing twice in a chapter is a different question altogether and may well be the right way to write it, so a single number covering both would go red at good writing and would hide the bad writing behind it.";
  "Every word standing in a repeated group is counted, not the wordings. A sentence handed to eight words is eight words the reader learns nothing from, and it is eight explanations that have to be written before that is no longer true, so eight is the honest size of the work. Counting the wording once would say one.";
  "The shares are what the ratchet is kept on and the counts travel with them because a share on its own cannot be checked.";
  async function store_ask(fn) {
    let found = await gloss_chapters_explains_repeated(fn);
    return found;
  }
  let asked = await gloss_stores_offenders_generic(store_ask);
  let answers = property_get(asked, "counts");
  let missing = property_get(asked, "missing");
  function count_make(answer) {
    let store = property_get(answer, "store");
    let found = property_get(answer, "found");
    let entries = property_get(found, "entries");
    let same = property_get(found, "same");
    let across = property_get(found, "across");
    let across_share = share_out_of_thousand(across, entries);
    let same_share = share_out_of_thousand(same, entries);
    let count = {
      store,
      across_share,
      same_share,
      across,
      same,
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
