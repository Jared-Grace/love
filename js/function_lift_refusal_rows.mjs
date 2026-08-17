import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast_nested_named } from "./function_ast_nested_named.mjs";
import { function_lift_refusal_row } from "./function_lift_refusal_row.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function function_lift_refusal_rows(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one, each with the reasons it is still written there. Nothing at all when the named one holds no functions.");
  ("The twin of the report of what could be moved, asked the other way around. That one lists what a walk would take and leaves out everything else, which is right for deciding what to run next and useless for asking why a walk finished with work still standing. This leaves nothing out, so the two together account for every function inside a long one.");
  let read = await function_ast_nested_named(f_name);
  let ast = property_get(read, "ast");
  let nested = property_get(read, "nested");
  let rows = [];
  for (let declaration of nested) {
    let row = await function_lift_refusal_row(ast, declaration);
    list_add(rows, row);
  }
  return rows;
}
