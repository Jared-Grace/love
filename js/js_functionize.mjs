import { js_functionize_generic } from "./js_functionize_generic.mjs";
export async function js_functionize(
  ast,
  f_name_new,
  stack_,
  index_from,
  index_to,
) {
  "The run is called from the middle of the body it came out of, so a return inside it is refused.";
  let returning = false;
  await js_functionize_generic(
    ast,
    f_name_new,
    stack_,
    index_from,
    index_to,
    returning,
  );
}
