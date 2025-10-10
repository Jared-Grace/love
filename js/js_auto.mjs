import { js_auto_transforms } from "../../../love/public/src/js_auto_transforms.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function js_auto(ast) {
  let transforms = js_auto_transforms();
  async function lambda(t) {
    await t(ast);
  }
  await each_async(transforms, lambda);
  return;
  [];
}
