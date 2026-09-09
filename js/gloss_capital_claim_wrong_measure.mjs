import { gloss_store_capital_claim_is_or_null } from "./gloss_store_capital_claim_is_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_chapters_capital_claim_wrong } from "./gloss_chapters_capital_claim_wrong.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
export async function gloss_capital_claim_wrong_measure() {
  "How many explanations in each gloss store assert the word is written with a capital letter, how many of those sit on a word carrying no capital at all, and which words and wordings those were, beside the stores that could not be read.";
  "A store that is not on the disk is reported as missing rather than counted as clean. These stores live on a drive that is sometimes not mounted, and a sweep answering nothing found there would hand back a nought - which reads exactly like a store somebody has finished repairing. Not looked at and nothing wrong are different answers and must not share one.";
  "A store with no reader for its language is left out of the answer altogether rather than reported as nought, because nought would say it had been looked at.";
  "A plain count rather than a share, unlike the sweep for pointers that lead nowhere. A wording claiming a capital the word does not wear is false the moment it is written, and there is no honest amount of it, so there is nothing for the count to be a share of.";
  async function store_ask(fn) {
    let claim_is = gloss_store_capital_claim_is_or_null(fn);
    let unread = null_is(claim_is);
    if (unread) {
      return null;
    }
    let found = await gloss_chapters_capital_claim_wrong(fn, claim_is);
    return found;
  }
  let asked = await gloss_stores_offenders_generic(store_ask);
  let answers = property_get(asked, "counts");
  let missing = property_get(asked, "missing");
  function answer_read_is(answer) {
    let found = property_get(answer, "found");
    let read = null_not_is(found);
    return read;
  }
  let readable = list_filter(answers, answer_read_is);
  function count_make(answer) {
    let store = property_get(answer, "store");
    let found = property_get(answer, "found");
    let claiming = property_get(found, "claiming");
    let wrong = property_get(found, "wrong");
    let words = property_get(found, "words");
    let wordings = property_get(found, "wordings");
    let count = {
      store,
      claiming,
      wrong,
      words,
      wordings,
    };
    return count;
  }
  let counts = list_map(readable, count_make);
  let r = {
    counts,
    missing,
  };
  return r;
}
