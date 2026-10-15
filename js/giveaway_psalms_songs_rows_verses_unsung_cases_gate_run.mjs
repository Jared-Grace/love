import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { giveaway_psalms_songs_rows_verses_unsung } from "./giveaway_psalms_songs_rows_verses_unsung.mjs";
import { giveaway_psalms_songs_rows_verses_unsung_cases } from "./giveaway_psalms_songs_rows_verses_unsung_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function giveaway_psalms_songs_rows_verses_unsung_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the coverage judging answers every case in its corpus the way the case says - which verses of a chapter the sung recordings cover, and which runs of it nothing covers. Throws so the dispatcher seam exits nonzero.");
  ("★ THE GATE IS ON THE JUDGING AND NOT ON THE SINGING. A psalm with verses nobody has sung yet is not a fault, it is the ordinary state of most of the book, so nothing here fails the build over a gap. What would fail the build is the judging getting a gap wrong, which is what decides where a recording is still needed and which box may be given away as finished.");
  ("The chapter lengths come from the cases rather than from the text of the psalms, so this waits on no machine and can be run with nothing to reach.");
  function answer(one_case) {
    let rows = property_get(one_case, "rows");
    let verse_last_by_chapter = property_get(one_case, "verse_last_by_chapter");
    let report = giveaway_psalms_songs_rows_verses_unsung(
      rows,
      verse_last_by_chapter,
    );
    return report;
  }
  let cases = giveaway_psalms_songs_rows_verses_unsung_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "report",
    "why",
    "which verses of a psalm the singing covers",
  );
  return r;
}
