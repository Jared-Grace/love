import { js_function_declaration_name_to_path } from "./js_function_declaration_name_to_path.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_remove } from "./list_remove.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
import { each_async } from "./each_async.mjs";
import { js_declaration_movable_assert } from "./js_declaration_movable_assert.mjs";
export async function js_outside_move_generic(ast, saved) {
  "Lift every function declared beside the exported one out of the file, one function per file, with the step that actually creates each file handed in. Everything else - refusing when a target path is already taken, and removing the declaration from the body once it has been dealt with - is the same whether the files are really being written or not.";
  "The saving step is a parameter because the dry run has to reproduce this step's effect on the tree exactly while producing no files at all. Copying the body into a second near-identical function would let the two drift, and the drift would be invisible: the dry run would keep answering questions about a pipeline that no longer matched the real one.";
  let body = property_get(ast, "body");
  let fds = list_filter_property(body, "type", "FunctionDeclaration");
  ("both refusals run over the whole list before anything is created, so a file that cannot be fully taken apart is left exactly as it was rather than half-emptied");
  function lambda_movable(fd) {
    js_declaration_movable_assert(ast, fd);
  }
  each(fds, lambda_movable);
  async function lambda(fd) {
    let f_path = js_function_declaration_name_to_path(fd);
    await file_exists_not_assert_json(f_path, {
      hint: "a file already exists at the function's target path — was it already extracted?",
    });
  }
  await each_async(fds, lambda);
  await each_async(fds, saved);
  function lambda3(fd) {
    list_remove(body, fd);
  }
  each(fds, lambda3);
}
