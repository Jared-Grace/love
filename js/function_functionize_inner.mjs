import { function_functionize_generic } from "./function_functionize_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export async function function_functionize_inner(
  f_name,
  word_from,
  word_to,
  f_name_new,
) {
  arguments_assert(arguments, 4);
  ("Pull the run of lines from the first mention of one word through the first mention of another out of the named function, into a function of its own - the two ends taken where the words are actually written, however deep inside a loop or a branch that is.");
  ("The twin of the cut that climbs to the top of the body, and between them they reach all three shapes a long function comes in. Straight work at the top of a body is the climbing twin's; a closure is the lifting command's; work folded inside a loop is this one's, and before it that third shape could be reached by neither - a loop is not a closure, and climbing out of it addresses the loop whole, which only wraps the size up again.");
  ("Both ends must stand in the same block, which for this one is the ordinary case rather than a hurdle: the lines worth cutting out of a loop are the loop's own contents, side by side.");
  ("All of the cutting is held one name down, and the only thing said here is which reader finds the two ends - the nearest line rather than the one at the top of the body. That is the single word this and its twin ever disagreed about.");
  let select_fn_name = fn_name("js_statement_find_name_inner");
  let output = await function_functionize_generic(
    f_name,
    word_from,
    word_to,
    f_name_new,
    select_fn_name,
  );
  return output;
}
