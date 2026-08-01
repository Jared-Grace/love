import { arguments_assert } from "./arguments_assert.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { function_ast } from "./function_ast.mjs";
export async function function_ast_memo(f_name, remembered) {
  arguments_assert(arguments, 2);
  ("a function's tree, kept in the object handed in so a name asked about twice is found on disk and read once");
  ("finding a function costs a look in every repo and reading it costs a parse, and neither depends on what the caller then wants to know. A check that asks one function two things was paying both twice - measured over the four hundred and forty names holding an allow rule, that is eight hundred and eighty parses where four hundred and forty do.");
  ("what comes back is the same tree each time rather than a copy, so a caller that changes it changes what everyone after it is handed. That is why the remembering is in an object the caller made rather than in this file: a caller that only reads passes one along and shares the saving, and a caller that rewrites trees never gets one.");
  let known = property_exists(remembered, f_name);
  if (known) {
    let kept_before = property_get(remembered, f_name);
    return kept_before;
  }
  let ast = await function_ast(f_name);
  property_set(remembered, f_name, ast);
  return ast;
}
