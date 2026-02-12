import { log } from "../../../love/public/src/log.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_remove_all_multiple } from "../../../love/public/src/list_remove_all_multiple.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { js_identifier_unique } from "../../../love/public/src/js_identifier_unique.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { each_reverse } from "../../../love/public/src/each_reverse.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { js_return_on } from "../../../love/public/src/js_return_on.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_declaration_name } from "../../../love/public/src/js_declaration_name.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { js_declaration_to_block_body } from "../../../love/public/src/js_declaration_to_block_body.mjs";
import { js_identifier_rename } from "../../../love/public/src/js_identifier_rename.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { js_declaration_params_names } from "../../../love/public/src/js_declaration_params_names.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_intersect } from "../../../love/public/src/list_intersect.mjs";
import { js_identifiers_names } from "../../../love/public/src/js_identifiers_names.mjs";
import { function_parse_declaration } from "../../../love/public/src/function_parse_declaration.mjs";
import { js_identifiers_to_names } from "../../../love/public/src/js_identifiers_to_names.mjs";
import { js_statement_call_get } from "../../../love/public/src/js_statement_call_get.mjs";
export async function js_expand_generic(next, stack2, index, ast) {
  log({
    next,
  });
  let inserted = null;
  let v = js_statement_call_get(next);
  let declaration_call = property_get(v, "declaration");
  let expression = property_get(v, "expression");
  if (expression !== null) {
    let callee = property_get(expression, "callee");
    let arguments2 = property_get(expression, "arguments");
    const a_names = js_identifiers_to_names(arguments2);
    let name = property_get(callee, "name");
    let v2 = await function_parse_declaration(name);
    let ast_call = property_get(v2, "ast");
    let declaration = property_get(v2, "declaration");
    let identifiers_call = js_identifiers_names(ast_call);
    let identifiers = js_identifiers_names(ast);
    let intesection = list_intersect(identifiers_call, identifiers);
    if (list_empty_not_is(intesection)) {
    }
    let identifiers_all = list_concat(identifiers, identifiers_call);
    let f_names = await functions_names();
    list_remove_all_multiple(f_names, identifiers_all);
    function lambda2(i) {
      let unique = js_identifier_unique(identifiers_all, i);
      js_identifier_rename(ast_call, i, unique);
    }
    each(identifiers, lambda2);
    let params_names = js_declaration_params_names(declaration);
    each_pair(params_names, a_names, lambda3);
    function lambda3(param_name, a_name) {
      js_identifier_rename(ast_call, param_name, a_name);
    }
    let body_block = js_declaration_to_block_body(declaration);
    let last = list_last(body_block);
    function lambda() {
      list_remove(body_block, last);
      let argument = property_get(last, "argument");
      let nn = null_not_is(declaration_call);
      if (nn) {
        let name = js_declaration_name(declaration_call);
        let assign = js_declare(name, argument);
        list_add(body_block, assign);
      }
    }
    js_return_on(last, lambda, noop);
    list_remove(stack2, next);
    each_reverse(body_block, lambda4);
    function lambda4(item) {
      list_insert(stack2, index, item);
    }
    inserted = list_map(body_block, js_unparse);
  }
  return inserted;
}
