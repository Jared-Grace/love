import { js_imports_unused_remove } from "./js_imports_unused_remove.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_imports_missing_add_all } from "./js_imports_missing_add_all.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_transform_imports(f_name, lambda$ast) {
  arguments_assert(arguments, 2);
  ("Changes a function and leaves the file able to run: whatever the change");
  ("brought in by name gets its import written too.");
  ("This is the promise the atom seam makes and could not keep. A verb writes a");
  ("call from a name, and the name it calls has to be imported before the file");
  ("means anything - so every command was followed by a second one that only");
  ("repaired imports, and forgetting it left a file that reads correctly and dies");
  ("at run time.");
  ("It sits here rather than in the transform runner underneath, which some twenty");
  ("callers share - among them the normalize pass, which repairs imports itself.");
  ("Only the paths that write calls from names need this, and they are the two");
  ("that call it.");
  async function lambda(ast) {
    await lambda$ast(ast);
    await js_imports_missing_add_all(ast);
    await js_imports_unused_remove(ast);
  }
  let output = await function_transform(f_name, lambda);
  return output;
}
