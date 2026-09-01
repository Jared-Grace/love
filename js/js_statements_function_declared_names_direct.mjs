import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function js_statements_function_declared_names_direct(statements) {
  arguments_assert(arguments, 1);
  ("The names of the functions declared straight among a run of lines, and nothing else the run binds.");
  ("WHY ANYBODY ASKS. A declared function is not made by the line it is written on. The language fills its name before the first line of the body is reached, so the name holds the function above its own line exactly as surely as below it. Every other kind of binding waits its turn, and that is the difference this whole reading exists to draw.");
  ("So these are the one set of names for which standing below something is not a fact about order at all. A reading that asks whether a run reaches forward to a name nothing has filled yet has to take these out before it answers, or it refuses a run that was never in any danger.");
  ("A class declared among the lines is deliberately not counted. A class name is there and empty until its own line runs, and reading it before then stops the program rather than handing back nothing - so for a class, standing below really does mean made later.");
  ("Only what stands directly among the lines is counted, never what a block or a function written inside them declares, which is the same boundary its neighbour keeps: a run of lines answers for what it binds and does not speak for the scopes inside it.");
  function collect(emit) {
    function consider(statement) {
      let declared_is = js_node_type_is(statement, "FunctionDeclaration");
      if (not(declared_is)) {
        return;
      }
      let id = property_get(statement, "id");
      let named_is = js_node_is(id);
      if (not(named_is)) {
        return;
      }
      let name = property_get(id, "name");
      emit(name);
    }
    each(statements, consider);
  }
  let names = list_adder(collect);
  return names;
}
