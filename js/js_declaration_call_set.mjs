import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { js_call_new_expression } from "./js_call_new_expression.mjs";
import { property_set } from "./property_set.mjs";
export async function js_declaration_call_set(ast, selects, f_name) {
  arguments_assert(arguments, 3);
  ("Points a chosen line at a call to a named function, keeping the name that line");
  ("binds. The address is a name and the value is a name, so nothing has to be");
  ("worked out and this stays as safe to approve once as the rest of the family.");
  ("This is what a constant with a getter needs on the far side of the argument");
  ("list. Its relative reaches a value sitting inside a call; a value that is");
  ("simply bound to a name sits in no call at all, and until now that line could");
  ("only be changed by handing over a line of source.");
  ("The call is written from the named function's own parameters, the same way");
  ("every other generated call here is, so a getter takes none and arrives as");
  ("itself.");
  let node = list_single(selects);
  let declarators = js_declaration_declarators_get(node);
  let declarator = list_single(declarators);
  let expression = await js_call_new_expression(f_name, ast);
  property_set(declarator, "init", expression);
}
