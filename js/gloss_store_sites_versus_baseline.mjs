import { property_get } from "./property_get.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function gloss_store_sites_versus_baseline(counts, recorded) {
  "What changed since a record of how many places in each gloss store still carry some named fault was written.";
  "It knows nothing about which fault is being counted, and that is the whole of what it is for. Two ratchets over these stores ask different questions - how many explanations point the reader further up instead of saying the thing, and how many hand one word's wording to another word as well - and both arrive here as the same pair of numbers per store. One comparison and two questions is one unit; a second copy would be a second answer about what has newly gone wrong, and each gate rests on refusing exactly what its writer declines to bless.";
  "added is a store carrying more of them than the record holds - the gate refuses it, because the one thing a ratchet like this exists to stop is a fresh pass writing back what a repair just took out.";
  "stale is a store carrying fewer - the gate refuses that too. A count that has fallen and a record that still names the old number is slack, and slack is what lets a word that was repaired go back to being wrong without anything noticing. Rewriting the record is what banks the repair.";
  "A store the record has never heard of is read as nought rather than skipped, so the first store to be authored is measured against zero the way it should be.";
  let added = [];
  let stale = [];
  function count_read(count) {
    let store = property_get(count, "store");
    let sites = property_get(count, "sites");
    let held = list_find_property_or_null(recorded, "store", store);
    let unheld = null_is(held);
    let before = 0;
    if (not(unheld)) {
      before = property_get(held, "sites");
    }
    let change = {
      store,
      sites,
      recorded: before,
    };
    let grew = greater_than(sites, before);
    if (grew) {
      list_add(added, change);
      return;
    }
    let fell = greater_than(before, sites);
    if (fell) {
      list_add(stale, change);
    }
  }
  each(counts, count_read);
  let r = {
    added,
    stale,
  };
  return r;
}
