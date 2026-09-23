import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_fn_name_declarations_inline } from "./js_fn_name_declarations_inline.mjs";
export async function function_fn_name_declarations_inline(f_name) {
  arguments_assert(arguments, 1);
  ("Put every marked function name this one function gave a line of its own back into the one place that reads it.");
  ("Only this step runs, not the whole tidying pass, so what changes in the file is exactly what the step says it changes and nothing a pass would also have done while it was there.");
  let output = await function_transform(f_name, js_fn_name_declarations_inline);
  return output;
}
