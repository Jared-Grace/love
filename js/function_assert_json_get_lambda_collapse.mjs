import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { import_from_dir_path } from "./import_from_dir_path.mjs";
import { js_assert_json_get_lambda_collapse } from "./js_assert_json_get_lambda_collapse.mjs";
import { greater_than_equal_assert_json } from "./greater_than_equal_assert_json.mjs";
import { js_imports_auto_relative } from "./js_imports_auto_relative.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
export async function function_assert_json_get_lambda_collapse(f_name) {
  arguments_assert(arguments, 1);
  ("unwraps one function's hand-written lazy payload onto the eager check, repairs the imports so the file still loads, and refuses a function that had none to unwrap");
  ("The refusal is why this is a command of its own rather than a line inside the");
  ("sweep. Named by hand it can be pointed at the wrong function, and a function with");
  ("nothing to unwrap would otherwise be rewritten byte-for-byte and committed under a");
  ("message saying a wrapper had been removed. It stands ahead of the import repair,");
  ("and so ahead of the file being written at all, because a run that is going to");
  ("refuse must leave nothing behind.");
  ("Repairing the imports here is not a convenience. This rewrite is the kind that");
  ("puts a name into a file the file does not yet bring in, and the checks it lands on");
  ("are the ones the canonicalizing pass itself calls - so a file left half-done takes");
  ("that pass down with it, and the one command that would have added the import can");
  ("no longer run. Thirteen files went that way once and every import had to be");
  ("written out by hand.");
  let paths = await functions_names_to_paths();
  let f_path = property_get(paths, f_name);
  let from_dir = import_from_dir_path(f_path);
  let moved = 0;
  async function lambda(ast) {
    moved = js_assert_json_get_lambda_collapse(ast);
    greater_than_equal_assert_json(moved, 1, {
      hint: "nothing in this function hands a wrapper to the lazy check whose whole body is one record of plain names — is the wrapper computing something? then the waiting is the point of it and it should stay",
      f_name,
    });
    await js_imports_auto_relative(ast, paths, from_dir);
  }
  await file_js_transform(f_path, lambda);
  let told = {
    f_name,
    moved,
  };
  return told;
}
