import { arguments_assert } from "./arguments_assert.mjs";
import { js_functionize_local_generic } from "./js_functionize_local_generic.mjs";
export async function js_functionize_local_returning(
  stack_,
  indices,
  f_name_new,
  ast,
) {
  arguments_assert(arguments, 4);
  ("Cut the chosen run of lines out into a function of its own, leaving a line that calls it and hands its answer straight back.");
  ("For the run that closes the function it is coming out of, and only for that one. There the returns inside the run survive the move: each one now returns from the new function, and the returning call left behind returns the same thing from the old one. The caller must be sure of that before asking - nothing here can see whether the run really reaches the end of the body.");
  let returning = true;
  await js_functionize_local_generic(
    stack_,
    indices,
    f_name_new,
    ast,
    returning,
  );
}
