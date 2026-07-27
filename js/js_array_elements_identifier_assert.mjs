import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_any } from "./list_any.mjs";
import { assert_json } from "./assert_json.mjs";
import { not } from "./not.mjs";
export function js_array_elements_identifier_assert(elements) {
  "Refuses a name going into a register that holds written words rather than names of things.";
  "The mirror of its twin, and the failure it prevents is louder but no more welcome: a name added to a list of words is read as something to look up, so the file stops loading altogether until somebody works out which of the two verbs was meant.";
  "An empty register is allowed, because it says nothing either way about what it is for.";
  function text_is(element) {
    let written = js_node_type_is(element, "Literal");
    return written;
  }
  let text_any = list_any(elements, text_is);
  let name_wanted = not(text_any);
  assert_json(name_wanted, {
    hint: "this register holds written words rather than names, so a name added here would be looked up and not found - the twin that adds a word is what was wanted",
  });
}
