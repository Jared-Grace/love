import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_function_parameter_call_sizes_cases } from "./js_function_parameter_call_sizes_cases.mjs";
import { js_code_parameter_call_sizes } from "./js_code_parameter_call_sizes.mjs";
import { property_get } from "./property_get.mjs";
export async function js_function_parameter_call_sizes_cases_gate_run() {
  "QA gate: the reading that counts how many arguments a function hands to the function it was given answers the corpus exactly.";
  "A deletion rests on it. A wrapper that only hands its arguments over may be dropped when the receiver hands over the same number of arguments the wrapper takes, and this reading is where that number comes from. A number given wrongly deletes a wrapper that was carrying the difference.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_function_parameter_call_sizes_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    let index = property_get(c, "index");
    let sizes = js_code_parameter_call_sizes(code, index);
    return sizes;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "sizes",
    "name",
    "parameter call sizes",
  );
  return r;
}
