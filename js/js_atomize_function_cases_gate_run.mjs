import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_atomize_function_cases } from "./js_atomize_function_cases.mjs";
import { js_code_atomize_function_lifted_count } from "./js_code_atomize_function_lifted_count.mjs";
import { property_get } from "./property_get.mjs";
export async function js_atomize_function_cases_gate_run() {
  "QA gate: the lifting pass takes exactly as many functions out of each written-out piece of code as the corpus says.";
  "The pass rewrites files unasked, and the whole licence for that is that it preserves behaviour. The fault this gate stands against did not: it moved two functions sharing a name into one block, where the later one answers for both, and the call that meant the first ran the second. Nothing caught it - the file still parsed, the canonicalize answered ok, and the shadowing gates ask about nesting rather than sameness.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_atomize_function_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    let lifted = await js_code_atomize_function_lifted_count(code);
    return lifted;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "lifted",
    "name",
    "atomize function",
  );
  return r;
}
