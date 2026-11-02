import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_single_property } from "./list_single_property.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { property_get } from "./property_get.mjs";
import { assert_json } from "./assert_json.mjs";
import { property_set } from "./property_set.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_local_unread_remove(f_name, name) {
  "Take a binding off a step nothing reads, and leave the step doing what it does: let name = step() becomes step(). It is what the unread-locals gate asks for when the answer was never wanted.";
  "Refuses when the word appears anywhere else in the file, so a mention it cannot judge stops the edit rather than being left reading a name that is gone.";
  function lambda(ast) {
    let identifiers = js_list_type(ast, "Identifier");
    function named(v) {
      let node = property_get(v, "node");
      let eq = property_equals(node, "name", name);
      return eq;
    }
    let mentions = identifiers.filter(named);
    let b = list_size_equal(mentions, 1);
    assert_json(b, {
      hint: "this word is mentioned more than once in the file, so it is not simply unread",
      f_name,
      name,
    });
    let declarations = js_list_type(ast, "VariableDeclaration");
    function binds(v) {
      let declarators = property_path_get_2(v, "node", "declarations");
      let id = list_single_property(declarators, "id");
      let eq2 = property_get_or_null_equal(id, "name", name);
      return eq2;
    }
    let list = declarations.filter(binds);
    let declaration = list_single_property(list, "node");
    let list2 = property_get(declaration, "declarations");
    let init = list_single_property(list2, "init");
    delete declaration.declarations;
    delete declaration.kind;
    property_set(declaration, "type", "ExpressionStatement");
    property_set(declaration, "expression", init);
  }
  let r = await function_transform(f_name, lambda);
  return r;
}
