import { js_visit_types } from "./js_visit_types.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { js_string } from "./js_string.mjs";
import { object_replace } from "./object_replace.mjs";
import { property_get } from "./property_get.mjs";
import { text_is } from "./text_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_starts_with_space } from "./text_starts_with_space.mjs";
import { text_skip_while } from "./text_skip_while.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
export function js_lesson_rights_space_strip(ast) {
  "takes the space off the front of every word a lesson hands over as the right-hand half of its own name, and answers how many it took";
  "Those words are joined with the section name and normalized into the slug a";
  "shared link is written with, and the normalizer collapses the run of underscores";
  "a leading space makes - so the space has no effect on the slug and never had. It";
  "is left over from a time the words followed a console.log prefix. Sixteen lessons";
  "carried it and two did not, which is the shape a convention has when nobody can";
  "see it.";
  "Only a list that a lesson actually uses for this is touched, found two ways";
  "because the lessons write it two ways: as the entry a shared builder reads, and";
  "as a name of its own standing beside the call. A word starting with a space";
  "anywhere else in a lesson is a sentence, and a sentence may begin how it likes.";
  "How many were taken is answered, because a run that found none must be able to";
  "say so - a sweep of eighteen files where seventeen were already right and one";
  "silently did nothing looks exactly like a sweep that worked.";
  let changed = 0;
  function list_strip(list_node) {
    let list_written_is = js_node_type_is(list_node, "ArrayExpression");
    if (not(list_written_is)) {
      return;
    }
    let elements = property_get(list_node, "elements");
    function element_strip(element) {
      let literal_is = js_node_type_is(element, "Literal");
      if (not(literal_is)) {
        return;
      }
      let held = js_literal_value_get(element);
      let word_is = text_is(held);
      if (not(word_is)) {
        return;
      }
      let leading = text_starts_with_space(held);
      if (not(leading)) {
        return;
      }
      let stripped = text_skip_while(text_starts_with_space, held);
      let word = js_string(stripped);
      object_replace(element, word);
      changed = add(changed, 1);
    }
    each(elements, element_strip);
  }
  function entry_each(v) {
    "the shape where the words are an entry handed to a builder the lessons share";
    let node = property_get(v, "node");
    let key = property_get(node, "key");
    let named = js_node_type_is(key, "Identifier");
    if (not(named)) {
      return;
    }
    let key_name = property_get(key, "name");
    let wanted = equal(key_name, "name_id_rights");
    if (not(wanted)) {
      return;
    }
    let value = property_get(node, "value");
    list_strip(value);
  }
  function declared_each(v) {
    "the shape where the words stand under a name of their own beside the call";
    let node = property_get(v, "node");
    let id = property_get(node, "id");
    let named = js_node_type_is(id, "Identifier");
    if (not(named)) {
      return;
    }
    let id_name = property_get(id, "name");
    ("a numbered second one counts too, since a file holding two lessons names them apart that way");
    let wanted = text_starts_with(id_name, "rights");
    if (not(wanted)) {
      return;
    }
    let init = property_get(node, "init");
    list_strip(init);
  }
  js_visit_types(ast, ["Property"], entry_each);
  js_visit_types(ast, ["VariableDeclarator"], declared_each);
  return changed;
}
