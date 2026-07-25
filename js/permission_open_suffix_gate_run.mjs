import { permission_run_names } from "./permission_run_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { greater_than } from "./greater_than.mjs";
import { each } from "./each.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log_console } from "./log_console.mjs";
export async function permission_open_suffix_gate_run() {
  "Gate: no allow rule may auto-approve a function whose name ends in the open suffix";
  "Those launch VS Code on the human's screen, and the ai seam refuses them at file_open_seam_assert, so granting one would only buy a guaranteed error";
  "The fix is always the same - point the rule at the twin without the suffix";
  let names = await permission_run_names();
  function lambda(name) {
    let ew = text_ends_with(name, "_open");
    return ew;
  }
  let offenders = list_filter(names, lambda);
  function lambda2(name) {
    log_console(text_combine_multiple(["OPENS EDITOR  ", name]));
  }
  each(offenders, lambda2);
  log_console(
    text_combine_multiple([
      "\nchecked ",
      names.length,
      "  offenders ",
      offenders.length,
    ]),
  );
  if (greater_than(offenders.length, 0)) {
    throw new Error(
      text_combine_multiple([
        "permission open suffix gate: ",
        offenders.length,
        " allow rules name a function that opens the editor on the human's screen",
      ]),
    );
  }
  let r = {
    checked: names.length,
    offenders: 0,
  };
  return r;
}
