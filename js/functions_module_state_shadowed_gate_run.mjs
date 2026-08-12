import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { functions_module_state_shadowed } from "./functions_module_state_shadowed.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  "The functions at fault are thrown as a record rather than printed and then summed up in a sentence, because whoever reads a failure next reads it for names and cannot tell a name being accused from a name being named as the cure. The names being hidden are advice too - a hidden name is the victim here, not the offender.";
  let offenders = await functions_module_state_shadowed();
  let names = list_map_property(offenders, "f_name");
  let f_name = fn_name("function_shadowing_assign");
  let advice = text_combine_multiple([
    "these fill a copy of their own shared state and throw it away - if the inner line was meant to write the shared name, ",
    f_name,
    " takes the word let off it, and if it was not, the inner binding wants a name of its own",
  ]);
  let hint = {
    advice,
    offenders,
  };
  list_empty_is_assert_json(names, {
    hint,
  });
  let r = {
    hiding: 0,
  };
  return r;
}
