import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_new_code } from "./function_new_code.mjs";
export async function functions_new_baseline_ratchet_gate_new(
  lister,
  name_path,
  name_write,
  hint,
  name_gate,
) {
  arguments_assert(arguments, 5);
  let left = json_to(
    "QA gate: what offends now must be what the baseline already held.",
  );
  let combined = text_combine(left, ";");
  let left6 = json_to(
    "Measured against the baseline rather than against nought, because the repo already carried some of these when this was written. What it holds is the thing worth holding - today's change is not allowed to add one more.",
  );
  let combined7 = text_combine(left6, ";");
  let abc = text_combine_3("let offenders = await ", lister, "();");
  let abc7 = text_combine_3("let path = ", name_path, "();");
  let b = json_to(name_write);
  let f_name = fn_name("fn_name");
  let a = text_combine_multiple(["let name_write = ", f_name, "("]);
  let abc8 = text_combine_3(a, b, ");");
  let json = json_to(hint);
  let f_name5 = fn_name("baseline_names_gate_generic");
  let combined10 = text_combine_multiple([
    "let r = await ",
    f_name5,
    "(offenders, path, ",
  ]);
  let combined8 = text_combine_multiple([combined10, json, ", name_write);"]);
  await function_new_code(name_gate, [], true, [
    combined,
    combined7,
    abc,
    abc7,
    abc8,
    combined8,
    "return r;",
  ]);
}
