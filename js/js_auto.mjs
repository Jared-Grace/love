import { js_auto_generic } from "./js_auto_generic.mjs";
import { js_auto_transforms } from "./js_auto_transforms.mjs";
export async function js_auto(ast) {
  "Normalize one tree for real: every step, including the one that lifts each function declared beside the exported one out into its own file.";
  let transforms = js_auto_transforms();
  let r = await js_auto_generic(ast, transforms);
  return r;
}
