import { functions_module_state_shadowed } from "./functions_module_state_shadowed.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_module_state_shadowed_gate_run() {
  "Gate: no file may have its own top-level state hidden by a binding inside one of";
  "its functions.";
  "It ratchets against ZERO. The one member the repo carried was cleared on";
  "2026-08-03, so there is nothing to grandfather - and the general gate on hiding";
  "cannot stand in for this one, because it ratchets against a baseline and a";
  "function that does not work can sit inside a baseline untouched.";
  "The step that adds the word let used to write these itself, unable to see a";
  "top-level binding. That is fixed, so what this gate now watches for is the shape";
  "arriving by hand or by some other route.";
  let offenders = await functions_module_state_shadowed();
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let hidden = property_get(offender, "hidden");
    let joined = list_join_comma(hidden);
    console.log("SHARED STATE HIDDEN  " + f_name + "  " + joined);
  }
  let size = list_size(offenders);
  let any = greater_than(size, 0);
  if (any) {
    let f_name2 = fn_name("function_shadowing_assign");
    throw new Error(
      "module state shadowed gate: " +
        size +
        text_combine_multiple([
          " files fill a copy of their own shared state and throw it away - if the inner line was meant to write the shared name, ",
          f_name2,
          " takes the word let off it, and if it was not, the inner binding wants a name of its own",
        ]),
    );
  }
  let r = {
    hiding: 0,
  };
  return r;
}
