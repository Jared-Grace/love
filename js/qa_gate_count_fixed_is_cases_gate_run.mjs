import { arguments_assert } from "./arguments_assert.mjs";
import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_code_function_declaration } from "./js_code_function_declaration.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { qa_gate_answer_node_try } from "./qa_gate_answer_node_try.mjs";
import { qa_gate_count_fixed_is } from "./qa_gate_count_fixed_is.mjs";
import { qa_gate_count_fixed_is_cases } from "./qa_gate_count_fixed_is_cases.mjs";
export async function qa_gate_count_fixed_is_cases_gate_run() {
  "QA gate: telling a number that was gathered by the reading from a number that is the size of something written into the source works exactly as the corpus says.";
  "It exists because of what the sweep that uses this answers on a good day. Nothing found is what it says when every gate is honest and also what it says if this reading never fires at all, and the two are written the same way - which is the very confusion the sweep was built to end. The corpus is the only thing that can tell them apart, because it holds a shape this must say yes to.";
  "Each case is written as a body and made into a function here, because what is being asked is about a whole function - a name is bound in one place and its size is taken in another, and a lone piece of code has nowhere to bind anything.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = qa_gate_count_fixed_is_cases();
  async function answer(c) {
    let inside = property_get(c, "code");
    let code = js_code_function_declaration("a", inside, true);
    let parsed = js_parse(code);
    let ast = property_list_first(parsed, "body");
    let node = qa_gate_answer_node_try(ast);
    let fixed = await qa_gate_count_fixed_is(ast, node);
    let told = {
      fixed,
    };
    return told;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "told",
    "name",
    "code",
  );
  return r;
}
