import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { function_new_code } from "./function_new_code.mjs";
export async function functions_new_baseline_ratchet_path_new(file, name_path) {
  arguments_assert(arguments, 2);
  let left = json_to(
    "Where this ratchet keeps what the repo already carried. Reading it, rewriting it, and refusing to grow it are three separate functions, so the file name is spelled once here rather than once in each of them.",
  );
  let combined = text_combine(left, ";");
  let b = json_to(file);
  let abc = text_combine_3("let path = ", b, ";");
  await function_new_code(name_path, [], false, [
    combined,
    abc,
    "return path;",
  ]);
}
