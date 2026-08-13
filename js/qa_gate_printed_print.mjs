import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_failed_joined } from "./qa_gate_failed_joined.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function qa_gate_printed_print(told, here) {
  "Everything the gates themselves said, shown only when one of them went red";
  "A run that passes has nothing in this block anybody reads, and it is hundreds of lines long. Printing it either way is what made every green run something to be trimmed by hand afterwards, and a trim written at the place a command is called is logic that no name holds and nothing can reuse. Whether the block is worth showing is a property of the run, so the run is what decides it.";
  "A red run prints it whole and unchanged. That is the case where the lines are the answer, and shortening the one output somebody needs in order to shorten the one nobody reads would be the wrong half saved.";
  arguments_assert(arguments, 2);
  let failed = qa_gate_failed_joined(told, here);
  let red = greater_than(failed.length, 0);
  if (not(red)) {
    return false;
  }
  let printed = property_get(told, "printed");
  console.log(printed);
  return true;
}
