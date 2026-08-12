import { js_page_serializing_members } from "./js_page_serializing_members.mjs";
import { js_call_member_name_try } from "./js_call_member_name_try.mjs";
import { js_visit_type_node } from "./js_visit_type_node.mjs";
import { js_visit_function_nodes_names } from "./js_visit_function_nodes_names.mjs";
import { js_imports_local_names } from "./js_imports_local_names.mjs";
import { js_identifier_not_is } from "./js_identifier_not_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_name } from "./property_get_name.mjs";
import { each } from "./each.mjs";
export function js_page_serialized_imported_names(ast) {
  "The functions this file sends to a browser to run that were written somewhere ELSE and imported here by name.";
  "The twin without this suffix answers the same question about the functions written in this very file, and that is the whole of what the repo has been reading. A function borrowed from another file is handed over exactly the same way and broken exactly the same way, and no reading of either file had ever said so: the file that sends it does not hold it, and the file that holds it does not mention a browser anywhere.";
  "That gap is not theoretical. A probe was written as an ordinary exported function in its own file and handed to page.evaluate from another; the normalizing pass duly turned its comparisons into calls to functions of this repo and added the imports, and every gate watching for exactly that stayed quiet, because each of them reads one file at a time.";
  "Only a plain name is counted, and only one this file imports. Something the file received, or a call's result, says nothing about where it was written; and a name bound by the file itself is the twin's business, not this one's.";
  let members = js_page_serializing_members();
  let declared = js_visit_function_nodes_names(ast);
  let imported = js_imports_local_names(ast);
  function lambda2(la) {
    function lambda(call) {
      let method = js_call_member_name_try(call);
      let covered_not = list_includes_not(members, method);
      if (covered_not) {
        return;
      }
      let given = property_get(call, "arguments");
      function lambda_argument(argument) {
        let plain_not = js_identifier_not_is(argument);
        if (plain_not) {
          return;
        }
        let handed = property_get_name(argument);
        let ours = list_includes(declared, handed);
        if (ours) {
          return;
        }
        let borrowed = list_includes(imported, handed);
        if (borrowed) {
          la(handed);
        }
      }
      each(given, lambda_argument);
    }
    js_visit_type_node(ast, "CallExpression", lambda);
  }
  let names = list_adder_unique(lambda2);
  return names;
}
