import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { list_single } from "./list_single.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_params_new } from "./function_params_new.mjs";
export async function function_local_to_param(f_name, local_name) {
  "Turns a value the function decides for itself into one its callers decide: the binding goes, the name becomes a parameter, and every place that already called the function passes the value the binding used to hold.";
  "This is the step that makes a function general, and it is the one that cannot be done by hand safely. Adding the parameter is nothing; finding every caller and handing each one the old value is the whole job, and a caller missed is a function silently receiving nothing where it used to have a value.";
  "Callers keep their old behaviour exactly, because they are given the very expression that was there. So this changes what the function can do without changing what it does - which is what makes it safe to run before anyone has decided what the new value should be.";
  "The value has to be one the command line can hand over as a single word, since the parameter machinery reads its defaults as a comma-separated list. A value with a comma inside it belongs in a parameter added by hand.";
  arguments_assert(arguments, 2);
  let source = null;
  function taken(ast) {
    let node = js_find_declaration_named(ast, local_name);
    let declarators = js_declaration_declarators_get(node);
    let declarator = list_single(declarators);
    let init = js_declare_init_get(declarator);
    source = js_unparse(init);
    let body = js_flo_body(ast);
    list_remove(body, node);
  }
  await function_transform(f_name, taken);
  await function_params_new(f_name, local_name, source);
}
