import { gloss_store_pointer_is_or_null } from "./gloss_store_pointer_is_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { gloss_chapters_pointers_dangling } from "./gloss_chapters_pointers_dangling.mjs";
import { gloss_stores_offenders_generic } from "./gloss_stores_offenders_generic.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { share_out_of_thousand } from "./share_out_of_thousand.mjs";
import { list_map } from "./list_map.mjs";
export async function gloss_pointers_dangling_measure() {
  "How often each gloss store sends the reader back to a word met earlier and finds nothing there, given as a count out of every thousand times it sent them, beside the plain counts it was worked out from and the stores that could not be read at all.";
  "A store that is not on the disk is reported as missing rather than counted as clean. These stores live on a drive that is sometimes not mounted, and a sweep that answered nothing found there would hand back a zero - which reads exactly like a store somebody has finished repairing. Not looked at and nothing wrong are different answers and must not share one.";
  "A store with no reader for its language is left out of the answer altogether rather than reported as nought, because nought would say it had been looked at.";
  "A share of the pointers rather than a count of them, because these stores are still being written and every new chapter adds pointers. The share asks the question a reader would ask: of the times I was sent to look further up, how often was nothing up there.";
  async function store_ask(fn) {
    let pointer_is = gloss_store_pointer_is_or_null(fn);
    let unread = null_is(pointer_is);
    if (unread) {
      return null;
    }
    let found = await gloss_chapters_pointers_dangling(fn, pointer_is);
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
    let pointing = property_get(found, "pointing");
    let dangling = property_get(found, "dangling");
    let dangling_share = share_out_of_thousand(dangling, pointing);
    let count = {
      store,
      dangling_share,
      dangling,
      pointing,
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
