import { js_name_taken_dir_check } from "./js_name_taken_dir_check.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_remove } from "./list_remove.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_declaration_movable_assert } from "./js_declaration_movable_assert.mjs";
import { js_code_export } from "./js_code_export.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_format } from "./js_format.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function js_outside_move_dir(ast, dir) {
  "Lift every function declared beside the exported one into its own file in a";
  "flat folder, one function per file. The hermetic core of the step that";
  "publishes files, mirroring it minus the ambient path and registry work.";
  "The ambient version asks where the repo is and whether the name is taken";
  "anywhere in it, then writes there. Reading the repo is fine in a sandbox and";
  "the sibling that leaves the new function in place proves it - a free name that";
  "is already a repo function should not become a parameter, wherever it runs.";
  "Writing there is the one thing that is not: an example of the publishing half";
  "put a real file into the source tree and had to be thrown away, and that is";
  "the whole reason the verb went undemonstrated.";
  let body = property_get(ast, "body");
  let declarations = list_filter_property(body, "type", "FunctionDeclaration");
  ("The refusal runs over the whole list before anything is written, so a file");
  ("that cannot be fully taken apart is left as it was rather than half-emptied.");
  function lambda_movable(declaration) {
    js_declaration_movable_assert(ast, declaration);
  }
  each(declarations, lambda_movable);
  ("Whether each name is free is asked in the same pass and for the same reason. The ambient version of this step asks it of the whole repo, and the docstring above has always said so, but here the write went straight to the folder and put the new function on top of whatever was already answering to that name. Nothing looked wrong afterwards: the file is well formed and exports the name it is called, so an extraction that deleted a function read exactly like one that added one.");
  async function lambda_free(declaration) {
    let f_name_declared = js_function_declaration_name(declaration);
    await js_name_taken_dir_check(dir, f_name_declared);
  }
  await each_async(declarations, lambda_free);
  async function lambda_write(declaration) {
    let f_name = js_function_declaration_name(declaration);
    let code_declaration = js_unparse(declaration);
    let contents = js_code_export(code_declaration);
    let formatted = await js_format(contents);
    let file_path = js_file_dir_path(dir, f_name);
    await file_overwrite(file_path, formatted);
  }
  await each_async(declarations, lambda_write);
  function lambda_remove(declaration) {
    list_remove(body, declaration);
  }
  each(declarations, lambda_remove);
}
