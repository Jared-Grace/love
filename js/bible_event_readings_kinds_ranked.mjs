import { bible_gathered_readings_all } from "./bible_gathered_readings_all.mjs";
import { bible_event_reading_kinds } from "./bible_event_reading_kinds.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
export async function bible_event_readings_kinds_ranked() {
  "Every reading of a gathered Bible event, together with the kinds those readings carry tallied and ranked commonest first.";
  ("The two are answered together because neither measurement over the corpus wants one without the other: the ranking says which kind to consider next, and the readings are what any coverage of that kind has to be counted against. Asking them apart would read the whole corpus twice to answer one question.");
  ("A kind is counted once for every reading that carries it, so the count is how many events the kind names and not how many words were written. That is the number a mechanic built for that kind would buy.");
  let readings = await bible_gathered_readings_all();
  let kinds_all = list_map_concat_multiple(readings, bible_event_reading_kinds);
  let ranked = list_tally_ranked(kinds_all);
  let r = { readings, ranked };
  return r;
}
