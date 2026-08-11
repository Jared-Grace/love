import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { function_new_code } from "./function_new_code.mjs";
export async function functions_new_baseline_ratchet_write_new(
  lister,
  name_growth,
  name_path,
  name_write,
) {
  arguments_assert(arguments, 4);
  let left = json_to(
    "Rewrite this ratchet's record from what offends right now. For seeding it once, and for shrinking it after a repair - never for blessing a new offence, which is the one thing the gate exists to refuse.",
  );
  let combined = text_combine(left, ";");
  let abc = text_combine_3("let known = await ", lister, "();");
  let abc4 = text_combine_3("await ", name_growth, "(known);");
  let abc5 = text_combine_3("let path = ", name_path, "();");
  let f_name = fn_name("baseline_known_write");
  let combined9 = text_combine_multiple([
    "let r = await ",
    f_name,
    "(known, path);",
  ]);
  await function_new_code(name_write, [], true, [
    combined,
    abc,
    abc4,
    abc5,
    combined9,
    "return r;",
  ]);
}
