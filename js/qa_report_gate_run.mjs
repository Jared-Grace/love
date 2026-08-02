import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { property_not } from "./property_not.mjs";
import { qa_report_cases } from "./qa_report_cases.mjs";
import { qa_report_case_check } from "./qa_report_case_check.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { subtract } from "./subtract.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { not } from "./not.mjs";
export function qa_report_gate_run() {
  "Runs the recorded-run corpus as a gate: what the run's own report reads back out of a gate run's printing must match what the corpus declares. Throws on any mismatch so the dispatcher seam exits nonzero";
  "The one gate whose subject is the gate runner itself. Everything else here judges the repo; this judges the thing that tells you what the others found, which is the piece that can fail by saying less rather than by saying something wrong";
  let cases = qa_report_cases();
  let results = list_map(cases, qa_report_case_check);
  for (let result of results) {
    let passed = property_get(result, "pass");
    let mark = gate_case_mark(passed);
    let note = property_get(result, "note");
    let quiet = text_empty_is(note);
    let tail = "";
    if (not(quiet)) {
      tail = "  " + note;
    }
    console.log(mark + property_get(result, "label") + tail);
  }
  function failed_is(result) {
    let bad = property_not(result, "pass");
    return bad;
  }
  let failures = list_filter(results, failed_is);
  let passes = subtract(results.length, failures.length);
  gate_counts_log(passes, failures.length);
  let any = greater_than(failures.length, 0);
  if (any) {
    throw new Error(
      "qa report gate: " +
        failures.length +
        " recorded runs are read back wrongly by the run's own report - a gate named as failed with no reason under it is the shape to look for",
    );
  }
  let r = {
    pass: results.length,
    fail: 0,
  };
  return r;
}
