import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_type_nodes_outermost_function } from "./js_list_type_nodes_outermost_function.mjs";
import { property_path_equals_2 } from "./property_path_equals_2.mjs";
import { property_get } from "./property_get.mjs";
export function js_ast_declarator_init_named(ast, name) {
  "What fills the line that binds a name in the file's own function, and nothing when no line there binds it.";
  "A canonicalized file lifts almost every value onto a line of its own before it is used, so a question about a value is nearly always reached as a question about a name - and this is the step back from the name to the value, which is where the asking can go on.";
  "Nothing rather than a refusal when no line binds it, because the name may be a parameter or something the file imported, and neither of those is a mistake - they are simply values this file did not make, and a caller that cares can tell them apart by the name it already has in hand.";
  "The first line binding the name in that one scope is the answer, and the lines inside functions standing within it are not looked at. It used to look at every line in the file and take the first, on the ground that the shadowing gates refuse a name bound twice - which is true only of a name bound twice where one binding can see the other. Two side-by-side scopes may bind one name and are allowed to, deliberately, because neither can see the other; so a nested helper binding the same name would answer for the outer line, and did. A gate returned its record under the usual name, a helper inside it bound an empty list to that name a few lines above, and this handed back the empty list.";
  arguments_assert(arguments, 2);
  let declarators = js_list_type_nodes_outermost_function(
    ast,
    "VariableDeclarator",
  );
  for (let declarator of declarators) {
    let same_is = property_path_equals_2(declarator, "id", "name", name);
    if (same_is) {
      let init = property_get(declarator, "init");
      return init;
    }
  }
  let missing = null;
  return missing;
}
