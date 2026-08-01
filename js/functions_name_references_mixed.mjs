import { functions_names } from "./functions_names.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_includes } from "./list_includes.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function functions_name_references_mixed() {
  ("every love function whose body spells repo function names BOTH ways at once — one as an X.name reference and another as an ",
    fn_name("fn_name"),
    '("X") marker');
  ("mixing the two is what turns a docstring into running code. a docstring is a comma-joined run of expressions, and a bundler drops the whole run only when every part of it is provably pure. a bare string is; an ",
    fn_name("fn_name"),
    " call is; X.name is NOT, because reading a property off a binding could in principle do something. so one X.name keeps the entire run alive in the bundle — and the ",
    fn_name("fn_name"),
    " calls sitting beside it are then really called at load time, against an ",
    fn_name("fn_name"),
    " the same bundler already tree-shook away for having no surviving callers anywhere else. measured: ",
    fn_name("app_g_pray_turn"),
    " threw ReferenceError: ",
    fn_name("fn_name"),
    " is not defined the moment the prayer screen opened, from a docstring");
  ("the repair is to spell every name the same way, as the marker, which makes the run pure again and drops it from the bundle entirely. asking which functions mix is what makes that repairable in one command instead of by eye");
  let f_names = await functions_names();
  let love = await repo_functions_names("love");
  let mixed = [];
  for (let name of love) {
    let parsed = await function_parse_declaration(name);
    let ast = property_get(parsed, "ast");
    let found = {
      reference: false,
      marker: false,
    };
    function each_member(v) {
      let node = property_get(v, "node");
      let computed = property_get(node, "computed");
      if (computed) {
        return;
      }
      let object = property_get(node, "object");
      let object_type = property_get(object, "type");
      let object_is_identifier = equal(object_type, "Identifier");
      if (not(object_is_identifier)) {
        return;
      }
      let property = property_get(node, "property");
      let property_name = property_get_or_null(property, "name");
      let property_is_name = equal(property_name, "name");
      if (not(property_is_name)) {
        return;
      }
      let object_name = property_get(object, "name");
      let is_fn = list_includes(f_names, object_name);
      if (not(is_fn)) {
        return;
      }
      found.reference = true;
    }
    function each_call(v) {
      let node = property_get(v, "node");
      let callee = property_get(node, "callee");
      let callee_name = property_get_or_null(callee, "name");
      let right = fn_name("fn_name");
      let is_marker = equal(callee_name, right);
      if (not(is_marker)) {
        return;
      }
      found.marker = true;
    }
    js_visit_type(ast, "MemberExpression", each_member);
    js_visit_type(ast, "CallExpression", each_call);
    let both = found.reference && found.marker;
    if (both) {
      list_add(mixed, name);
    }
  }
  return mixed;
}
