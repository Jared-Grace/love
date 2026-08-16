import { arguments_assert } from "./arguments_assert.mjs";
import { js_functionize_generic } from "./js_functionize_generic.mjs";
export async function js_functionize_returning(
  ast,
  f_name_new,
  stack_,
  index_from,
  index_to,
) {
  arguments_assert(arguments, 5);
  ("The run closes the function it is coming out of, so the returns inside it travel with it and the line left behind hands the answer back.");
  let returning = true;
  await js_functionize_generic(
    ast,
    f_name_new,
    stack_,
    index_from,
    index_to,
    returning,
  );
}
