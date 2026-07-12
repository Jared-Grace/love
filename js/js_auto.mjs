import { data_generate_get } from "./data_generate_get.mjs";
import { data_get } from "./data_get.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { js_flo_path } from "./js_flo_path.mjs";
import { data_file_update_inner } from "./data_file_update_inner.mjs";
import { not } from "./not.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { file_read_cached_initialize } from "./file_read_cached_initialize.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { log } from "./log.mjs";
import { performance_end } from "./performance_end.mjs";
import { performance_next } from "./performance_next.mjs";
import { performance_start } from "./performance_start.mjs";
import { js_auto_transforms } from "./js_auto_transforms.mjs";
import { each_async } from "./each_async.mjs";
import { data_path } from "./data_path.mjs";
export async function js_auto(ast) {
  let d_path = data_path();
  let exists = global_function_property_exists(
    file_read_cached_initialize,
    d_path,
  );
  if (not(exists)) {
    let data_get = data_generate_get();
    global_function_property_set(file_read_cached_initialize, d_path, data_get);
  }
  let f_path = js_flo_path(ast);
  async function lambda() {
    let p = performance_start(js_auto.name);
    let transforms = js_auto_transforms();
    async function lambda(t) {
      performance_next(p, t.name);
      await t(ast);
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
  await lambda();
  return;
  log(js_auto.name, r);
}
