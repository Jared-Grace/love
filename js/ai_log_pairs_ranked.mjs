import { property_count_add } from "./property_count_add.mjs";
import { ai_log_step_name } from "./ai_log_step_name.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function ai_log_pairs_ranked(entries) {
  "Which step follows which, counted, most often first - the reading that says what to compose next.";
  "One conversation at a time, because that is the difference between a habit and an accident. A dozen of these run at once and their lines interleave in the file, so read straight through, the step after any given one is usually a stranger's.";
  "A step following itself is left out. That is a loop checking on something over and over, and a command that does a thing twice is a loop, not a composite.";
  let last = {};
  let counts = {};
  for (let entry of entries) {
    ("The earliest lines were written before the conversation was noted on each");
    ("one. They are passed over rather than pooled together, because pooling them");
    ("would braid every conversation of those days into one and manufacture");
    ("pairings nobody ran.");
    let noted = property_exists(entry, "session");
    if (not(noted)) {
      continue;
    }
    let session = property_get(entry, "session");
    let step = ai_log_step_name(entry);
    let seen = property_exists(last, session);
    if (seen) {
      let before = property_get(last, session);
      let repeat = equal(before, step);
      if (not(repeat)) {
        let arrow = text_combine(before, " then ");
        let key = text_combine(arrow, step);
        property_count_add(counts, key, 1);
      }
    }
    property_set(last, session, step);
  }
  let pairs = [];
  let keys = Object.keys(counts);
  for (let key of keys) {
    let times = property_get(counts, key);
    list_add(pairs, {
      pair: key,
      times,
    });
  }
  function lambda_rank(record) {
    let times = property_get(record, "times");
    let ordered = subtract(0, times);
    return ordered;
  }
  list_sort_number_mapper(pairs, lambda_rank);
  return pairs;
}
