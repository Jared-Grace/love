import { js_literal_value_set } from "./js_literal_value_set.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
export function js_object_property_text_set(ast, key, text) {
  "$plain key";
  "$plain text";
  "In one parsed file, put a new written-out word in place of the one an object property already holds, found by the property's own name.";
  "THE WRITING ITSELF IS DONE BY THE ONE FUNCTION THAT WRITES A VALUE, which is where the reason it is more than one line lives. What is left here is the finding: which value is meant, answered by a name looked for across the whole file.";
  "IT REFUSES ANYTHING BUT EXACTLY ONE, and that is the whole of its safety. No property of that name means a caller naming something that is not there, and two means a file where the same name is written twice and the caller cannot have meant both.";
  "THE PROPERTY MUST ALREADY HOLD A WRITTEN-OUT WORD. A property holding a call or a sum is a property somebody wrote code into, and replacing that with a word would quietly throw the code away.";
  let objects = js_list_type_nodes(ast, "ObjectExpression");
  let found = [];
  for (let object of objects) {
    let properties = property_get(object, "properties");
    for (let one of properties) {
      let key_node = property_get(one, "key");
      ("A KEY IS ASKED BOTH WAYS AND NEITHER WAY IS AN ERROR. A property written plainly carries its name on a name node, and one written in quotes carries it as a written-out word; whichever it is, the other field is simply absent, so both are asked for tolerantly and the one that is there answers.");
      let name = property_get_or(key_node, "name", null);
      let spelled = property_get_or(key_node, "value", null);
      let named = equal(name, key);
      let valued = equal(spelled, key);
      if (named || valued) {
        list_add(found, one);
      }
    }
  }
  let count = list_size(found);
  let one_is = equal(count, 1);
  assert_json(one_is, {
    hint: "exactly one object property of that name has to be there to write over; none means the name is not in the file and two means the file writes it twice",
    key,
    count,
  });
  let property = found[0];
  let value_node = property_get(property, "value");
  js_literal_value_set(value_node, text);
  return property;
}
