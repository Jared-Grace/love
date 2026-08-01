import { property_list_join_comma } from "./property_list_join_comma.mjs";
import { js_operator_targets_not_leaf } from "./js_operator_targets_not_leaf.mjs";
import { js_operator_target_names } from "./js_operator_target_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { property_get } from "./property_get.mjs";
export async function js_operator_targets_leaf_gate_run() {
  "QA gate: fail if any function an operator is turned into brings something else in. The fold guards only against turning an operator into the function it is editing, so a target that reaches another target lets it write a ring - the two would call each other for as long as the program lasted.";
  "The nearest way in is a tidy-up rather than a mistake. Two functions stand for the same test today, one written as the operator itself and one written as a pair of calls; folding those two into the composed one would hand the fold its first target that is not a leaf. Throws so the dispatcher seam exits nonzero.";
  let offenders = await js_operator_targets_not_leaf();
  for (let offender of offenders) {
    let name = property_get(offender, "name");
    let joined = property_list_join_comma(offender, "imports");
    console.log("NOT A LEAF  " + name + "  -> " + joined);
  }
  let names = js_operator_target_names();
  console.log("\nchecked " + names.length + "  offenders " + offenders.length);
  let any = greater_than(offenders.length, 0);
  if (any) {
    let message =
      "operator target gate: " +
      offenders.length +
      " functions an operator becomes are no longer leaves, so the fold can write a ring";
    throw new Error(message);
  }
  let result = {
    checked: names.length,
    offenders: 0,
  };
  return result;
}
