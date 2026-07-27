import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_any } from "./list_any.mjs";
import { assert_json } from "./assert_json.mjs";
import { not } from "./not.mjs";
export function js_array_elements_text_assert(elements) {
  "Refuses a written word going into a register that holds names of things rather than words.";
  "The two verbs look interchangeable and are not, and the wrong one fails in the worst way available: a written word dropped into a list of functions is rewritten by the auto pass into the name-of a function, so it reads as a live entry, sits among its neighbours looking exactly like them, and runs nothing - in the one kind of list whose whole job is to run what it holds. That was a warning written in prose next door and nothing enforced it, which is the same as not having it.";
  "An empty register is allowed, because it says nothing either way about what it is for.";
  function identifier_is(element) {
    let named = js_node_type_is(element, "Identifier");
    return named;
  }
  let named_any = list_any(elements, identifier_is);
  let word_wanted = not(named_any);
  assert_json(word_wanted, {
    hint: "this register holds names rather than written words, so a word added here would look like an entry and do nothing - the twin that adds a name is what was wanted",
  });
}
