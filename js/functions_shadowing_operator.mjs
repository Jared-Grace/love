import { arguments_assert } from "./arguments_assert.mjs";
import { functions_shadowing_operator_walked } from "./functions_shadowing_operator_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_shadowing_operator() {
  "The hidings that the tooling itself will act on. Every hidden name is a bug waiting for somebody to read the wrong line, but these are worse in kind: the auto pass WRITES calls to these names, so the next comparison anybody puts in one of these files is turned into a call that lands on the local. Nobody has to misread anything for it to go wrong.";
  "The reading itself is one name along, beside a count of how many hidings it opened. Anybody who only wants the findings is written out of that, and asks here.";
  arguments_assert(arguments, 0);
  let told = await functions_shadowing_operator_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
