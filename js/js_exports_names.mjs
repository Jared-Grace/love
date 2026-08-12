export function js_exports_names(ast) {
  "The names a file gives out for others to import - what it writes export in front of, and what it lists in an export block";
  "A name declared inside a body is not one of these, however plainly it is declared. So the reading takes each export node and looks only at what that node itself carries, rather than asking a whole subtree what it declares - a function exported with another written inside it would otherwise appear to give out both.";
  "A default export is left out. Nothing here writes one, and a file asking for a default names it by a word the importing line chooses rather than one the exporting file wrote, so the two cannot be compared by name at all.";
  let nodes = js_list_type_nodes(ast, "ExportNamedDeclaration");
  function names_of(node) {
    let declaration = property_get(node, "declaration");
    let declared = js_node_is(declaration);
    if (not(declared)) {
      let specifiers = property_get(node, "specifiers");
      function exported_name(specifier) {
        let exported = property_get(specifier, "exported");
        let name = property_get(exported, "name");
        return name;
      }
      let listed = list_map(specifiers, exported_name);
      return listed;
    }
    let several = js_node_type_is(declaration, "VariableDeclaration");
    if (several) {
      let declarators = property_get(declaration, "declarations");
      function bound(declarator) {
        let id = property_get(declarator, "id");
        let inner = js_function_declaration_params_names_node(id);
        return inner;
      }
      let unpacked = list_map_squash(declarators, bound);
      return unpacked;
    }
    let id = property_get(declaration, "id");
    let one = js_function_declaration_params_names_node(id);
    return one;
  }
  let names = list_map_squash(nodes, names_of);
  return names;
}
