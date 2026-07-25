import { js_outside_move_generic } from "./js_outside_move_generic.mjs";
import { noop } from "./noop.mjs";
export async function js_outside_move_dry(ast) {
  "The lifting step with nothing saved: the tree ends up exactly as the real step would leave it, and not one file is created. This exists because the real step is the only part of the normalize pipeline that reaches the disk, and a dry run that ran it would quietly write a file for every function declared beside the exported one - which is precisely what happened before this existed.";
  await js_outside_move_generic(ast, noop);
}
