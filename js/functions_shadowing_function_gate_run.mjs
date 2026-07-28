import { functions_shadowing_function } from "./functions_shadowing_function.mjs";
import { functions_shadowing_rename_all } from "./functions_shadowing_rename_all.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { each } from "./each.mjs";
import { log_console } from "./log_console.mjs";
import { greater_than } from "./greater_than.mjs";
import { error } from "./error.mjs";
export async function functions_shadowing_function_gate_run() {
  "Gate: no local may wear the name of a function this repo already has";
  "This ratchets against ZERO rather than against a baseline - all twenty-five were cleared on 2026-07-28, so there is nothing left to grandfather and letting one back in would be letting the next call written in that file land on a local";
  "The wider cousin of the operator gate beside it: same failure, same fix, and only the set of names differs";
  let offenders = await functions_shadowing_function();
  function lambda(offender) {
    let f_name = property_get(offender, "name");
    let hides = property_get(offender, "hides");
    let joined = list_join_comma(hides);
    let message = text_combine_multiple([
      "HIDES A FUNCTION  ",
      f_name,
      "  -> ",
      joined,
    ]);
    log_console(message);
  }
  each(offenders, lambda);
  let size = list_size(offenders);
  let any = greater_than(size, 0);
  if (any) {
    let combined = text_combine_multiple([
      "shadowing function gate: ",
      size,
      " functions bind a name the repo already answers to, so a call written there reaches the local instead - rename it with ",
      functions_shadowing_rename_all.name,
    ]);
    error(combined);
  }
  let r = {
    hiding: 0,
  };
  return r;
}
