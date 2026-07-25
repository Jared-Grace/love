import { data_generate_get } from "./data_generate_get.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { js_flo_path } from "./js_flo_path.mjs";
import { data_file_update_inner } from "./data_file_update_inner.mjs";
import { not } from "./not.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { file_read_cached_initialize } from "./file_read_cached_initialize.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { performance_end } from "./performance_end.mjs";
import { performance_next } from "./performance_next.mjs";
import { performance_start } from "./performance_start.mjs";
import { js_auto_transform_run } from "./js_auto_transform_run.mjs";
import { each_async } from "./each_async.mjs";
import { data_path } from "./data_path.mjs";
export async function js_auto_generic(ast, transforms) {
  "Run a given list of normalize steps over one tree, keeping the function index up to date between steps so a step that asks what a name refers to gets an answer that includes the previous step's work. The list is a parameter so the real run and the dry run are the same code over two lists that differ in one entry - the step that creates files.";
  let d_path = data_path();
  let exists = global_function_property_exists(
    file_read_cached_initialize,
    d_path,
  );
  if (not(exists)) {
    ("the local is not named after the getter it shadows: a local sharing a repo function's name gets bound by the import-repair pass, which then adds an import for a function this file never calls");
    let generated = data_generate_get();
    global_function_property_set(
      file_read_cached_initialize,
      d_path,
      generated,
    );
  }
  let f_path = js_flo_path(ast);
  let p = performance_start(js_auto_generic.name);
  async function lambda(t) {
    performance_next(p, t.name);
    await js_auto_transform_run(t, ast);
    let data = global_function_property_get(
      file_read_cached_initialize,
      d_path,
    );
    data_file_update_inner(
      {
        ast,
        f_path,
      },
      data,
    );
  }
  await each_async(transforms, lambda);
  let r = performance_end(p);
  return r;
}
