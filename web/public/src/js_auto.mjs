import { not } from "../../../love/public/src/not.mjs";
import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { performance_end } from "../../../love/public/src/performance_end.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
import { js_auto_transforms } from "../../../love/public/src/js_auto_transforms.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { data_path } from "./data_path.mjs";
export async function js_auto(ast) {
  let d_path = data_path();
  let exists = global_function_property_exists(file_read_cached, d_path);
  if (not(exists)) {
    let data = null;
    async function lambda2() {
      if (null_is(data)) {
        data = {};
        await data_generate(data);
      }
      return data;
    }
    global_function_property_set(file_read_cached, d_path, lambda2);
  }
  async function lambda() {
    const p = performance_start(js_auto.name);
    let transforms = js_auto_transforms();
    async function lambda(t) {
      performance_next(p, t.name);
      await t(ast);
    }
    await each_async(transforms, lambda);
    let r = performance_end(p);
    return r;
  }
  await lambda();
  return;
  log(r);
}
