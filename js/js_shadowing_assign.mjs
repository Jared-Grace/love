import { js_declare_single_init } from "./js_declare_single_init.mjs";
import { js_scopes_shadowing } from "./js_scopes_shadowing.mjs";
import { list_single } from "./list_single.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { js_declare_single } from "./js_declare_single.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
import { not_equal } from "./not_equal.mjs";
import { not_assert_json } from "./not_assert_json.mjs";
export function js_shadowing_assign(ast, name) {
  "end one hiding the other way round: the inner line stops making a binding of its";
  "own and writes the outer one instead.";
  "This is the sibling of the rename, and which of the two is right is decided by";
  "what the lines below the inner binding were reading. The rename is for a file";
  "where they meant the outer name all along, so giving the inner one a name of its";
  "own leaves every one of them correct. This is for the opposite file, where they";
  "meant the value the inner line just worked out, and the only reason they did not";
  "get it is the word let.";
  "That shape is a whole bug, not a tidiness complaint. A cache filled inside an if";
  "reads back as empty forever, and every line after it is looking at the value the";
  "outer binding was started with.";
  "Unlike the rename this does not preserve behaviour, and it is not meant to. The";
  "hiding was the bug, so the point is to change what runs.";
  "It refuses a file that hides the name in more than one place, and a declaration";
  "with nothing on the right of it, because in both cases which line is meant to do";
  "the writing is a judgement belonging to whoever is reading the code.";
  let scopes = js_scopes_shadowing(ast, name);
  let scope = list_single(scopes);
  let found = [];
  function lambda(v) {
    let node = property_get(v, "node");
    let declarator = js_declare_single(node);
    if (null_is(declarator)) {
      return;
    }
    let id = property_get(declarator, "id");
    let declared = property_get(id, "name");
    if (not_equal(declared, name)) {
      return;
    }
    list_add(found, node);
  }
  js_visit_type(scope, "VariableDeclaration", lambda);
  let declaration = list_single(found);
  let init = js_declare_single_init(declaration);
  let nothing = null_is(init);
  not_assert_json(nothing, {
    hint: "that line declares the name without giving it a value, so there is nothing for it to write to the outer binding - was the rename the one you wanted?",
    name,
  });
  let statement = js_parse_statement("a = b;");
  let assignment = property_get(statement, "expression");
  let left = property_get(assignment, "left");
  property_set(left, "name", name);
  property_set(assignment, "right", init);
  object_replace(declaration, statement);
  return name;
}
