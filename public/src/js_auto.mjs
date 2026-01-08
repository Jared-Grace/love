import { list_add } from "../../../love/public/src/list_add.mjs";
import { performance_now } from "../../../love/public/src/performance_now.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
import { js_auto_transforms } from "../../../love/public/src/js_auto_transforms.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function js_auto(ast) {
  let measurements = [];
  const start = performance_now();
  const name = "start";
  list_add(measurements, {
    time: start,
    name: name,
  });
  let transforms = js_auto_transforms();
  async function lambda(t) {
    const p = performance_now();
    await t(ast);
  }
  await each_async(transforms, lambda);
  const end = performance_now();
  let difference = subtract(end, start);
  return;
}
