import { object_property_names } from "./object_property_names.mjs";
import { property_negative } from "./property_negative.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { ai_log_step_name } from "./ai_log_step_name.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function ai_log_triples_ranked(entries) {
  "Which step follows which two, counted, most often first - the reading that says whether a pair is the whole habit or only the middle of a longer one.";
  "It exists because a pair cannot tell a hazard from a repair. Running the gate and then committing reads as the trap the instructions warn about, where the gate stands on the previous commit and answers about work it never saw. It reads exactly the same as an honest repair, where the gate came back red, the fault was fixed, and the commit is that fix. What is run third is the whole difference between those two, and no reading of pairs can reach it.";
  "The rules of the pair reading are kept, because a triple is two pairs. One conversation at a time, since a dozen of these run at once and their lines interleave in the file, so read straight through the step after any given one is usually a stranger's. The earliest lines, written before the conversation was noted on each one, are passed over rather than pooled together, because pooling them would braid every conversation of those days into one and manufacture sequences nobody ran.";
  "A step run again straight after itself is not counted as a step at all here, and the chain closes over it rather than breaking on it. That is one thing being checked on over and over, so the run of it is one step however long it goes; treating each check as its own step would push the real earlier step out of reach and lose the very triples this was written to see.";
  let step_before = {};
  let step_before_that = {};
  let counts = {};
  for (let entry of entries) {
    let noted = property_exists(entry, "session");
    if (not(noted)) {
      continue;
    }
    let session = property_get(entry, "session");
    let step = ai_log_step_name(entry);
    let seen_recent = property_exists(step_before, session);
    if (seen_recent) {
      let recent = property_get(step_before, session);
      let repeat = equal(recent, step);
      if (repeat) {
        continue;
      }
      let seen_earlier = property_exists(step_before_that, session);
      if (seen_earlier) {
        let earlier = property_get(step_before_that, session);
        let key = text_combine_multiple([
          earlier,
          " then ",
          recent,
          " then ",
          step,
        ]);
        property_count_add(counts, key, 1);
      }
      property_set(step_before_that, session, recent);
    }
    property_set(step_before, session, step);
  }
  let triples = [];
  let keys = object_property_names(counts);
  for (let key of keys) {
    let times = property_get(counts, key);
    list_add(triples, {
      triple: key,
      times,
    });
  }
  function lambda_rank(record) {
    let ordered = property_negative(record, "times");
    return ordered;
  }
  list_sort_number_mapper(triples, lambda_rank);
  return triples;
}
