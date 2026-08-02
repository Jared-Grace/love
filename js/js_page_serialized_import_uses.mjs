import { js_page_serialized_names } from "./js_page_serialized_names.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_visit_function_nodes } from "./js_visit_function_nodes.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
export function js_page_serialized_import_uses(ast) {
  "Every name a function of this file reads from the top of the file, in a function that is sent to a browser to run - which is to say, every place this file is already broken.";
  "An import is a line at the top of a file. A function sent to a page is sent as text and nothing else goes with it, so the line at the top never arrives and the name it bound is simply missing where the function runs. The browser then stops on a name it has never heard of, in code no reading of this repo would point at.";
  "This is the failure a normalizing pass leaves behind. A pass rewrites a comparison into a call to a function of this repo and writes the import for it at the top - correct everywhere except here, and here it is invisible, because the only witness is a browser test failing for what looks like an unrelated reason.";
  "Anything empty is the healthy answer. A function running in a page is meant to reach only what the browser itself gives it, so a file whose sent-away functions borrow nothing from the top of the file is exactly right and says nothing.";
  let names = js_page_serialized_names(ast);
  let uses = [];
  let empty = list_empty_is(names);
  if (empty) {
    return uses;
  }
  let imported = js_imports_local_names(ast);
  function lambda(v) {
    let f_node = property_get(v, "node");
    let id = property_get(f_node, "id");
    let named = js_identifier_is(id);
    if (named) {
      let fn = property_path_get_2(f_node, "id", "name");
      let sent_not = list_includes_not(names, fn);
      if (sent_not) {
        return;
      }
      let read = js_identifiers_referenced_names(f_node);
      let borrowed = list_intersection(read, imported);
      let none = list_empty_is(borrowed);
      if (none) {
        return;
      }
      let one = {
        fn,
        borrowed,
      };
      list_add(uses, one);
    }
  }
  js_visit_function_nodes(ast, lambda);
  return uses;
}
