import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { text_split_comma_dot_each_async } from "./text_split_comma_dot_each_async.mjs";
import { function_params_move_first_curried_right } from "./function_params_move_first_curried_right.mjs";
export async function function_params_move_first_text(
  f_names_comma,
  param_names,
) {
  "Moves several parameters to the front of several functions, both named in comma-joined words off a command line.";
  "The parameter names are split into a list here. They used to be handed on as the one word they arrived as, and the loop underneath refuses a text outright, so this command could not run from the seam it was written for at all - it threw before touching anything, which is why nothing was ever damaged and nothing ever said so either.";
  let param_names_split = text_split_comma_dot(param_names);
  let lambda =
    await function_params_move_first_curried_right(param_names_split);
  await text_split_comma_dot_each_async(f_names_comma, lambda);
}
