import { arguments_assert } from "./arguments_assert.mjs";
import { commands_only_write_denied_cases } from "./commands_only_write_denied_cases.mjs";
import { property_get } from "./property_get.mjs";
import { commands_only_write_denied_is } from "./commands_only_write_denied_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function commands_only_write_denied_cases_gate_run() {
  "QA gate: the commands-only switch refuses, and goes on allowing, exactly the places its corpus says it does at each setting.";
  "A switch nobody can see working is the failure to watch for here. It does its whole job by refusing, and a refusal that stopped arriving looks from the inside exactly like a folder where nobody happened to reach for an editing tool - so without this the switch could read as on for weeks while changing nothing.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = commands_only_write_denied_cases();
  function answer(c) {
    let level = property_get(c, "level");
    let path = property_get(c, "path");
    let denied = commands_only_write_denied_is(level, path);
    return denied;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "denied",
    "why",
    "commands only write denied",
  );
  return r;
}
