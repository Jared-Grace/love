import { claude_md_name_defects } from "./claude_md_name_defects.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { each } from "./each.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log_console } from "./log_console.mjs";
export async function claude_md_name_gate_run() {
  "Gate: every function name the instructions file tells a Claude to run has to be one the ai seam will accept";
  "The instructions are read by everyone working here at once, so one stale name there is a crash handed to each of them in turn";
  "The fix is to write the missing function, or to correct the name in the instructions";
  let r = await claude_md_name_defects();
  let checked = property_get(r, "checked");
  let defects = property_get(r, "defects");
  function lambda(defect) {
    let name = property_get(defect, "name");
    let reason = property_get(defect, "reason");
    let message = text_combine_multiple(["STALE NAME  ", name, "  ", reason]);
    log_console(message);
  }
  each(defects, lambda);
  let message2 = text_combine_multiple([
    "\nchecked ",
    checked,
    "  defects ",
    defects.length,
  ]);
  log_console(message2);
  if (greater_than(defects.length, 0)) {
    let combined = text_combine_multiple([
      "claude md name gate: ",
      defects.length,
      " names in the instructions would be refused by the ai seam",
    ]);
    throw new Error(combined);
  }
  let v = {
    checked,
    defects: 0,
  };
  return v;
}
