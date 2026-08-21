import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { json_to } from "./json_to.mjs";
import { list_map_filter } from "./list_map_filter.mjs";
import { js_visit_above } from "./js_visit_above.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_visit_declarations } from "./js_visit_declarations.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { js_identifier_unique_ast } from "./js_identifier_unique_ast.mjs";
import { js_flo_name } from "./js_flo_name.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_call_statement } from "./js_call_statement.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_adder_invoke } from "./list_adder_invoke.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { each } from "./each.mjs";
import { js_imports_missing_add_specified_single } from "./js_imports_missing_add_specified_single.mjs";
export async function js_log_assignments_add(ast) {
  "Puts a line after every declaration in a file which prints, when the function is run, that declaration as it was written and what each name in it came out as.";
  "This is for watching a function work, not for keeping. It is run over a file by hand when what the function does has stopped matching what it reads as, and the file is put back afterwards.";
  "The written line is filed under a name made unique against everything else in the file rather than under a fixed word. It sits in the same record as the names being printed, so a fixed word would be lost the moment the function itself declared one - and lost quietly, since a record keeps the last of two same names without complaint.";
  "The lines are all worked out during the walk and put in afterwards rather than as each one is found. Putting a statement into the list being walked shifts everything behind it along, and the walk would then either step over a declaration or come back round to one it had already done.";
  let f_name = js_flo_name(ast);
  function lambda_declarator_name(declarator) {
    let id = property_get(declarator, "id");
    let type = property_get(id, "type");
    let r = equal(type, "Identifier") ? property_get(id, "name") : null;
    return r;
  }
  function lambda_not_null(name) {
    let neq = not_equal(name, null);
    return neq;
  }
  function lambda(la) {
    function lambda_visit(v) {
      let node = property_get(v, "node");
      let list = js_visit_above(v);
      let declarators = js_declaration_declarators_get(node);
      let names = list_map_filter(
        declarators,
        lambda_declarator_name,
        lambda_not_null,
      );
      let left = list_size(names);
      if (equal(left, 0)) {
        return;
      }
      let line_text = js_unparse(node);
      let code_key = js_identifier_unique_ast(ast, "code");
      let properties = [code_key + ": " + json_to(line_text)];
      function lambda_add_name(name) {
        list_add(properties, name);
      }
      each(names, lambda_add_name);
      let args_code = [f_name + ".name", "{" + properties.join(", ") + "}"];
      let f_name2 = fn_name("log");
      let statement = js_call_statement(f_name2, args_code);
      function lambda_insert() {
        let index = list_index_of(list, node);
        list_insert(list, index + 1, statement);
      }
      la(lambda_insert);
    }
    js_visit_declarations(ast, lambda_visit);
  }
  list_adder_invoke(lambda);
  let name_new = fn_name("log");
  await js_imports_missing_add_specified_single(ast, name_new);
}
