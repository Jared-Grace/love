import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { js_literal_text_is } from "./js_literal_text_is.mjs";
export function js_object_property_text_is(ast, key) {
  "$plain key";
  "Whether one parsed file writes a word out under an object property of a given name, rather than working it out in code.";
  "IT IS THE QUESTION A WRITER HAS TO ASK BEFORE WRITING. Putting a word in place of the one a property holds only makes sense where a word is what the property holds; where the property holds a call, a sum, or a list the code builds a sentence out of, the same act would throw the code away, so the writer refuses. The refusal is right but it arrives as a complaint about a node, and a caller reading that has no way to tell a word nobody has written yet from a word the file works out for itself.";
  "SO THE ANSWER IS ASKED BEFORE THE ACT RATHER THAN READ OUT OF THE WRECKAGE. A caller that asks first can say which of those two happened, in the words of whatever it is doing, and a caller that does not ask still fails safely - this makes a bad message into a good one, and nothing else.";
  "TWO PROPERTIES OF THE SAME NAME ANSWER NO. One is what a writer can write over, so anything else is not a slot, whether the file holds none or holds several and cannot say which was meant.";
  let objects = js_list_type_nodes(ast, "ObjectExpression");
  let found = [];
  for (let object of objects) {
    let properties = property_get(object, "properties");
    for (let one of properties) {
      let key_node = property_get(one, "key");
      let name = property_get_or(key_node, "name", null);
      let spelled = property_get_or(key_node, "value", null);
      let named = equal(name, key);
      let valued = equal(spelled, key);
      if (named || valued) {
        found.push(one);
      }
    }
  }
  let one_is = equal(found.length, 1);
  if (not(one_is)) {
    return false;
  }
  let value_node = property_get(found[0], "value");
  let string_is = js_literal_text_is(value_node);
  return string_is;
}
