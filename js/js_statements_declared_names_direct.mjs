import { each } from "./each.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_types_is } from "./js_node_types_is.mjs";
import { list_adder } from "./list_adder.mjs";
import { property_get } from "./property_get.mjs";
export function js_statements_declared_names_direct(statements) {
  "the names these statements declare themselves, one level deep: every variable declarator plus every function and class declaration standing directly among them. What a nested block or function declares is deliberately left out — a scope must be able to say what it binds without speaking for the scopes inside it, which is the whole difference from the twin without the suffix.";
  function collect(emit) {
    function name_emit(node) {
      let id = property_get(node, "id");
      let named = js_node_is(id);
      if (named) {
        ("a declaration can unpack rather than name, as in taking three pieces out of one split, and every name it unpacks is bound here just as a plain one would be");
        let names = js_function_declaration_params_names_node(id);
        each(names, emit);
      }
    }
    function consider(statement) {
      let variable = js_node_type_is(statement, "VariableDeclaration");
      if (variable) {
        let declarations = property_get(statement, "declarations");
        each(declarations, name_emit);
        return;
      }
      let types = ["FunctionDeclaration", "ClassDeclaration"];
      let named = js_node_types_is(statement, types);
      if (named) {
        name_emit(statement);
      }
    }
    each(statements, consider);
  }
  let names = list_adder(collect);
  return names;
}
