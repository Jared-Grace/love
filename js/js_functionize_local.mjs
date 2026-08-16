import { js_functionize_local_generic } from "./js_functionize_local_generic.mjs";
export async function js_functionize_local(stack_, indices, f_name_new, ast) {
  "Cut the chosen run of lines out into a function of its own, leaving a call to it standing where the run was.";
  "The run is called from the middle of the body it came out of, so a return inside it is refused.";
  let returning = false;
  await js_functionize_local_generic(
    stack_,
    indices,
    f_name_new,
    ast,
    returning,
  );
}
