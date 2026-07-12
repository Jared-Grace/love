import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
import { js_declare_init_get } from "./js_declare_init_get.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { js_identifiers_named_count } from "./js_identifiers_named_count.mjs";
import { js_node_effectful_is } from "./js_node_effectful_is.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { object_replace } from "./object_replace.mjs";
import { null_is } from "./null_is.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { list_not_is } from "./list_not_is.mjs";
import { list_remove } from "./list_remove.mjs";
export function js_declaration_unused_to_expression(ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let declaration = js_declare_single(node);
    if (null_is(declaration)) {
      return;
    }
    let id = property_get(declaration, "id");
    let nti = js_identifier_not_is(id);
    if (nti) {
      return;
    }
    let name = property_get(id, "name");
    let count = js_identifiers_named_count(ast, name);
    if (count !== 1) {
      return;
    }
    let stack = property_get(v, "stack");
    let e = list_get_end_1(stack);
    let nl = list_not_is(e);
    if (nl) {
      return;
    }
    let init = js_declare_init_get(declaration);
    if (null_is(init)) {
      list_remove(e, node);
      return;
    }
    let effectful = js_node_effectful_is(init);
    if (effectful) {
      let statement = js_parse_statement("a;");
      property_set(statement, "expression", init);
      object_replace(node, statement);
      return;
    }
    list_remove(e, node);
  }
  js_visit_type(ast, "VariableDeclaration", lambda);
}
