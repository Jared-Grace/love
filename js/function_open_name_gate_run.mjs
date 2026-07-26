import { function_open_name_defects } from "./function_open_name_defects.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { each } from "./each.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log_console } from "./log_console.mjs";
export async function function_open_name_gate_run() {
  "Gate: a fn that can put a VS Code window on the human's screen has to say open in its own name";
  "The fix is to rename it, or to move the opening up into a caller already named for it, so nothing opens a window from behind a quiet name";
  let r = await function_open_name_defects();
  let checked = property_get(r, "checked");
  let defects = property_get(r, "defects");
  function lambda(name) {
    let message = text_combine_multiple(["OPENS QUIETLY  ", name]);
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
      "function open name gate: ",
      defects.length,
      " fns can open an editor without saying open in their name",
    ]);
    throw new Error(combined);
  }
  let v = {
    checked,
    defects: 0,
  };
  return v;
}
