import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gate_timings_path } from "./qa_gate_timings_path.mjs";
import { file_days_since_written } from "./file_days_since_written.mjs";
import { null_is } from "./null_is.mjs";
import { qa_gate_timings_stale_days } from "./qa_gate_timings_stale_days.mjs";
import { greater_than } from "./greater_than.mjs";
export async function qa_gate_timings_stale_is() {
  arguments_assert(arguments, 0);
  ("Whether the record of what each gate takes has gone old enough to be worth measuring again.");
  ("A record that cannot be found at all answers yes rather than no. There being nothing to read is the strongest possible case for measuring, and it is the one a quiet no would send away - a repo that had never timed its gates would go on never timing them.");
  ("Nothing fails on a stale answer and nothing should. The shares are merely less even than they could be, which is the state this repo lived in before any of it, so this is read by something that goes and measures and never by a gate.");
  let path = qa_gate_timings_path();
  let days = await file_days_since_written(path);
  let missing = null_is(days);
  if (missing) {
    return true;
  }
  let allowed = qa_gate_timings_stale_days();
  let stale = greater_than(days, allowed);
  return stale;
}
