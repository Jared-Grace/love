import { arguments_assert } from "./arguments_assert.mjs";
import { g_profiles_balance_next_cases } from "./g_profiles_balance_next_cases.mjs";
import { g_profiles_balance_next } from "./g_profiles_balance_next.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { property_get } from "./property_get.mjs";
export function g_profiles_balance_next_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the person owed next is the one who mends the spread, and not the one who happens to be next in the list.");
  ("The two answers agree far more often than they differ, which is what makes this worth holding. Written in pool order the first seven people of the real cast are all married women, and a chapter stopped there has no men in it at all - so a picker that had quietly fallen back to walking the list would keep passing every casual look and only show up in the finished content, months later, as a town where nobody meets a man.");
  ("Throws so the dispatcher seam exits nonzero.");
  function answer(c) {
    let cast = property_get(c, "cast");
    let taken = property_get(c, "taken");
    let next = g_profiles_balance_next(cast, taken);
    return next;
  }
  let cases = g_profiles_balance_next_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "next",
    "why",
    "person owed next by the balancing picker",
  );
  return r;
}
