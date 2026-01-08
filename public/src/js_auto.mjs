import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { performance_start } from "../../../love/public/src/performance_start.mjs";
import { performance_now } from "../../../love/public/src/performance_now.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
import { js_auto_transforms } from "../../../love/public/src/js_auto_transforms.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function js_auto(ast) {
  const p = performance_start();
  let transforms = js_auto_transforms();
  async function lambda(t) {
    performance_next(p, t.name);
    await t(ast);
  }
  await each_async(transforms, lambda);
  const end = performance_now();
  return;
  let difference = subtract(end, start);
}
