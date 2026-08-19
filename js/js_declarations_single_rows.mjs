import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_name_try } from "./js_identifier_name_try.mjs";
import { js_visit_above } from "./js_visit_above.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_first } from "./list_first.mjs";
import { list_is } from "./list_is.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_declarations_single_rows(ast) {
  arguments_assert(arguments, 1);
  ("Every line in this file that brings exactly one name into being, read out with the name it binds, the value it binds to it, and the run of lines it stands in.");
  ("The run of lines is the part worth gathering. A line is taken out by the list holding it rather than by itself, and that list is reachable only while the walk is standing on the line - so a reader that gathers the lines first and decides about them afterwards has already thrown away the one thing it will need.");
  ("A line binding two names at once is left out, because neither half can be taken out on its own. So is a line standing somewhere that is not a run of lines - the head of a loop - for the same reason.");
  ("Nothing is written and nothing is judged. Which of these lines is worth doing anything to belongs to whoever asked.");
  function collect(emit) {
    function consider(v) {
      let node = property_get(v, "node");
      let declarators = property_get(node, "declarations");
      let one_is = list_size_1(declarators);
      if (not(one_is)) {
        return;
      }
      let declarator = list_first(declarators);
      let id = property_get(declarator, "id");
      let name = js_identifier_name_try(id);
      let unnamed_is = null_is(name);
      if (unnamed_is) {
        return;
      }
      let init = property_get(declarator, "init");
      let unset_is = null_is(init);
      if (unset_is) {
        return;
      }
      let above = js_visit_above(v);
      let listed_is = list_is(above);
      if (not(listed_is)) {
        return;
      }
      emit({
        declaration: node,
        list: above,
        id,
        name,
        init,
      });
    }
    js_visit_types(ast, ["VariableDeclaration"], consider);
  }
  let rows = list_adder(collect);
  return rows;
}
