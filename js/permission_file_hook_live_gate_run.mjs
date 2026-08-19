import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { cases_checked_gate_run_generic } from "./cases_checked_gate_run_generic.mjs";
import { permission_file_hook_live_case_check } from "./permission_file_hook_live_case_check.mjs";
import { permission_file_hook_live_cases } from "./permission_file_hook_live_cases.mjs";
export async function permission_file_hook_live_gate_run() {
  "Runs the live file-hook corpus as a gate: each case goes past the real hook that grants the file tools from the settings rules, and the verdict it gives must be the one the case declares. Throws on any mismatch so the dispatcher seam exits nonzero.";
  "The gate beside this one asks whether the hook is on disk and named in a settings file. That is the half a rename or a tidied line breaks. This is the other half - whether the thing, once started, still loads, still finds the settings, still resolves a path, and still says yes. Every way it can stop doing those looks from the outside like a session that has not restarted yet: the human is asked, they say yes, and nothing anywhere goes red.";
  let cases = await permission_file_hook_live_cases();
  let r = await cases_checked_gate_run_generic(
    cases,
    permission_file_hook_live_case_check,
    "permission file hook live",
    text_combine_multiple([
      " - the hook is meant to fail quiet, so a case that wanted allow and got silent means it stopped answering rather than that it answered wrongly; start it by hand with ",
      fn_name("permission_file_hook_check"),
      " to see what it does",
    ]),
  );
  return r;
}
