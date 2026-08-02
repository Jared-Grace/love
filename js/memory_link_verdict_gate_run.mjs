import { gate_case_mark } from "./gate_case_mark.mjs";
import { gate_counts_log } from "./gate_counts_log.mjs";
import { memory_link_cases } from "./memory_link_cases.mjs";
import { property_get } from "./property_get.mjs";
import { memory_link_verdict } from "./memory_link_verdict.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function memory_link_verdict_gate_run() {
  "Gate: each written-down link must be judged the way the corpus declares - the same fault, or innocent where it declares innocence. The sweep built on this judgment walks the real memory folder, where every unresolved link is innocent today, so this is the only place a mistake in the judging can be seen. Throws so the dispatcher seam exits nonzero.";
  "A judgment that called everything innocent would be the quietest way to break the check: the sweep would report a clean memory folder it had genuinely read and genuinely misjudged.";
  let cases = memory_link_cases();
  let failures = [];
  for (let c of cases) {
    let link = property_get(c, "link");
    let stems = property_get(c, "stems");
    let typo_links = property_get(c, "typo_links");
    let kind_expected = property_get(c, "kind");
    let suggestion_expected = property_get(c, "suggestion");
    let verdict = memory_link_verdict(link, stems, typo_links);
    let innocent = null_is(verdict);
    let kind_actual = innocent ? "" : property_get(verdict, "kind");
    let suggestion_actual = innocent ? "" : property_get(verdict, "suggestion");
    let kind_ok = equal(kind_expected, kind_actual);
    let suggestion_ok = equal(suggestion_expected, suggestion_actual);
    let b = kind_ok && suggestion_ok;
    let mark = gate_case_mark(b);
    console.log(
      mark + link + "  ->  " + kind_actual + "  " + suggestion_actual,
    );
    if (not(b)) {
      list_add(failures, c);
    }
  }
  let passed = subtract(cases.length, failures.length);
  gate_counts_log(passed, failures.length);
  if (greater_than(failures.length, 0)) {
    throw new Error("memory link verdict gate: " + failures.length + " failed");
  }
  let r = {
    pass: cases.length,
    fail: 0,
  };
  return r;
}
