import { arguments_assert } from "./arguments_assert.mjs";
import { function_ast_nested_named_generic } from "./function_ast_nested_named_generic.mjs";
import { function_lift_refusal_row } from "./function_lift_refusal_row.mjs";
import { list_add } from "./list_add.mjs";
export async function function_lift_refusal_rows(f_name) {
  arguments_assert(arguments, 1);
  ("Every function written inside the named one, each with the reasons it is still written there. Nothing at all when the named one holds no functions.");
  ("The twin of the report of what could be moved, asked the other way around. That one lists what a walk would take and leaves out everything else, which is right for deciding what to run next and useless for asking why a walk finished with work still standing. This leaves nothing out, so the two together account for every function inside a long one.");
  ("Opening the named function and finding what is written inside it is done next door, because all three of these reports have to do exactly that before they can begin.");
  async function rows_of(ast, nested) {
    let made = [];
    for (let declaration of nested) {
      let row = await function_lift_refusal_row(ast, declaration);
      list_add(made, row);
    }
    return made;
  }
  let rows = await function_ast_nested_named_generic(f_name, rows_of);
  return rows;
}
