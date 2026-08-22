import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { assert_json } from "./assert_json.mjs";
export function js_object_property_text_set(ast, key, text) {
  "$plain key";
  "$plain text";
  "In one parsed file, put a new written-out word in place of the one an object property already holds, found by the property's own name.";
  "IT SETS THE PRINTED SPELLING AS WELL AS THE VALUE. The printer writes a written-out word back out from the spelling it was read in as, so setting only the value leaves the file byte for byte what it was - and the command says it worked, because nothing threw and nothing was compared.";
  "IT REFUSES ANYTHING BUT EXACTLY ONE, and that is the whole of its safety. No property of that name means a caller naming something that is not there, and two means a file where the same name is written twice and the caller cannot have meant both.";
  "THE PROPERTY MUST ALREADY HOLD A WRITTEN-OUT WORD. A property holding a call or a sum is a property somebody wrote code into, and replacing that with a word would quietly throw the code away.";
  let objects = js_list_type_nodes(ast, "ObjectExpression");
  let found = [];
  for (let object of objects) {
    let properties = property_get(object, "properties");
    for (let one of properties) {
      let key_node = property_get(one, "key");
      let name = property_get(key_node, "name");
      let spelled = property_get(key_node, "value");
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
  let type = property_get(value_node, "type");
  let literal_is = equal(type, "Literal");
  assert_json(literal_is, {
    hint: "that property does not hold a written-out word, so putting one there would throw away whatever it does hold",
    key,
    type,
  });
  let raw = json_format_to(text);
  property_set(value_node, "value", text);
  property_set(value_node, "raw", raw);
  return property;
}
