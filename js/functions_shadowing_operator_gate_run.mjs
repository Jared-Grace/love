import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { functions_shadowing_rename_all } from "./functions_shadowing_rename_all.mjs";
import { functions_shadowing_operator } from "./functions_shadowing_operator.mjs";
import { js_operator_function_names } from "./js_operator_function_names.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
export async function functions_shadowing_operator_gate_run() {
  "Gate: nothing may hide a name the auto pass writes into code. Unlike the";
  "shadowing gate beside it, this one ratchets against ZERO rather than against";
  "a baseline of what the repo already carried - the whole set was cleared on";
  "2026-07-28, so there is nothing here to grandfather, and letting one back in";
  "would be letting the tooling write a call that lands on a local.";
  "The names are printed even when nothing is wrong, because a list read from";
  "somewhere else is the one thing that could make this pass while checking";
  "nothing. Seeing the set is how a reader tells a clean answer from an empty";
  "question.";
  let names = js_operator_function_names();
  let joined = list_join_comma(names);
  console.log("names the auto pass writes: " + joined);
  let offenders = await functions_shadowing_operator();
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let hides = property_get(offender, "hides");
    console.log(
      "HIDES AN OPERATOR  " + f_name + "  -> " + list_join_comma(hides),
    );
  }
  let size = list_size(offenders);
  console.log("\nhiding an operator " + size);
  let any = greater_than(size, 0);
  if (any) {
    throw new Error(
      "shadowing operator gate: " +
        size +
        text_combine_multiple([
          " functions hide a name the auto pass writes into code, so the next operator written in one of them becomes a call to the local - rename the local with ",
          functions_shadowing_rename_all.name,
        ]),
    );
  }
  let r = {
    checked: names.length,
    hiding: 0,
  };
  return r;
}
