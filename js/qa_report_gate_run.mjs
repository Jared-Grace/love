import { cases_checked_gate_run_generic } from "./cases_checked_gate_run_generic.mjs";
import { qa_report_cases } from "./qa_report_cases.mjs";
import { qa_report_case_check } from "./qa_report_case_check.mjs";
export async function qa_report_gate_run() {
  "Runs the recorded-run corpus as a gate: what the run's own report reads back out of a gate run's printing must match what the corpus declares. Throws on any mismatch so the dispatcher seam exits nonzero";
  "The one gate whose subject is the gate runner itself. Everything else here judges the repo; this judges the thing that tells you what the others found, which is the piece that can fail by saying less rather than by saying something wrong";
  let cases = qa_report_cases();
  let hint =
    " - the recorded runs are read back wrongly by the run's own report, and a gate named as failed with no reason under it is the shape to look for";
  let r = await cases_checked_gate_run_generic(
    cases,
    qa_report_case_check,
    "qa report",
    hint,
  );
  return r;
}
