import { js_select_apply } from "./js_select_apply.mjs";
export function example_select_apply_lambda(
  select_fn,
  select_args,
  apply_fn,
  apply_args,
) {
  "The corpus half of the selector-and-transform seam: both halves and both sets";
  "of arguments arrive from the example, so one lambda covers every pairing rather";
  "than one shape of pairing. It runs the same middle the command line runs, so an";
  "example that passes is evidence about the real path rather than about a copy.";
  async function lambda(ast) {
    await js_select_apply(ast, select_fn, select_args, apply_fn, apply_args);
  }
  return lambda;
}
