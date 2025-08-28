import { js_auto_transforms } from "./js_auto_transforms.mjs";
import { each_async } from "./each_async.mjs";
export async function js_auto(ast) {
  let transforms = js_auto_transforms();
  async function lambda(t) {
    await t(ast);
  }
  await each_async(transforms, lambda);
  return;
  [];
}
