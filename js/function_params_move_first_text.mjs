import { text_split_comma_dot_each_async } from "./text_split_comma_dot_each_async.mjs";
import { function_params_move_first_curried_right } from "./function_params_move_first_curried_right.mjs";
export async function function_params_move_first_text(
  f_names_comma,
  param_names,
) {
  "Moves several parameters to the front of several functions, the functions named in comma-joined words off a command line and the parameters handed in as a list.";
  "THE PARAMETER NAMES ARRIVE ALREADY SPLIT AND ALREADY REVERSED, AND BOTH OF THOSE ARE THE CALLER'S WORK RATHER THAN THIS ONE'S. They are moved one at a time and each move puts its name in front of the one moved before it, so a list applied in the order it was written comes out backwards; reversing it is the whole reason the caller splits rather than passing the words along.";
  "Splitting them a second time here handed a list to a splitter that only takes text, and the command stopped before touching anything. Nothing was ever damaged by that and nothing ever said so either, which is why it sat until somebody at a keyboard ran it.";
  let lambda = await function_params_move_first_curried_right(param_names);
  await text_split_comma_dot_each_async(f_names_comma, lambda);
}
