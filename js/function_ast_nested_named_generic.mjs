import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast_nested_named } from "./function_ast_nested_named.mjs";
import { property_get } from "./property_get.mjs";
export async function function_ast_nested_named_generic(f_name, fn_ast_nested) {
  "$plain f_name";
  "Read the named function out of the repo as a tree together with every function written inside it, and ask this question of the two.";
  "Three reports start here and were each starting here in the same three lines - what the plain lift would take, what the lift that leaves a name behind would take, and why a piece is still written where it is. None of them is about opening the file or finding the nested functions; that is what all of them have to do first.";
  arguments_assert(arguments, 2);
  let read = await function_ast_nested_named(f_name);
  let ast = property_get(read, "ast");
  let nested = property_get(read, "nested");
  let r = await fn_ast_nested(ast, nested);
  return r;
}
