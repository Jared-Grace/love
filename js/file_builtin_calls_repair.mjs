import { arguments_assert } from "./arguments_assert.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { js_builtin_to_calls } from "./js_builtin_to_calls.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function file_builtin_calls_repair(f_path) {
  "Say the covered Math calls in one file with the names the repo keeps for them, and bring those names in.";
  "One file rather than the whole repo, because the pass this belongs to normalizes twenty-four other things at the same time and a sweep of that over every file that mentions Math is a diff nobody can read and a collision with whoever is mid-edit. What moved here is only ever a Math call.";
  "What moved is the answer, and nothing else says it. A file where every call was left standing and a file that had none to begin with are the same file afterwards, so a sweep that could not tell them apart would have to open each one to learn whether it had done anything.";
  arguments_assert(arguments, 1);
  let moved = [];
  async function lambda(ast) {
    let one = await js_builtin_to_calls(ast);
    list_add_multiple(moved, one);
  }
  await file_js_transform(f_path, lambda);
  let r = {
    f_path,
    moved,
  };
  return r;
}
