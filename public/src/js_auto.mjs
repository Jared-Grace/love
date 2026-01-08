import { file_overwrite_cached } from "../../../love/public/src/file_overwrite_cached.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { performance_end } from "../../../love/public/src/performance_end.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
import { js_auto_transforms } from "../../../love/public/src/js_auto_transforms.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function js_auto(ast) {
  let d_path = data_path();
  let r = await file_transform_cached(d_path, lambda);
  return;
  log(r);

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
}
async function file_transform_cached(d_path, lambda) {
  await file_read_cached(d_path);
  let r = await lambda();
  await file_overwrite_cached(d_path);
  return r;
}

