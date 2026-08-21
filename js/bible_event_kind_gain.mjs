import { arguments_assert } from "./arguments_assert.mjs";
import { bible_event_reading_kinds } from "./bible_event_reading_kinds.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_includes } from "./list_includes.mjs";
export function bible_event_kind_gain(readings, kind) {
  "$plain readings";
  "$plain kind";
  "How many of these readings carry the named kind - what building a mechanic for it would buy, counted against whatever set of readings is handed in.";
  arguments_assert(arguments, 2);
  ("The readings are handed in rather than gathered here, because the useful question is nearly always asked of the ones STILL UNREACHED rather than of the whole corpus. A count over everything says how common a kind is; a count over what is left says what it is still worth.");
  function reading_carries_is(reading) {
    let kinds = bible_event_reading_kinds(reading);
    let carries = list_includes(kinds, kind);
    return carries;
  }
  let gain = list_filter_size(readings, reading_carries_is);
  return gain;
}
