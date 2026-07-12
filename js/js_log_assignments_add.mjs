import { js_visit_declarations } from "./js_visit_declarations.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_call_statement } from "./js_call_statement.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_adder_invoke } from "./list_adder_invoke.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { js_imports_missing_add_specified_single } from "./js_imports_missing_add_specified_single.mjs";

export async function js_log_assignments_add(ast) {
  let f_name = js_flo_name(ast);
  function lambda_declarator_name(declarator) {
    let id = property_get(declarator, "id");
    let type = property_get(id, "type");
    return type === "Identifier" ? property_get(id, "name") : null;
  }
  function lambda_not_null(name) {
    return name !== null;
  }
  function lambda(la) {
    function lambda_visit(v) {
      let node = property_get(v, "node");
      let stack = property_get(v, "stack");
      let list = list_get_end_1(stack);
      let declarators = js_declaration_declarators_get(node);
      let names_raw = list_map(declarators, lambda_declarator_name);
      let names = list_filter(names_raw, lambda_not_null);
      if (list_size(names) === 0) {
        return;
      }
      let line_text = js_unparse(node);
      let code_key = js_identifier_unique_ast(ast, "code");
      let properties = [code_key + ": " + JSON.stringify(line_text)];
      function lambda_add_name(name) {
        list_add(properties, name);
      }
      each(names, lambda_add_name);
      let args_code = [f_name + ".name", "{" + properties.join(", ") + "}"];
      let statement = js_call_statement(log.name, args_code);
      function lambda_insert() {
        let index = list_index_of(list, node);
        list_insert(list, index + 1, statement);
      }
      la(lambda_insert);
    }
    js_visit_declarations(ast, lambda_visit);
  }
  list_adder_invoke(lambda);
  await js_imports_missing_add_specified_single(ast, log.name);
}
