import { js_statement_arguments_assert_not_is } from "./js_statement_arguments_assert_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_expand_generic_lambda5 } from "./js_expand_generic_lambda5.mjs";
import { js_expand_generic_lambda } from "./js_expand_generic_lambda.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { js_call_arguments_get } from "./js_call_arguments_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove_all_multiple } from "./list_remove_all_multiple.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_identifier_unique } from "./js_identifier_unique.mjs";
import { each } from "./each.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_map } from "./list_map.mjs";
import { list_insert } from "./list_insert.mjs";
import { each_reverse } from "./each_reverse.mjs";
import { noop } from "./noop.mjs";
import { js_return_on } from "./js_return_on.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_last } from "./list_last.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { each_pair } from "./each_pair.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_identifiers_to_names } from "./js_identifiers_to_names.mjs";
import { js_statement_call_get } from "./js_statement_call_get.mjs";
export async function js_expand_generic(next, stack_, ast) {
  let inserted = null;
  let v = js_statement_call_get(next);
  let call = property_get(v, "call");
  if (not_equal(call, null)) {
    let callee = property_get(call, "callee");
    let arguments2 = js_call_arguments_get(call);
    async function lambda5(arg, arg_index) {
      let r2 = await js_expand_generic_lambda5(arg, arg_index, ast);
      return r2;
    }
    await each_index_async(arguments2, lambda5);
    let index = list_index_of(stack_, next);
    let a_names = js_identifiers_to_names(arguments2);
    let name = property_get(callee, "name");
    let v2 = await function_parse_declaration(name);
    let ast_call = property_get(v2, "ast");
    let declaration = property_get(v2, "declaration");
    let identifiers_call = js_identifiers_names(ast_call);
    let identifiers = js_identifiers_names(ast);
    let identifiers_all = list_concat(identifiers, identifiers_call);
    let f_names = await functions_names();
    list_remove_all_multiple(f_names, identifiers_all);
    function lambda2(i) {
      let unique = js_identifier_unique(identifiers_all, i);
      js_identifier_rename(ast_call, i, unique);
    }
    each(identifiers, lambda2);
    let params_names = js_function_declaration_params_names(declaration);
    each_pair(params_names, a_names, lambda3);
    function lambda3(param_name, a_name) {
      js_identifier_rename(ast_call, param_name, a_name);
    }
    let body_block_written = js_function_declaration_to_block_body(declaration);
    ("The line counting the child's arguments is about the child. Once the lines stand in the caller they are inside a function with its own count, so the check reads that one instead - and a child taking one thing, inlined into a caller taking six, refuses every call. It is dropped rather than rewritten because the caller already carries its own.");
    function statement_kept_is(statement) {
      let r3 = js_statement_arguments_assert_not_is(statement);
      return r3;
    }
    let body_block = list_filter(body_block_written, statement_kept_is);
    let last = list_last(body_block);
    function lambda() {
      let r = js_expand_generic_lambda(body_block, last, v);
      return r;
    }
    js_return_on(last, lambda, noop);
    list_remove(stack_, next);
    each_reverse(body_block, lambda4);
    function lambda4(item) {
      list_insert(stack_, index, item);
    }
    inserted = list_map(body_block, js_unparse);
  }
  return inserted;
}
