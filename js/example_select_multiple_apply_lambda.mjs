import { js_select_multiple_apply } from "./js_select_multiple_apply.mjs";
export function example_select_multiple_apply_lambda(
  select_fn,
  select_args_multiple,
  apply_fn,
  apply_args,
) {
  "The corpus half of the seam for transforms that take more than one node: the selector runs once per set of arguments, and everything found arrives together.";
  "Its single-selection twin could not express these, so the whole family of verbs that need a first and a last — extracting a span, moving a line to sit beside another — had no example at all. It runs the same middle the command line runs, so an example that passes is evidence about the real path rather than about a copy.";
  async function lambda(ast) {
    await js_select_multiple_apply(
      ast,
      select_fn,
      select_args_multiple,
      apply_fn,
      apply_args,
    );
  }
  return lambda;
}
