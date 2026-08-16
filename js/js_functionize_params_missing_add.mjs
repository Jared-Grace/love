import { arguments_assert } from "./arguments_assert.mjs";
import { js_declaration_names_unbound } from "./js_declaration_names_unbound.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_module_names_reachable } from "./js_module_names_reachable.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { js_statements_declared_names_direct } from "./js_statements_declared_names_direct.mjs";
import { js_function_declaration_params_add } from "./js_function_declaration_params_add.mjs";
import { js_function_arguments_assert_add } from "./js_function_arguments_assert_add.mjs";
export async function js_functionize_params_missing_add(
  declaration,
  f_name_new,
  ast,
  span,
) {
  arguments_assert(arguments, 4);
  ("Works out what the new function has to be handed, writes those names into it as its parameters, and says how many there are. The names it needs are the ones nothing in it binds, less everything it can already reach - what the file imports, what the language gives, and what the run itself declares.");
  ("Handed back as well as written in, because the line left where the run used to stand has to hand over exactly these, in this order.");
  let missing = js_declaration_names_unbound(declaration);
  list_remove(missing, f_name_new);
  let reachable = await js_module_names_reachable(ast);
  missing = list_difference(missing, reachable);
  ("What the language itself provides is not passed in. A name like console or Error is bound everywhere already, so handing it over as a parameter binds it a second time - and a parameter wearing the name of something already in scope is the one thing this repo forbids outright, because every line under it reads the handed-in thing rather than the one it was written against.");
  ("It reads as a missing name for the same reason a repo function would: nothing in the file binds it and nothing imports it. Only the two answers above were subtracted, so everything the language gives came through as a parameter - console and Error were both handed over that way in one afternoon's cutting. The lifting twin already asked this question; the two now agree.");
  let provided = js_global_names();
  missing = list_difference(missing, provided);
  ("A name the run declares for itself is never handed in either. A parameter and a top-level let of the same name in one function body are the same name declared twice, which the language refuses outright - the new function would not even parse. A run holding a small function that reads a name declared further down that same run did exactly this: the reading of what is bound gathers a block's lets only as far as the line doing the reading, so the name read as bound by nothing and was handed over, and the new function both took it and declared it.");
  ("Dropping it is right rather than only a way past the error. A mention standing before the let in straight-line code would have thrown in the file as it was, so the only mentions this touches are the ones inside a function within the run - and there the name reaches the run's own declaration, which travels with the run. Same binding before the cut, same binding after.");
  let declared = js_statements_declared_names_direct(span);
  missing = list_difference(missing, declared);
  js_function_declaration_params_add(declaration, missing);
  ("The count is written once the parameters are settled, so it says how many the new function really takes.");
  js_function_arguments_assert_add(declaration);
  return missing;
}
