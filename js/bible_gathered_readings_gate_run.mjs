import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { equal_not } from "./equal_not.mjs";
import { bible_gathered_events_all } from "./bible_gathered_events_all.mjs";
import { bible_gathered_readings_all } from "./bible_gathered_readings_all.mjs";
import { bible_event_kinds } from "./bible_event_kinds.mjs";
import { bible_event_key } from "./bible_event_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_not } from "./list_filter_not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function bible_gathered_readings_gate_run() {
  "Gate: the readings of gathered Bible events line up with the events one for one, and say nothing outside the declared vocabulary of kinds. Throws so the dispatcher seam exits nonzero.";
  "★ THE READING IS THE FALLIBLE HALF, WHICH IS WHY IT IS THE HALF THAT IS GATED. A gathered event only points, so it cannot drift. A reading states what a passage is doing, and it is attached to its event by a key rather than sitting inside it - so the two can silently come apart. Re-cut one event's verses and its key changes, and the reading of it goes on existing, correctly spelled, describing a passage that is no longer there.";
  "THREE THINGS ARE CHECKED, and each catches a different way of coming apart. An event with no reading is a hole in the corpus that a tally would quietly count around. A reading with no event is the stranding just described. A kind outside the vocabulary is the near-enough word - the failure that matters most, because filing an event under a word that almost fits is exactly how the reading stops being a finding and becomes a confirmation.";
  "DUPLICATE KEYS ARE CHECKED TOO, because a key is only an identity while it is unique. Two events with the same references would be the same verses gathered twice, and one reading would then answer for both.";
  "The empty answer is asserted against first. A gate that finds nothing to compare passes, and passing for want of anything to check is the one failure a gate cannot report about itself.";
  let events = await bible_gathered_events_all();
  let readings = await bible_gathered_readings_all();
  list_empty_not_is_assert_json(events, {
    hint: "no gathered Bible events were found at all, so this gate compared nothing; either every gathered span has been removed or the prefix the finder looks for has moved",
  });
  list_empty_not_is_assert_json(readings, {
    hint: "no readings of gathered Bible events were found at all, so this gate compared nothing; either every readings function has been removed or the prefix the finder looks for has moved",
  });
  let event_keys = list_map(events, bible_event_key);
  let event_keys_unique = list_unique(event_keys);
  let keys_count = list_size(event_keys);
  let unique_count = list_size(event_keys_unique);
  let keys_all_unique = equal(keys_count, unique_count);
  let duplicated = [];
  if (not(keys_all_unique)) {
    function key_duplicated_is(key) {
      function same_is(other) {
        let same = equal(other, key);
        return same;
      }
      let left = list_filter_size(event_keys, same_is);
      let duplicate = equal_not(left, 1);
      return duplicate;
    }
    let repeated = list_filter(event_keys_unique, key_duplicated_is);
    function each_repeated(key) {
      list_add(duplicated, key);
    }
    each(repeated, each_repeated);
  }
  list_empty_is_assert_json(duplicated, {
    hint: "two gathered events point at exactly the same verses, so one key names both and a reading cannot say which it is about; the same verses were gathered twice under two titles",
  });
  function reading_key(reading) {
    let key = property_get(reading, "key");
    return key;
  }
  let reading_keys = list_map(readings, reading_key);
  function event_key_unread_is(key) {
    let read = list_includes(reading_keys, key);
    return read;
  }
  let unread = list_filter_not(event_keys, event_key_unread_is);
  list_empty_is_assert_json(unread, {
    hint: "a gathered Bible event has no reading, so nothing says what that passage is doing and every tally counts around it; add a line for it in the readings function for its book",
  });
  function reading_key_gathered_is(key) {
    let gathered = list_includes(event_keys, key);
    return gathered;
  }
  let stranded = list_filter_not(reading_keys, reading_key_gathered_is);
  list_empty_is_assert_json(stranded, {
    hint: "a reading names verses that no gathered event points at; either the event was re-cut and its key moved, or the key was mistyped - compare it against the gathered span for that chapter",
  });
  function kind_name(kind) {
    let name = property_get(kind, "name");
    return name;
  }
  let list = bible_event_kinds();
  let declared = list_map(list, kind_name);
  function kinds_of(reading) {
    let kinds = property_get(reading, "kinds");
    return kinds;
  }
  let list2 = list_map_concat_multiple(readings, kinds_of);
  let kinds_used = list_unique(list2);
  function kind_declared_is(kind) {
    let is = list_includes(declared, kind);
    return is;
  }
  let undeclared = list_filter_not(kinds_used, kind_declared_is);
  list_empty_is_assert_json(undeclared, {
    hint: "a reading uses a kind the vocabulary does not declare; if the word is right, add it to the vocabulary on purpose with what it means - never file the event under a near-enough word that is already there",
    declared,
  });
  function kind_used_is(kind) {
    let used = list_includes(kinds_used, kind);
    return used;
  }
  let unused = list_filter_not(declared, kind_used_is);
  let r = {
    events: list_size(events),
    readings: list_size(readings),
    kinds_declared: list_size(declared),
    kinds_used: list_size(kinds_used),
    kinds_declared_but_unused: unused,
  };
  return r;
}
