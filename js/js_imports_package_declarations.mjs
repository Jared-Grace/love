import { property_starts_with } from "./property_starts_with.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { js_imports_all } from "./js_imports_all.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_single } from "./list_single.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { each } from "./each.mjs";
export function js_imports_package_declarations(ast) {
  "Every import in a file that brings in a whole package under one name - the node builtins and the installed libraries, as against the repo's own files.";
  "A path that begins with a dot names a file in this repo; anything else names a package. The two are collected apart because almost everything done to an import is done to one kind and would be wrong for the other - a path is fixed up and renamed when its file moves, and a package has no file to move.";
  "Only an import with exactly one thing in it is answered for, so a plain `import \"./thing.mjs\"` - which is brought in for what it does rather than for what it gives - is left out, and nothing here can take it away.";
  let vs = js_imports_all(ast);
  function lambda2(la) {
    function lambda(v) {
      let node = property_get(v, "node");
      let source = property_get(node, "source");
      let specifiers = property_get(node, "specifiers");
      let one_is = list_size_1(specifiers);
      if (not(one_is)) {
        return;
      }
      let literal_is = js_node_type_is(source, "Literal");
      if (not(literal_is)) {
        return;
      }
      let repo_is = property_starts_with(source, "value", ".");
      if (repo_is) {
        return;
      }
      let specifier = list_single(specifiers);
      let local = property_get(specifier, "local");
      let name = property_get(local, "name");
      la({
        name,
        declaration: node,
      });
    }
    each(vs, lambda);
  }
  let imports = list_adder_unique(lambda2);
  return imports;
}
