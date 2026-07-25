import { js_outside_move_generic } from "./js_outside_move_generic.mjs";
import { function_new_declaration_from } from "./function_new_declaration_from.mjs";
export async function js_outside_move(ast) {
  "Lift every function declared beside the exported one out into its own file. This is the one step of the normalize pipeline that creates files, so the creating step is named separately from the rest of the work and the dry run substitutes a step that creates nothing.";
  await js_outside_move_generic(ast, function_new_declaration_from);
}
